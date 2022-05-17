<template>
  <header class="children-show masthead bg-primary text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <h1 class="masthead-heading text-uppercase text-secondary mb-2">{{ child.name }}</h1>
      <h3 class="mb-2 text-primary">Born: {{ child.birthdate }}</h3>
      <img class="masthead-heading mb-2" v-bind:src="child.image" alt="..." />
      <!-- Icon Divider-->
      <div class="divider-custom divider-dark">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading text-primary font-weight-light mb-0">
        <router-link v-bind:to="`/children/${child.id}/milestones`">
          Click here to see your child's milestone summary
        </router-link>
      </p>
      <div class="divider-custom divider-dark">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <p class="masthead-subheading font-weight-light text-primary mb-0"><i>Coming soon: Link to growth log</i></p>
      <div class="divider-custom divider-dark">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <router-link class="masthead-subheading font-weight-light text-primary mb-0" to="/children">
        Back to all children
      </router-link>
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
