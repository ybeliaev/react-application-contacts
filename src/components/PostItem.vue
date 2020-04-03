<template>
  <li>
    <h2>{{post.title}}</h2>
    <p>{{post.text}}</p>
    <a v-bind:href="post.href">Link</a>
    <button>&#128169;</button>
  </li>
</template>
<script>
export default {
  name: "PostItem",
  props: ["post"]
};
</script>

