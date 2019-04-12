<template>
	<div class="section-detail">
		<div class="section-detail-technologies">
			<div v-for="icon in icons" class="technology-icon-wrapper">
				<img
					class="technology-icon"
					v-bind:src="'/assets/icons/technologies/' + icon + '.png'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["platform", "technologies", "description"],
		data: function() {
			return {
				icons: this.technologies.split(" ")
			};
		}
	};
</script>

<style scoped>
	.section-detail {
		justify-content: center;
		align-items: center;
		display: flex;
		background: #18121e;
		color: white;
		font-family: sans-serif;
		height: 164px;
		margin-bottom: 20px;
	}

	.section-detail-technologies {
		height: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		width: 50%;
	}

	.technology-icon {
		width: 64px;
		height: 64px;
	}
</style>