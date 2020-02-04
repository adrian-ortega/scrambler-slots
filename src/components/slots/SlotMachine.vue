<template>
  <div class="slots">
    <div class="slots-wrapper">
      <SlotMachineSlot
        :spin="spin"
        :class="{ 'slot-done': results.length > 0 }"
        @result="result => results.push(result)"
      />
      <SlotMachineSlot
        :spin="spin"
        :delay="0.25"
        :class="{ 'slot-done': results.length > 1 }"
        @result="result => results.push(result)"
      />
      <SlotMachineSlot
        :spin="spin"
        :delay="0.5"
        :class="{ 'slot-done': results.length > 2 }"
        @result="
          result => {
            results.push(result);
            setWinner();
          }
        "
      />
      <SlotMachineWinner v-if="winner" :winner="winner" />
      <div class="background"><span></span><span></span><span></span></div>
    </div>
    <transition name="fade-in-bottom">
      <p v-if="tryAgain">
        <span class="icon">😣</span>
        No winners, try again
        <span class="icon">😖</span>
      </p>
    </transition>
    <p>
      <button class="button" @click.prevent="() => decreaseStep()">
        Back
      </button>
      <button
        class="button is-success"
        :disabled="spin ? 'disabled' : null"
        @click.prevent="
          () => {
            results = [];
            tryAgain = false;
            winner = null;
            spin = true;
          }
        "
      >
        Go baby go
      </button>
    </p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { getOccurrence } from "@/utilities";
import SlotMachineSlot from "@/components/slots/SlotMachineSlot";
import SlotMachineWinner from "@/components/slots/SlotMachineWinner";

export default {
  name: "SlotMachine",
  components: {
    SlotMachineWinner,
    SlotMachineSlot
  },
  data() {
    return {
      spin: false,
      results: [],
      winner: null,
      tryAgain: false
    };
  },
  methods: {
    ...mapMutations({
      decreaseStep: "DECREASE_STEP"
    }),
    setWinner() {
      setTimeout(() => {
        const resultIds = this.results.map(a => a.id);
        const result = this.results
          .map(a => {
            a.count = getOccurrence(resultIds, a.id);
            return a;
          })
          .filter(a => a.count >= 2)
          .shift();

        this.winner = result ? result : null;
        this.tryAgain = this.winner === null;
        this.spin = false;
      }, 800);
    }
  }
};
</script>
