<template>
  <div class="children-new masthead bg-primary text-white text-center">
    <h1>New Child</h1>
    <form v-on:submit.prevent="createChild()">
      <ul>
        <li v-for="error in errors" :key="error.id">{{ error }}</li>
      </ul>
      <p>
        Name:
        <input v-model="newChildName" />
      </p>
      <p>
        Birthdate:
        <input v-model="newChildBirthdate" />
      </p>
      <p>
        Image:
        <input v-model="newChildImage" />
      </p>
      <p><input type="submit" value="Add Child" /></p>
    </form>
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
