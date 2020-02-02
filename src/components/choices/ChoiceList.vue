<template>
	<div class="choices">
		<div class="choice" v-for="choice in choices" :key="choice.id">
			<div>{{ choice.value }}</div>
			<div>
				<button @click.prevent="() => removeChoice(choice)">
					<TrashIcon />
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
