<template>
  <ul>
    <PostItem
      v-for="(post, i) in postData"
      :key="post.id"
      v-bind:post="post"
      v-bind:index="i"
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
      this.$emit("remove-somepost", id);
    }
  }
};
</script>
