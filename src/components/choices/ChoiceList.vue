<template>
  <div class="choice-list">
    <template v-if="choices.length === 0">
      <p><span class="icon">🙃</span> Add a thing to scramble</p>
    </template>
    <div v-else class="choice" v-for="(choice, i) in choices" :key="choice.id">
      <div>
        <button
          class="button is-transparent is-icon"
          @click.prevent="updateChoiceIcon(i)"
        >
          <span class="icon">{{ choice.icon }}</span>
        </button>
      </div>
      <div
        contenteditable="true"
        v-html="choice.value"
        class="choice-text"
        @blur="e => updateChoiceText(e, i)"
      />
      <div>
        <button
          class="button is-icon is-transparent is-danger"
          @click.prevent="() => removeChoice(choice)"
        >
          <span class="icon"><TrashIcon /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import TrashIcon from "@/components/icons/TrashIcon";

export default {
  name: "ChoiceList",
  components: {
    TrashIcon
  },
  computed: {
    ...mapGetters({
      choices: "getChoices",
      uniqueIcon: "getUniqueIcon"
    })
  },
  methods: {
    ...mapActions({
      removeChoice: "removeChoice"
    }),
    ...mapMutations({
      updateChoices: "UPDATE_CHOICES"
    }),
    updateChoiceText(e, i) {
      const copied = [...this.choices];
      copied[i].value = e.target.innerHTML;
      this.updateChoices(copied);
    },
    updateChoiceIcon(i) {
      const copied = [...this.choices];
      copied[i].icon = this.uniqueIcon;
      this.updateChoices(copied);
    }
  }
};
</script>
