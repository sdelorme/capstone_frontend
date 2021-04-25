<template>
  <div class="children-show">
    <h1>{{ child.name }}</h1>
    <h3>Born: {{ child.birthdate }}</h3>
    <router-link v-bind:to="`/children/${child.id}/milestones`">
      Click here to see your child's milestone summary
    </router-link>
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
