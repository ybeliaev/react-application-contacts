<template>
  <ul>
    <PostItem v-for="post in postData" :key="post.id"/>
  </ul>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {
    PostItem
  },
  props: {
    postData: {
      type: Array,
      required: true
    }
  }
};
</script>
