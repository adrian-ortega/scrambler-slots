<template>
	<form class="add-choice" @submit.prevent="() => append()">
		<input
			ref="input"
			type="text"
			v-model="choice"
			placeholder="Add a choice"
		/>
		<button type="submit" class="button">Add</button>
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
