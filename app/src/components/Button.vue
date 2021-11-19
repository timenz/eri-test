<template>
  <div>
    <input
      type="button"
      class="btn-styles"
      :style="btnStyle"
      :value="btnText"
      @click="btnClick"
    />
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "BLUE",
    },
    btnText: {
      type: String,
      default: "Button",
    },
  },
  computed: {
    btnStyle() {
      let btnStyle = "";
      btnStyle += "background-color: " + this.getBtnColor();

      return btnStyle;
    },
  },
  created() {
    console.log("Component created!");
  },
  methods: {
    btnClick() {
      this.$emit("submit");
    },
    getBtnColor() {
      let color = "";

      switch (this.color.toUpperCase()) {
        case "BLUE":
          color = "#008CBA;";
          break;

        case "GREEN":
          color = "#4CAF50;";
          break;

        case "RED":
          color = "#f44336;";
          break;

        default:
          break;
      }

      return color;
    },
  },
};
</script>

<style scoped>
.btn-styles {
  color: #ffffff;
  margin: 10px;
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
