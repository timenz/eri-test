<template>
  <div class="input-container">
    <input
      type="text"
      placeholder="Last Name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["value"],
  computed: {},
  created() {
    console.log("CustomInput component created!");
  },
  methods: {},
};
</script>

<style scoped>
.input-container {
  padding: 6px;
}
</style>

