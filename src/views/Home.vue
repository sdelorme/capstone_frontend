<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="child in children" :key="child.id">
      <router-link v-bind:to="`/children/${child.id}`">Child: {{ child.name }}</router-link>
      <hr />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here are all the kids you have!",
      children: [],
    };
  },
  created: function () {
    axios.get("/api/children").then((response) => {
      console.log("children index", response);
      this.children = response.data;
    });
  },
  methods: {},
};
</script>
