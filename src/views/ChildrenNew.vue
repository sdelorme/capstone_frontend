<template>
  <div class="masthead bg-primary text-secondary text-center">
    <div class="container">
      <h1 class="masthead-heading text-center mb-2">New Child</h1>
      <hr />
      <form v-on:submit.prevent="createChild()">
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
        <p class="masthead-subheading font-weight-light mb-0">
          Name:
          <input v-model="newChildName" />
        </p>
        <br />
        <p class="masthead-subheading font-weight-light mb-0">
          Birthdate:
          <input v-model="newChildBirthdate" />
        </p>
        <br />
        <p class="masthead-subheading font-weight-light mb-0">
          Profile Picture:
          <input v-model="newChildImage" />
        </p>
        <p>Use an image URL</p>
        <hr />
        <p><input class="btn btn-primary" type="submit" value="Add Child" /></p>
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newChildName: "",
      newChildBirthdate: "",
      newChildImage: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createChild: function () {
      var params = {
        name: this.newChildName,
        birthdate: this.newChildBirthdate,
        image: this.newChildImage,
        user_id: localStorage.getItem("user_id"),
      };
      axios
        .post("/api/children", params)
        .then((response) => {
          console.log("creating child", response);
          this.$router.push("/children");
        })
        .catch((error) => {
          console.log("child create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
