<template>
	<a class="web-button" v-bind:href="url" target="_blank">
		<div class="web-button-text">View on the web</div>
		<img class="web-button-image" src="/assets/icons/web.svg">
	</a>
</template>

<script>
	module.exports = {
		props: ['url']
	}
</script>

<style scoped>
	.web-button {
		height: 36px;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-decoration: none;
		font-size: 16px;
		color: black;
		border-style: solid;
		border-width: 1px;
		border-radius: 6px;
		padding: 5px;
		padding-left: 12px;
		padding-right: 10px;
		color: white;
	}

	.web-button-text {
		transform: translateY(2px);
	}

	.web-button-image {
		height: 30px;
		margin-left: 6px;
	}
</style>