<template>
  <div class="home">
    <div class="left">
      <Slide></Slide>
    </div>
    <div class="right">
      <Nav></Nav>
      <Content></Content>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "./home/content";
import Nav from "./home/nav";
import Slide from "./home/slide";
export default {
  name: "Home",
  components: {
    Slide,
    Nav,
    Content
  }
};
</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  display: flex;
  .left {
    background-color: #545c64;
  }
  .right {
    flex: 1;
    background-color: rgb(247, 191, 191);
  }
}
</style>

