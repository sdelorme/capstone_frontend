<template>
  <div class="children-milestones-summary">
    <h1>Child's Milestone Summary</h1>
    <div v-for="milestone in child.milestones" :key="milestone.id">
      <p>
        <b>Category: {{ milestone.milestone_category }}</b>
      </p>
      <p>Milestone: {{ milestone.description }}</p>
      <p v-for="date in child.date_accomplished" :key="date.id">
        Date accomplished: HELP!!!!!! {{ date.date_accomplished }}
        <br />
        Status: {{ date.status }}
      </p>
      <hr />
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <h2>Choose the Milestone Your Child Accomplished By Selecting Below</h2>
    <div v-for="newMilestone in milestones" :key="newMilestone.id">
      <input type="checkbox" name="milestones" v-model="children_milestones" v-bind:value="newMilestone.id" />
      {{ newMilestone.milestone_category }}
      <br />
      {{ newMilestone.description }}
      <br />
      <i>Expected at: {{ newMilestone.stage }} Months</i>
      <hr />
    </div>
    <button v-on:click="addChildMilestone()">Add Milestone</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      child: {},
      milestones: [],
      children_milestones: [],
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
  methods: {
    addChildMilestone: function () {
      var params = {
        child_id: this.child.id,
        children_milestones: this.children_milestones,
        // add date accomplished here
        status: "true",
      };
      axios.post("/api/children_milestones", params).then((response) => {
        console.log("adding child milestone", response);
        location.reload();
      });
    },
  },
};
</script>
