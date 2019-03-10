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
		data: function () {
			return {
				icons: this.technologies.split(' ')
			}
		},
	};
</script>

<style scoped>
	.section-detail {
		background: #000000;
		color: white;
		font-family: sans-serif;
		height: 164px;
		box-shadow: rgb(0, 0, 0) 0px 8px 6px 6px;
	}

	.section-detail-technologies {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}

	.technology-icon {
		width: 100px;
		height: 100px;
	}
</style>