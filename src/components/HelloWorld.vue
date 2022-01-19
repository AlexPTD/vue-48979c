<template>
  <div class="hello">
    <!-- Calls keyPressed method when key has gone up -->
    <input type="text" :name="name" :value="value" @keyup="keyPressed" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String,
    value: String,
  },

  methods: {
    // Emits a "typing" event with the value of the target (<input>)
    keyPressed(e) {
      this.$emit('typing', e.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
