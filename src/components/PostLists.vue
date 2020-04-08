<template>
  <ul>
    <PostItem
      v-for="post in postData"
      :key="post.id"
      v-bind:post="post"
      v-on:remove-block="removePost"
    />
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
  },
  methods: {
    removePost(id) {
      console.log(id);
    }
  }
};
</script>
