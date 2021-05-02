<template>
  <div class="children-milestones-summary">
    <h1>Child's Milestone Summary</h1>
    <div v-for="milestone in child.milestones" :key="milestone.id">
      <p>
        <b>Category: {{ milestone.milestone_category }}</b>
      </p>
      <p>Milestone: {{ milestone.description }}</p>
      {{ child.children_milestones }}
      Date Accomplished: {{ milestone.date_accomplished }}
      <hr />
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <h2>Choose the Milestone Your Child Accomplished By Selecting Below</h2>
    <div v-for="newMilestone in milestones" :key="newMilestone.id">
      <input type="checkbox" name="milestones" v-model="newMilestone.status" v-bind:value="newMilestone.id" />
      {{ newMilestone.milestone_category }}
      <br />
      {{ newMilestone.description }}
      <br />
      <i>Expected at: {{ newMilestone.stage }} Months</i>
      <p><input type="date" v-model="newMilestone.date" /></p>
      <p>{{ newMilestone }}</p>
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
      newMilestoneDate: "",
    };
  },
  created: function () {
    axios.get("/api/children/" + this.$route.params.id).then((response) => {
      console.log("child show", response);
      this.child = response.data;
      this.milestones = response.data.incomplete_milestones;
    });
    // r
  },
  methods: {
    addChildMilestone: function () {
      var params = {
        child_id: this.child.id,
        children_milestones: this.milestones.filter((milestone) => milestone.status),
        // date_accomplished: this.milestones.date,
      };
      axios.post("/api/children_milestones", params).then((response) => {
        console.log("adding child milestone", response);
        location.reload();
      });
    },
  },
};
</script>
