<template>
	<div class="section-header">
		<div class="section-title">{{ title }}</div>
		<div class="section-button-block">
			<div v-if="webUrl" class="section-web-button">
				<web-button v-bind:url="webUrl"></web-button>
			</div>
			<div v-if="codeUrl" class="section-github-button">
				<github-button v-bind:url="codeUrl"></github-button>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: ["title", "webUrl", "codeUrl"],
		components: {
			"github-button": httpVueLoader("/components/github-button.vue"),
			"web-button": httpVueLoader("/components/web-button.vue")
		}
	};
</script>

<style scoped>
	.section-header {
		background: #18121e;
		color: white;
		font-size: 2em;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.section-title {
		margin: 16px;
	}

	.section-button-block {
		display: flex;
		flex-direction: row;
		margin-right: 10px;
	}
</style>
