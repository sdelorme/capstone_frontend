<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="milestone in milestones" :key="milestone.id">
      <div>
        <strong>{{ milestone.milestone_category }}</strong>
        <br />
        {{ milestone.description }}
        <br />
        <i>Expected at: {{ milestone.stage }} Months</i>
        <br />
        <router-link v-bind:to="`/milestones/${milestone.id}`">Click here to learn more</router-link>
        <hr />
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Milestones Index Page!",
      milestones: [],
    };
  },
  created: function () {
    axios.get("/api/milestones").then((response) => {
      console.log("milestones index", response);
      this.milestones = response.data;
    });
  },
  methods: {},
};
</script>
