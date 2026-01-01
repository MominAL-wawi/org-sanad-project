<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "مرحباً بك",
    },
  },
};
</script>

<style scoped>
.hello {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-weight: 700;
  color: var(--primary-color);
}
</style>
