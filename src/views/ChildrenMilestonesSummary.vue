<template>
  <div class="children-milestones-summary bg-primary text-center">
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          {{ child.name }}'s Milestone Summary
        </h2>

        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
          <!-- Portfolio Item 1-->
          <div v-for="milestone in child.milestones" :key="milestone.id" class="col-md-6 col-lg-4 mb-5 col-sm-6">
            <div class="card portfolio-item mx-auto h-100">
              <div class="card-body portfolio-item-caption-content text-center">
                <h5 class="card-header">SUMMARY</h5>
                <p class="card-body">
                  <b>Category:</b>
                  {{ milestone.milestone_category }}
                  <br />
                  <br />
                  <b>Milestone:</b>
                  {{ milestone.description }}
                </p>
                <div class="card-footer text-muted">
                  <p>
                    <b>Date Accomplished:</b>
                    {{ milestone.date_accomplished }}
                  </p>
                  <hr />
                  <i>Expected at: {{ milestone.stage }} Months</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
    <!-- this is where the incomplete_milestones start -->
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">{{ message }}</h2>

        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <button type="button" class="btn btn-primary btn-lg" v-on:click="addChildMilestone()">Record Milestones</button>
        <br />
        <br />
        <br />
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
          <!-- Portfolio Item 1-->
          <div v-for="newMilestone in milestones" :key="newMilestone.id" class="col-md-6 col-lg-4 mb-5 col-sm-6">
            <div class="card portfolio-item mx-auto h-100">
              <div class="card-body portfolio-item-caption-content text-center">
                <input type="checkbox" name="milestones" v-model="newMilestone.status" v-bind:value="newMilestone.id" />
                <label class="form-check-label" for="milestones">Select</label>
                <h5 class="card-header">{{ newMilestone.milestone_category }}</h5>
                <p class="card-body">{{ newMilestone.description }}</p>
                <!-- <router-link v-bind:to="`/milestones/${newMilestone.id}`" class="btn btn-primary">
                  Click here to learn more
                </router-link> -->
                <div class="card-footer text-muted">
                  <p>
                    Date Accomplished
                    <input type="date" v-model="newMilestone.date" />
                  </p>
                  <hr />
                  <i>Expected at: {{ newMilestone.stage }} Months</i>
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
      child: {},
      message: "Choose which milestone was accomplished:",
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
