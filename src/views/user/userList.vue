<template>
  <div class="user-list">
    <el-table :data="tableData" style="width: 100%">
      <span slot="label">小明</span>
      <el-table-column prop="id" label="日期" width="180"></el-table-column>
      <el-table-column prop="truename" label="姓名" width="180"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="姓名" width="180"></el-table-column>
      <el-table-column prop="role" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
import { getUserApi } from "../../api/user.js";
export default {
  name: "user-list",
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      let req = {
        pageNumber:1, //页码
        pageSize: 2 // 数量
      };
      getUserApi(req)
        .then(res => {
          let userData = res.data.data.data;
          this.tableData = userData;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>

