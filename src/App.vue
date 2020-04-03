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
        {
          id: 1,
          title: "About Vue",
          text: "Vue is a china framework.",
          href: "https://ru.vuejs.org/"
        },
        {
          id: 2,
          title: "Angular",
          text: "Angular 9 is now.",
          href: "https://angular.io/"
        },
        {
          id: 3,
          title: "Java Script",
          text: "JS is popular programming language.",
          href: "https://javascript.info/"
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
