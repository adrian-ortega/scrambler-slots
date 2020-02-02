<template>
	<form class="add-choice" @submit.prevent="() => append()">
		<label>Add a choice</label>
		<input ref="input" type="text" v-model="choice" />
		<button type="submit">Add</button>
	</form>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "AddChoiceForm",
	data() {
		return {
			choice: null
		};
	},
	methods: {
		...mapActions({
			appendChoice: "appendChoice"
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
