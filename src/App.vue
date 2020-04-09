<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <AddPost @add-post="addPost"/>
    <PostLists :postData="postData" @remove-somepost="removePost"/>
  </div>
</template>

<script>
import PostLists from "@/components/PostLists";
import AddPost from "@/components/AddPost";
export default {
  name: "App",
  data() {
    return {
      postData: [
        {
          id: 1,
          title: "About Vue",
          text: "Vue is a china framework.",
          href: "https://ru.vuejs.org/",
          visited: false
        },
        {
          id: 2,
          title: "Angular",
          text: "Angular 9 is now.",
          href: "https://angular.io/",
          visited: false
        },
        {
          id: 3,
          title: "Java Script",
          text: "JS is popular programming language.",
          href: "https://javascript.info/",
          visited: false
        }
      ]
    };
  },
  methods: {
    removePost(id) {
      // console.log(this.postData);
      this.postData = this.postData.filter(item => item.id !== id);
    },
    addPost(post) {
      this.postData.push(post);
    }
  },
  components: {
    PostLists,
    AddPost
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
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
