import Vue from "vue";
import Vuex from "vuex";
import { getRandomEmoticon } from "@/utilities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
    lastChoiceIndex: 0,
    choices: []
  },
  getters: {
    getChoices(state) {
      return state.choices;
    },
    getStep(state) {
      return state.step;
    },
    getUniqueIcon(state) {
      let icon = getRandomEmoticon();
      const usedIcons = state.choices.map(c => c.icon);

      while (usedIcons.includes(icon)) {
        icon = getRandomEmoticon();
      }
      return icon;
    }
  },
  mutations: {
    INCREASE_STEP(state) {
      state.step++;
    },
    DECREASE_STEP(state) {
      state.step--;
    },
    APPEND_CHOICE(state, value) {
      const choice = {
        id: ++this.state.lastChoiceIndex,
        icon: this.getters.getUniqueIcon,
        value
      };
      state.choices.push(choice);
    },
    UPDATE_CHOICES(state, choices) {
      state.choices = choices;
    }
  },
  actions: {
    appendChoice({ commit }, choice) {
      commit("APPEND_CHOICE", choice);
    },
    removeChoice({ commit, getters }, choice) {
      const _choices = getters.getChoices.filter(c => c.id !== choice.id);
      commit("UPDATE_CHOICES", _choices);
    }
  }
});
