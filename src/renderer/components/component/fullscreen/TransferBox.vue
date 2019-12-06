<template>
  <div class="transfer-box">
    <div class="select-box">
      <div class="line"></div>
      <v-select
        :placeholder="$t(`message.transform.turnOutAccount`)"
        :label="$t('message.transform.from')"
        v-model="form.account"
        :select-data="currentSupportSite"
        :border="false"
        :contentKey="selectKey"
        valueKey="id"
        align="left"
      ></v-select>
      <v-form>
        <v-form-item :label="$t('message.version3.to')">
          <v-input
            :placeholder="$t('message.transform.swapAccount')"
            :disabled="true"
          ></v-input>
        </v-form-item>
      </v-form>
    </div>
    <v-form :form="form" :rules="rules" ref="form" class="number-warp">
      <v-form-item
        :label="$t('message.transform.transferAccount')"
        prop="number"
        unit="USDT"
      >
        <v-input
          v-model="form.number"
          limit="number"
          :precision="figure.indexPriceFloat"
          :max="maxAmount === '--' ? 0 : maxAmount"
          align="right"
        >
        </v-input>
        <span
          class="all"
          :class="{ disabled: maxAmount === 0 || maxAmount === '--' }"
          slot="unit"
          @click="transferAll"
        >{{ $t('message.version3.all') }}</span
        >
      </v-form-item>
    </v-form>
    <p class="max-amount">
      {{ $t(`message.transform.maxTransform`) }}：<span class="num">{{
        maxAmount | splitFormat(figure.indexPriceFloat)
      }}</span>
    </p>
    <v-button @click="submit" class="submit" :disabled="buttonDisabled">{{
      $t('message.transform.transform')
      }}
    </v-button>
    <p class="instructions">{{ $t(`message.transform.internalTransfer`) }}</p>
  </div>
</template>

<script>
  import * as Cookie from 'js-cookie'
  import AccountApi from '@/api/accountApi'
  import ToolsApi from '@/api/toolsApi'
  import {dataMixin, systemMixin, userMixin} from '@/mixins'

  export default {
    name: 'TransferBox',
    mixins: [userMixin, dataMixin, systemMixin],
    data() {
      const numberValidator = (rule, value, callback) => {
        if (value > this.maxAmount || (value == 0 && this.maxAmount == 0)) {
          return callback(new Error(this.$t('message.errorCode.602')))
        }
        if (value <= 0) {
          return callback(new Error(this.$t('message.errorCode.604')))
        } else {
          return callback()
        }
      }
      return {
        // 表单数据
        form: {
          // 账户
          account: '',
          number: ''
        },
        // 验证
        rules: {
          number: [
            {required: true, validator: numberValidator, trigger: 'blur'}
          ]
        },
        // 转账选择框数据(币种支持)
        supportSite: {},
        // 主站点
        mainSite: {},
        // 主资产账户
        mainAssets: {},
        // 其他各账户资产
        detailAssets: {},
        // 融资融币账户资产
        labsAssets: {},
        // 防连点开关
        onceClick: false,
        // 融资融币账户 ID
        labsAccountId: 9,
        // 当前账户 ID (USDT)
        targetSiteId: 11,
        // 是否是掉期账户
        swapsAccountId: 11,
        // ???
        regularAccountId: 12,
        // 最多可转出
        swapsMaxAmount: 0
      }
    },
    computed: {
      // 输入框用到的 key
      selectKey() {
        let keyMap = {
          cn: 'name',
          en: 'nameEn',
          ko: 'nameKo',
          ja: 'nameJa',
          ru: 'nameRu'
        }
        return keyMap[this.locale]
      },
      // 当前币种数据,过滤 usdt
      currentSupportSite() {
        return (
          this.supportSite[this.currentContract.quoteCurrencyId] || []
        ).filter(item => item.id !== 11)
      },
      // 最大可转
      maxAmount() {
        if (!Cookie.get('token')) return '--'
        if (this.form.account === '') return '--'
        let max =
          this.form.account === this.mainSite.id
            ? this.mainAssets[this.currentContract.quoteCurrencyId].available
            : // 是否是融资融币账户
            this.form.account === this.labsAccountId
              ? // 是否有借款
              this.labsAssets &&
              !(
                this.labsAssets.borrow.baseBorrow ||
                this.labsAssets.borrow.quoteBorrow
              )
                ? this.labsAssets.assetsInfo[
                  this.currentContract.unit.toUpperCase() ===
                  this.labsAssets.assetsInfo.baseName
                    ? 'baseAvailable'
                    : 'quoteAvailable'
                  ]
                : 0
              : // 是否是掉期账户
              this.form.account === this.swapsAccountId
                ? this.getSwapsAvailable(this.currentContract.quoteCurrencyId)
                : this.form.account === this.regularAccountId
                ? this.getRegularAvailable(this.currentContract.quoteCurrencyId)
                : this.detailAssets[this.currentContract.quoteCurrencyId][
                  this.form.account
                  ].available
        if (
          this.form.account === 2 &&
          this.currentContract.unit.toUpperCase() === 'BTC'
        ) {
          max = Math.min(5, max)
        }
        return Number(max)
      },
      // 转账按钮禁用
      buttonDisabled() {
        return !Object.values(this.form).every(item => item)
      }
    },
    watch: {
      'form.account'() {
        this.$refs.form.reset('number')
      }
    },
    methods: {
      // 全部转账
      transferAll() {
        if (this.maxAmount === 0 || this.maxAmount === '--') return
        this.form.number = this.$filter.splitFormat(
          this.maxAmount,
          this.figure.indexPriceFloat
        )
      },
      // 获取资产
      getAssets() {
        AccountApi.getAssetsMain()
          .then(res => {
            this.mainAssets = res.data.assets
          })
          .catch(() => {
          })
        AccountApi.getAssetsDetail()
          .then(res => {
            this.detailAssets = res.data.assetsDetail
          })
          .catch(() => {
          })
        AccountApi.getUserAssetsList()
          .then(res => {
            this.labsAssets = res.data
          })
          .catch(() => {
          })
      },
      // 获取选怎列表
      getSelectList() {
        ToolsApi.getCurrencyAll()
          .then(res => {
            this.supportSite = res.data.siteCurrencyAll
          })
          .catch(err => {
            console.error(err)
          })
        ToolsApi.getMainSite()
          .then(res => {
            this.mainSite = res.data.site
          })
          .catch(err => {
            console.error(err)
          })
      },
      // 获取掉期用户的最多可转出
      getSwapsAvailable(currencyId) {
        AccountApi.swapsAvailable(currencyId)
          .then(res => {
            if (res.data) {
              this.swapsMaxAmount = res.data.swapsAvailable
            }
          })
          .catch()
        return this.swapsMaxAmount
      },
      // 定期账户最大可用余额
      getRegularAvailable(currencyId) {
        AccountApi.regularAvailable(currencyId)
          .then(res => {
            if (res.data) {
              this.swapsMaxAmount = res.data.available
            }
          })
          .catch()
        return this.swapsMaxAmount
      },
      // 提交
      submit() {
        this.$refs.form.verification().then(async re => {
          try {
            if (this.onceClick) return false
            this.onceClick = true
            let params = {
              currencyId: this.currentContract.quoteCurrencyId,
              triggerSiteId: this.form.account,
              targetSiteId: this.targetSiteId,
              amount: this.form.number
            }
            await AccountApi.transfer(params)
            this.onceClick = false
            this.$notify({
              title: this.$t(`message.common.success`),
              type: 'success'
            })
            setTimeout(() => {
              this.getAssets()
            }, 300)
          } catch (error) {
            this.$notify({
              title: this.$dictionary.error(error.data.code),
              type: 'warning'
            })
            this.onceClick = false
          } finally {
            this.$emit('close')
          }
        })
      }
    },
    created() {
      this.getSelectList()
      this.getAssets()
    }
  }
