<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="/">Grow, Baby, Grow!</a>
          <button
            class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold btn btn-primary text-white rounded"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li v-if="!isLoggedIn()" class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/signup">Sign Up</a>
              </li>
              <li v-if="!isLoggedIn()" class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/login">Login</a>
              </li>
              <li v-if="isLoggedIn()" class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/">Home</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/milestones">CDC Milestones</a>
              </li>
              <li v-if="isLoggedIn()" class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/children">My Children</a>
              </li>
              <li v-if="isLoggedIn()" class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <router-view />
    <div class="scroll-to-top d-lg-none position-fixed">
      <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      console.log("logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
