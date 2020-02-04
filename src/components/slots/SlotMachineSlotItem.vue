<template>
  <div class="slot-item" :class="`slot-item-${item.id}`">
    <span>
      <span class="icon is-large">{{ item.icon }}</span>
      <span class="text">{{ item.value }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "SlotMachineSlotItem",
  props: {
    item: {
      required: true
    }
  }
};
</script>