</script>

<style lang="less" scoped="">
  @import (reference) '../../assets/css/theme';

  .black {
    .themeBlack();

    .transfer-box {
      .select-box {
        border: 1px solid @inputBorderColor;
        border-radius: 3px;
        padding-left: 24px;
        position: relative;
        background-color: @inputColor;

        .line {
          position: absolute;
          height: 33px;
          width: 1px;
          border-right: 1px @inputBorderColor dashed;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);

          &::after {
            position: absolute;
            content: '';
            left: -2px;
            top: -6px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: @iconColor;
          }

          &::before {
            position: absolute;
            left: -2px;
            bottom: -6px;
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: @tradeGreen;
          }
        }

        /deep/ .select {
          border-bottom: 1px solid @inputBorderColor;
        }

        /deep/ .select-default {
          .label {
            color: @middleFontColor;
          }
        }

        /deep/ .disabled {
          border: none;

          input {
            background-color: transparent;
          }

          .left {
            padding-left: 80px;
          }
        }
      }

      .number-warp {
        margin-top: 10px;

        .all {
          color: @iconColor;
          cursor: pointer;
        }

        .disabled {
          color: @middleFontColor;
        }
      }

      .max-amount {
        font-size: 14px;
        margin-top: 10px;
        color: @darkFontColor;
      }

      .submit {
        margin-top: 10px;
        width: 100%;

        /deep/ button {
          width: 100%;
        }
      }

      .instructions {
        margin-top: 10px;
        font-size: 12px;
        color: @middleFontColor;
        text-align: center;
      }
    }
  }

  .white {
    .themeWhite();

    .transfer-box {
      .select-box {
        border: 1px solid @inputBorderColor;
        border-radius: 3px;
        padding-left: 24px;
        position: relative;
        background-color: @inputColor;

        .line {
          position: absolute;
          height: 33px;
          width: 1px;
          border-right: 1px @inputBorderColor dashed;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);

          &::after {
            position: absolute;
            content: '';
            left: -2px;
            top: -6px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: @iconColor;
          }

          &::before {
            position: absolute;
            left: -2px;
            bottom: -6px;
            content: '';
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: @tradeGreen;
          }
        }

        /deep/ .select {
          border-bottom: 1px solid @inputBorderColor;
        }

        /deep/ .select-default {
          .label {
            color: @middleFontColor;
          }
        }

        /deep/ .disabled {
          border: none;

          input {
            background-color: transparent;
          }

          .left {
            padding-left: 80px;
          }
        }
      }

      .number-warp {
        margin-top: 10px;

        .all {
          color: @iconColor;
          cursor: pointer;
        }
      }

      .max-amount {
        font-size: 14px;
        margin-top: 10px;
        color: @darkFontColor;
      }

      .submit {
        margin-top: 10px;
        width: 100%;

        /deep/ button {
          width: 100%;
        }
      }

      .instructions {
        margin-top: 10px;
        font-size: 12px;
        color: @middleFontColor;
        text-align: center;
      }
    }
  }
</style>
