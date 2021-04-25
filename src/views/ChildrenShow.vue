<template>
  <div class="children-show">
    <h1>{{ child.name }}</h1>
    <h3>Born: {{ child.birthdate }}</h3>
    <h5>Milestones</h5>
    <div v-for="milestone in child.milestones" :key="milestone.id">
      <p>
        <b>Category: {{ milestone.milestone_category }}</b>
      </p>
      <p>Milestone: {{ milestone.description }}</p>
      <hr />
    </div>
    <p>INSERT LINK TO MILESTONES SUMMARY PAGE HERE</p>
    <p>INSERT LINK TO GROWTH SUMMARY PAGE HERE</p>
    <router-link to="/children">Back to all chldren</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      child: {},
    };
  },
  created: function () {
    axios.get("/api/children/" + this.$route.params.id).then((response) => {
      console.log("child show", response);
      this.child = response.data;
    });
  },
  methods: {},
};
</script>
