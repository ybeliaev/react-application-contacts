<template>
  <li>
    <h2>{{post.title}}</h2>
    <p>{{post.text}}</p>
    <a v-bind:href="post.href" :class="{done: post.visited}" target="_blank">Link</a>
    <button>&#128169;</button>
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
done {
  color: #41B883;
}
</style>


