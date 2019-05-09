<template>
	<div class="play-page">
		<iframe
			frameborder="0"
			src="https://itch.io/embed/332362?bg_color=1D2B53&amp;fg_color=C2C3C7&amp;link_color=FF77A8&amp;border_color=ff226e"
			width="552"
			height="167"
		></iframe>
		<iframe
			frameborder="0"
			src="https://itch.io/embed/340405?bg_color=000000&amp;fg_color=d12020&amp;link_color=ed7474&amp;border_color=333333"
			width="552"
			height="167"
		></iframe>
		<iframe
			frameborder="0"
			src="https://itch.io/embed/414663?bg_color=2aacfa&amp;fg_color=ffffff&amp;link_color=e53b44&amp;border_color=ff5760"
			width="552"
			height="167"
		></iframe>
	</div>
</template>

<script>
	module.exports = {
		data: function() {
			return {
				greeting: "This is the personal projects page"
			};
		}
	};
</script>

<style scoped>
	p {
		font-size: 2em;
		text-align: center;
	}

	.play-page {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: calc(100% - 128px);
	}
</style>