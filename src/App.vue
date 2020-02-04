<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <div>
        <div v-if="step === 1" class="step step-1">
          <Choices />
        </div>
        <div v-if="step === 2" class="step step-2">
          step 2
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppHeader from "@/components/AppHeader";
import Choices from "@/components/choices/Choices";

export default {
  name: "app",
  components: {
    AppHeader,
    Choices
  },
  computed: {
    ...mapGetters({
      step: "getStep"
    })
  }
};
</script>
