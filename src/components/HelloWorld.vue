<template>
  <div>
    <div class="input-container">
      <input type="text" placeholder="First Name" v-model="firstName" />
    </div>
    <div class="input-container">
      <custom-input v-model="lastName" />
    </div>
    <div class="input-container">
      <span> Hi, {{ fullname }} </span>
    </div>
    <my-button btnText="Save" color="blue" @submit="onClickBtn" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import CustomInput from "./CustomInput.vue";
import { mapState } from "vuex";

export default {
  name: "HelloWorld",
  components: {
    "my-button": Button,
    CustomInput,
  },
  data: () => ({
    firstName: "",
    lastName: "",
  }),
  computed: {
    ...mapState({
      fullname: (state) => state.helloworld.fullName,
    }),
  },
  methods: {
    onClickBtn() {
      console.log("Submit triggered from child component!");
      console.log("First Name: " + this.firstName);
      console.log("Last Name: " + this.lastName);
      this.$store.dispatch(
        "helloworld/actSetFullName",
        this.firstName.concat(" ").concat(this.lastName)
      );
    },
  },
};
</script>

<style scoped>
.input-container {
  padding: 6px;
}
</style>
