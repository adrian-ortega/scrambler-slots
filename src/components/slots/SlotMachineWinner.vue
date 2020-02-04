<template>
  <div class="slot-winner">
    <div>
      <span class="icon is-xlarge">{{ winner.icon }}</span>
    </div>
    <div>
      <span class="icon">🎉</span>
      {{ winner.value }}
      <span class="icon">🎉</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotMachineWinner",
  props: {
    winner: {
      type: Object
    }
  }
};
</script>
