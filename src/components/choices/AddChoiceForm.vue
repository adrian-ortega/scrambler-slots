<template>
  <form class="add-choice" @submit.prevent="() => append()">
    <input
      ref="input"
      type="text"
      v-model="choice"
      placeholder="Add a thing"
    />
    <button type="submit" class="button is-transparent is-icon">
      <span class="icon">
        <PlusCircleOutlineIcon />
      </span>
    </button>
    <button class="button is-transparent is-icon" @click.prevent="() => increaseStep()">
      <span class="icon">
        <SlotMachineOutlineIcon />
      </span>
    </button>
  </form>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PlusCircleOutlineIcon from "@/components/icons/PlusCircleOutlineIcon";
import SlotMachineOutlineIcon from "@/components/icons/SlotMachineOutlineIcon";

export default {
  name: "AddChoiceForm",
  components: {
    SlotMachineOutlineIcon,
    PlusCircleOutlineIcon
  },
  data() {
    return {
      choice: null
    };
  },
  methods: {
    ...mapActions({
      appendChoice: "appendChoice"
    }),
    ...mapMutations({
      increaseStep: "INCREASE_STEP"
    }),
    append() {
      if (this.choice && this.choice.length > 0) {
        this.appendChoice(this.choice);
      }

      this.choice = null;
      this.$refs.input.focus();
    }
  }
};
</script>
