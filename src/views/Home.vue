<template>
  <div class="home">
    <header class="masthead bg-primary text-secondary text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <h1 class="masthead-heading text-uppercase mb-0">{{ message }}</h1>
        <div class="divider-custom divider-dark">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <img class="masthead-avatar mb-5" src="/assets/img/vector-baby-silhouettes-removebg-preview.jpg" alt="..." />
        <!-- Masthead Heading-->
        <!-- Icon Divider-->
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">
          <a type="button" class="btn btn-primary text-white" v-if="$parent.isLoggedIn()" href="/children">
            Take me to my children
          </a>
        </p>
        <p class="masthead-subheading font-weight-light mb-0">
          <router-link type="button" class="btn btn-primary text-white" v-bind:to="`/milestones`">
            Take me to the CDC Milestones
          </router-link>
        </p>
      </div>
    </header>
    <section class="page-section text-secondary mb-0" id="about">
      <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-secondary">About</h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-dark">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-baby-carriage"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- About Section Content-->
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <p class="lead">
              Grow, Baby, Grow was created to provide new parents a one-stop shop for everything baby. Right now GBG
              serves as a reference to and tracker of your child's developmental milestones. All milestones listed in
              GBG are from the CDC.
            </p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">
              Many new things to come in the near future to Grow, Baby, Grow! You will soon be able to post pictures
              along the way, track your child's growth metrics, and share all of these magical moments with your parent
              friends!
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              555 Baby Lane
              <br />
              Chicago, IL 60606
            </p>
          </div>
          <!-- Footer Social Icons-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Find Us On Social Media!</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-instagram"></i></a>
          </div>
          <!-- Footer About Text-->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">Contact Us</h4>
            <p class="lead mb-0">growbabygrow@email.com</p>
            <p class="lead mb-0">555-555-5555</p>
          </div>
        </div>
      </div>
    </footer>
    <!-- THIS IS THE BREAK -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Grow, Baby, Grow!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
