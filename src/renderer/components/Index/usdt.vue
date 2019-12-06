<template>
  <div>
    <h1>{{$t('message.header.usdtTrade')}}</h1>
    {{list}}
  </div>
</template>

<script>
import headerApi from "@/assets/js/api/headerApi";
import Filter from "../../assets/js/filter";
export default {
  name: "usdt",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.GET_LIST();
  },
  methods: {
    GET_LIST() {
      headerApi
        .getContractAllList()
        .then(res => {
          let arr = res.data.productList || [];
          this.list = arr;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
