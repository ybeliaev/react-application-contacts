<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <PostLists/>
  </div>
</template>

<script>
import PostLists from "@/components/PostLists";
export default {
  name: "App",
  components: {
    PostLists
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}
</style>
