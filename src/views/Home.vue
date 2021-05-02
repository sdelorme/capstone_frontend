<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <router-link v-if="$parent.isLoggedIn()" v-bind:to="`/children`">Take me to my children</router-link>
    <br />
    <router-link v-bind:to="`/milestones`">Take me to the CDC Milestones</router-link>
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
