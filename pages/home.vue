<template>
	<div class="home-page">
		<iframe src="http://www.perpetualshred.com"></iframe>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				greeting: "This is the home page"
			};
		},
		components: {
			"github-card": httpVueLoader("components/github-card.vue")
		}
	};
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}

	.home-page {
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		height: 90%;
	}

	iframe {
		height: 100%;
		width: 100%;
		border-width: 0px;
		margin-right: 1rem;
		margin-left: 1rem;
		margin-bottom: 0.5rem;
	}
</style>