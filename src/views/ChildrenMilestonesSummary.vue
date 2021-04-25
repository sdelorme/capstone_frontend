<template>
  <div class="children-milestones-summary">
    <h1>Child's Milestone Summary</h1>
    <div v-for="milestone in child.milestones" :key="milestone.id">
      <p>
        <b>Category: {{ milestone.milestone_category }}</b>
      </p>
      <p>Milestone: {{ milestone.description }}</p>
      <p>FIND WAY TO INCLUDE DATE ACCOMPLISHED FROM JOIN TABLE</p>
      <hr />
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <h2>Choose the Milestone Your Child Accomplished By Selecting Below</h2>
    <div v-for="newMilestone in milestones" :key="newMilestone.id">
      <strong>{{ newMilestone.milestone_category }}</strong>
      <br />
      {{ newMilestone.description }}
      <br />
      <i>Expected at: {{ newMilestone.stage }} Months</i>
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
      message: "",
      child: {},
      milestones: [],
    };
  },
  created: function () {
    axios.get("/api/children/" + this.$route.params.id).then((response) => {
      console.log("child show", response);
      this.child = response.data;
    });
    axios.get("/api/milestones").then((response) => {
      console.log("milestones index", response);
      this.milestones = response.data;
    });
  },
  methods: {},
};
</script>
