import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
    lastChoiceIndex: 2,
    choices: []
  },
  getters: {
    getChoices (state) {
      return state.choices;
    },
    getStep (state) {
      return state.step;
    }
  },
  mutations: {
    INCREASE_STEP (state) {
      state.step = state.step + 1;
    },
    DECREASE_STEP (state) {
      state.step = state.step - 1;
    },
    APPEND_CHOICE (state, value) {
      const choice = {
        id: ++this.state.lastChoiceIndex,
        value
      };
      state.choices.push(choice);
    },
    UPDATE_CHOICES (state, choices) {
      state.choices = choices;
    }
  },
  actions: {
    appendChoice ({commit}, choice) {
      commit("APPEND_CHOICE", choice);
    },
    removeChoice ({commit, getters}, choice) {
      const _choices = getters.getChoices.filter(c => c.id !== choice.id);
      console.log(choice);
      commit("UPDATE_CHOICES", _choices)
    }
  }
});
