<template>
  <div class="home masthead bg-primary text-secondary text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">{{ message }}</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-dark">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <div v-for="child in children" :key="child.id" class="masthead-subheading font-weight-light mb-0">
        <router-link v-bind:to="`/children/${child.id}`">
          <img class="masthead-avatar mb-5" v-bind:src="child.image" alt="..." />
          <p>{{ child.name }}</p>
        </router-link>

        <hr />
      </div>
      <router-link type="button" class="btn btn-primary" v-bind:to="`/children/new`">Add a child</router-link>
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
