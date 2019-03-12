<template>
	<div v-scroll="handleScroll" v-bind:class="'navigation-bar ' + navToggle">
		<site-header></site-header>
		<div class="navigation-row">
			<router-link to="/" class="navigation-link">HOME</router-link>
			<router-link to="/work" class="navigation-link">WORK</router-link>
			<router-link to="/play" class="navigation-link">PLAY</router-link>
			<router-link to="/about" class="navigation-link">ABOUT</router-link>
			<router-link to="/contact" class="navigation-link">CONTACT</router-link>
		</div>
	</div>
</template>

<script>
	module.exports = {
		components: {
			"site-header": httpVueLoader("components/site-header.vue")
		},
		data: () => {
			return {				navToggle: 'scroll-show',
				oldScroll: 0			}
		},
		methods: {
			handleScroll: function (evt, el) {
				(window.scrollY < this.oldScroll) ? this.navToggle = 'scroll-show' : this.navToggle = 'scroll-hide';
				this.oldScroll = window.scrollY;
			}
		}
	}
</script>

<style scoped>
	.navigation-bar {
		background: #18121eee;
		color: white;
		border-radius: 2px;
		display: inline-block;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		z-index: 1;
		height: 4em;
		width: 100vw;
		margin-bottom: 20px;
	}

	.navigation-bar:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	.navigation-row {
		margin-right: 24px;
	}

	.scroll-show {
		position: sticky;
		top: 0em;
		transition-duration: 0.5s;
	}

	.scroll-hide {
		position: sticky;
		top: -6em;
		transition-duration: 0.5s;
	}

	.navigation-link {
		margin: 10px;
		font-size: 1em;
		text-decoration: none;
		color: white;
		transition: 0.25s;
	}

	.navigation-link:hover {
		color: #d9b310;
		transition: 0.25s;
	}
</style>
