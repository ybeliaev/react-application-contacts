<template>
  <li>
    <h2 :class="{done:post.visited}">{{post.title}}</h2>
    <p>{{post.text}}</p>
    <a v-bind:href="post.href" target="_blank">Link</a>
    <input v-on:change="post.visited=!post.visited" type="checkbox">
    <button v-on:click="$emit('remove-block', post.id)">&#128169;</button>
  </li>
</template>
<script>
export default {
  name: "PostItem",
  props: ["post"]
};
</script>

<style scoped>
a {
  margin-right: 1rem;
  text-decoration: none;
}
.done {
  color: #41B883;
}
</style>


