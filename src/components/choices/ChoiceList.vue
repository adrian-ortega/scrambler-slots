<template>
  <div class="choice-list">
    <template v-if="choices.length === 0">
      <p><span class="icon">🙃</span> Add a thing to scramble</p>
    </template>
    <div v-else class="choice" v-for="choice in choices" :key="choice.id">
      <div>{{ choice.value }}</div>
      <div>
        <button
          class="button is-transparent is-danger"
          @click.prevent="() => removeChoice(choice)"
        >
          <span class="icon"><TrashIcon /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TrashIcon from "@/components/icons/TrashIcon";

export default {
  name: "ChoiceList",
  components: {
    TrashIcon
  },
  computed: {
    ...mapGetters({
      choices: "getChoices"
    })
  },
  methods: {
    ...mapActions({
      removeChoice: "removeChoice"
    })
  }
};
</script>
