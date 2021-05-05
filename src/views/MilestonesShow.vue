<template>
  <div class="milestone-show masthead bg-primary text-secondary text-center">
    <div class="masthead-subheading text-secondary mb-2">
      <p>
        <strong>Category:</strong>
        {{ milestone.milestone_category }}
      </p>
      <br />
      <p>
        <strong>Description:</strong>
        {{ milestone.description }}
      </p>
      <br />
      <p>
        <i>
          <strong>Expected at:</strong>
          {{ milestone.stage }} Months
        </i>
      </p>
      <hr />
      <img class="masthead-heading mb-2" src="http://phil.cdc.gov/PHIL_Images/20656/20656_lores.jpg" alt="..." />
      <img class="masthead-heading mb-2" src="http://phil.cdc.gov/PHIL_Images/20657/20657_lores.jpg" alt="..." />
      <img class="masthead-heading mb-2" src="http://phil.cdc.gov/PHIL_Images/20658/20658_lores.jpg" alt="..." />
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
