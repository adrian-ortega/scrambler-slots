<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <div>
        <div v-if="step === 1" class="step step-1">
          <ChoiceList />
          <AddChoiceForm />
        </div>
        <div v-if="step === 2" class="step step-2">
          step 2
        </div>
        <AppStepNavigation />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddChoiceForm from "@/components/choices/AddChoiceForm";
import AppHeader from "@/components/AppHeader";
import AppStepNavigation from "@/components/AppStepNavigation";
import ChoiceList from "@/components/choices/ChoiceList";

export default {
  name: "app",
  components: {
    AddChoiceForm,
    AppHeader,
    AppStepNavigation,
    ChoiceList
  },
  computed: {
    ...mapGetters({
      step: "getStep"
    })
  }
};
</script>
