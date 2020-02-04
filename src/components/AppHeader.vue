<template>
  <div class="app-header">
    <div class="container">
      <h1>
        <template v-for="(letter, i) in name.split('')">
          <span :key="i">{{letter}}</span>
        </template>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      name: "Scrambler"
    }
  }
};
</script>
