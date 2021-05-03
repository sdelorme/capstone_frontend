<template>
  <div class="milestones-index">
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Milestones</h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
          <!-- Portfolio Item 1-->
          <div v-for="milestone in milestones" :key="milestone.id" class="col-md-6 col-lg-4 mb-5 col-sm-6">
            <div class="card portfolio-item mx-auto h-100">
              <div class="card-body portfolio-item-caption-content text-center">
                <h5 class="card-header">{{ milestone.milestone_category }}</h5>
                <p class="card-text">{{ milestone.description }}</p>
                <router-link v-bind:to="`/milestones/${milestone.id}`" class="btn btn-primary">
                  Click here to learn more
                </router-link>
                <div class="card-footer text-muted">
                  <i>Expected at: {{ milestone.stage }} Months</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Milestones Index Page!",
      milestones: [],
    };
  },
  created: function () {
    axios.get("/api/milestones").then((response) => {
      console.log("milestones index", response);
      this.milestones = response.data;
    });
  },
  methods: {},
};
</script>
