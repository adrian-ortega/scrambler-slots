<template>
  <div class="app-header">
    <div class="container">
      <h1>Scrambler</h1>
      <AppStepNavigation />
    </div>
  </div>
</template>

<script>
import AppStepNavigation from "@/components/AppStepNavigation";

export default {
  name: "AppHeader",
  components: {
    AppStepNavigation
  }
};
</script>
