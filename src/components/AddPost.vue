<template>
  <form @submit.prevent="onSubmit">
    <input type="text" placeholder="Input title" v-model="title">
    <textarea placeholder="Input post text" cols="30" rows="5" v-model="postText"></textarea>
    <button type="submit">Create post</button>
  </form>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      title: "",
      postText: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newPost = {
          id: Date.now(),
          title: this.title,
          text: this.postText,
          href: "#",
          visited: false
        };

        this.$emit("add-post", newPost);
        this.title = "";
        this.postText = "";
      }
    }
  }
};
</script>

