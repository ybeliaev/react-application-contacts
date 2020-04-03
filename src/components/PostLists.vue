<template>
  <ul>
    <PostItem v-for="post in postData" :key="post.id" v-bind:post="post"/>
  </ul>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  props: {
    postData: {
      type: Array,
      required: true
    }
  },
  components: {
    PostItem
  }
};
</script>
