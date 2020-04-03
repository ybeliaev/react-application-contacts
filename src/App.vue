<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <PostLists :postData="postData"/>
  </div>
</template>

<script>
import PostLists from "@/components/PostLists";
export default {
  name: "App",
  data() {
    return {
      postData: [
        { id: 1, title: "About Vue", text: "Vue is a china framework." },
        { id: 2, title: "Angular", text: "Angular 9 is now." },
        {
          id: 3,
          title: "About Vue",
          text: "JS is popular programming language."
        }
      ]
    };
  },
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
