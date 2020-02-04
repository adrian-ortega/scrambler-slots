<template>
  <div class="choices">
    <ChoiceList />
    <AddChoiceForm />
  </div>
</template>

<script>
import AddChoiceForm from "@/components/choices/AddChoiceForm";
import ChoiceList from "@/components/choices/ChoiceList";
export default {
  name: "Choices",
  components: {
    AddChoiceForm,
    ChoiceList
  }
};
</script>
