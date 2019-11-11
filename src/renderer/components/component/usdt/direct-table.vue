<template>
  <div class="direct-table">
    <table border="1">
      <thead>
      <tr>
        <th :class="{'paddingLR0': $i18n.locale === 'ru'}" :style="{'text-align': textAlign}" v-for="(item, index) in theadList" :key="index">{{item}}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in tbodyList" :key="index">
        <td align="center" :style="tdWidth ? {'width': tdWidth[index] ? tdWidth[index] : tdWidth[0], 'text-align': textAlign} : ''" v-for="(todo, index) in item" :key="index">{{todo}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      theadList: {
        type: Array
      },
      tbodyList: {
        type: Array
      },
      tdWidth: {
        type: Array
      },
      textAlign: {
        type: String,
        default: 'left'
      }
    }
  }
</script>

<style lang="less" scoped>
  .direct-table {
    width: 879px;
    margin: 16px auto 0;
    padding-bottom: 25px;
    background-color: #fff;
    table {
      width: 100%;
      border-collapse: collapse;
      border-color: #fff;
      thead {
        width: 100%;
        tr {
          background: #F8F9FC;
          th {
            height: 36px;
            padding: 5px 20px;
            font-size: 12px;
            color: #24324C;
            font-family: PingFangSC-Medium;
            line-height: 16px;
            border: solid 1px #ECF0F7;
          }
        }
      }
      tbody {
        width: 100%;
        tr {
          /*&:nth-child(odd) {*/
            /*background-color: #fafafb;*/
          /*}*/
          td {
            // width: 100px;
            height: 30px;
            padding: 0 20px;
            font-size: 12px;
            color: #24324C;
            border: solid 1px #ECF0F7;
          }
        }
      }
    }
    .paddingLR0 {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>

