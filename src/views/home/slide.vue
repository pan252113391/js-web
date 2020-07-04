<template>
  <div class="slide">
    <div class="show" @click="isChange" :class="{isShow:isCollapse}" ref="logo">
      <img src="../../assets/logo.png" alt />
    </div>
    <el-menu
      class="el-menu-vertical-demo el-menu-border"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :router="true"
    >
      <template v-for="item in router">
        <el-submenu :index="item.path" :key="item.id" v-if="item.hidden">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.meta.name}}</span>
          </template>
          <el-menu-item-group>
            <template v-for="ite in item.children" >
               <el-menu-item :index="ite.path" :key="ite.id">{{ite.meta.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home-slide",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    router() {
      return this.$router.options.routes
    }
  },
  methods: {
    handleOpen(key, keyPath) {
            console.log(this.$router.options.routes);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    isChange() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped lang="scss">
// .slide {
//   display: flex;
//   flex-direction: column;
// }
.show {
  width: 200px;
  transition: all 0.3s;
}
img {
  width: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
}
.isShow {
  width: 63px;
}
</style>

