<template>
	<div class="step-navigation">
		<button v-if="step > 1" @click.prevent="() => prevStep()">Back</button>
		<button v-if="step < 2" @click.prevent="() => nextStep()">Next</button>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
	name: "AppStepNavigation",
	computed: {
		...mapGetters({
			step: 'getStep'
		})
	},
	methods: {
		...mapMutations({
			increaseStep: "INCREASE_STEP",
			decreaseStep: "DECREASE_STEP"
		}),
		nextStep() {
			this.increaseStep();
		},
		prevStep() {
			this.decreaseStep();
		}
	}
};
</script>
