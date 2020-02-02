<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>Scrambler</h1>
        <pre>STEP: {{ step }}</pre>

        <div v-if="step===1" class="step step-1">
          <div class="choices">
            <div class="choice" v-for="(choice, cid) in choices" :key="cid">
              <div>{{ choice }}</div>
              <button @click.prevent="() => removeChoice(choice)">
                <TrashIcon/>
              </button>
            </div>
          </div>

          <form class="add-choice" @submit.prevent="() => append()">
            <label>Add a choice</label>
            <input ref="addChoiceInput" type="text" v-model="newChoice">
            <button type="submit">Add</button>
          </form>
        </div>

        <div class="step-pagination">
          <button v-if="step > 1" @click.prevent="() => prevStep()">Back</button>
          <button v-if="step < 3" @click.prevent="() => nextStep()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import TrashIcon from '@/components/icons/TrashIcon'

export default {
  name: "app",
  components: {
    TrashIcon
  },
  computed: {
    ...mapGetters({
      step: 'getStep',
      choices: 'getChoices'
    })
  },
  data() {
    return {
      newChoice: null
    };
  },
  methods: {
    ...mapActions({
      appendChoice: 'appendChoice',
      removeChoice: 'removeChoice',
    }),
    ...mapMutations({
      increaseStep: 'INCREASE_STEP',
      decreaseStep: 'DECREASE_STEP'
    }),
    append() {
      if(this.newChoice && this.newChoice.length > 0) {
        this.appendChoice(this.newChoice)
      }

      this.newChoice = null
      this.$refs.addChoiceInput.focus()
    },
    remove(choice) {
      this.removeChoice(choice)
    },
    nextStep() {
      this.increaseStep()
    },
    prevStep() {
      this.decreaseStep()
    }
  }
};
</script>
