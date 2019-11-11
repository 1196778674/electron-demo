<template>
  <div>{{list}}{{list}}</div>
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
          let arr = res.data.contractList || [];
          arr = Filter.reRepeatArr(arr, "id");
          arr.forEach(item => {
            if (!item.contractParam) {
              item.contractParam = {};
            }
          });
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
