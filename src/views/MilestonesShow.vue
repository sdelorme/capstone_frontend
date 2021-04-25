<template>
  <div class="milestone-show">
    <div>
      <strong>{{ milestone.milestone_category }}</strong>
      <br />
      {{ milestone.description }}
      <br />
      <i>Expected at: {{ milestone.stage }} Months</i>
      <hr />
      <h1>INSERT VIDEO URL TO PLAY HERE/PICTURE TO VIEW HERE</h1>
    </div>
    <router-link to="/milestones">Back to all milestones</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      milestone: {},
    };
  },
  created: function () {
    axios.get("/api/milestones/" + this.$route.params.id).then((response) => {
      console.log("milestone show", response);
      this.milestone = response.data;
    });
  },
  methods: {},
};
</script>
