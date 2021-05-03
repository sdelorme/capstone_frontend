<template>
  <div class="home">
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img class="masthead-avatar mb-5" src="/assets/img/giraffe-mother-baby.jpg" alt="..." />
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">{{ message }}</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">
          <a v-if="$parent.isLoggedIn()" href="/children">Take me to my children</a>
        </p>
        <p class="masthead-subheading font-weight-light mb-0">
          <router-link v-bind:to="`/milestones`">Take me to the CDC Milestones</router-link>
        </p>
      </div>
    </header>
    <!-- THIS IS THE BREAK -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome parents!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
