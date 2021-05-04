<template>
  <header class="children-show masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <h1 class="masthead-heading text-uppercase mb-2">{{ child.name }}</h1>
      <h3 class="mb-2">Born: {{ child.birthdate }}</h3>
      <img class="masthead-heading mb-2" v-bind:src="child.image" alt="..." />
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">
        <router-link v-bind:to="`/children/${child.id}/milestones`">
          Click here to see your child's milestone summary
        </router-link>
      </p>
      <p class="masthead-subheading font-weight-light mb-0"><i>Coming soon: Link to growth log</i></p>
      <router-link to="/children">Back to all chldren</router-link>
      <p class="masthead-subheading font-weight-light mb-0"></p>
    </div>
  </header>
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
