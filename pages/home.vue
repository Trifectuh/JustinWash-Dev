<template>
	<div class="home-page">
		<section-header
			title="Perpetual Shred: Never-ending Gnar"
			code-url="https://github.com/Trifectuh/Perpetual-Shred"
			web-url="https://www.perpetualshred.com"
		></section-header>
		<div
			class="section-banner"
			style="background-image: url('/assets/images/perpetual-shred-banner.png');"
		></div>
		<section-detail
			technologies="mongodb express angular node javascript typescript"
		></section-detail>

		<section-header
			title="The Elite: GoldenEye 64 Speedrun Companion"
			code-url="https://github.com/afterparty/the-elite"
		></section-header>
		<div
			class="section-banner"
			style="background-image: url('/assets/images/the-elite-banner.png');"
		></div>
		<section-detail
			technologies="ionic cordova angular node typescript"
		></section-detail>

		<section-header
			title="Cmder Runner: VSCode extension"
			code-url="https://github.com/Trifectuh/Cmder-Runner"
			web-url="https://marketplace.visualstudio.com/items?itemName=justinwash.cmderrunner"
		></section-header>
		<div
			class="section-banner"
			style="background-image: url('/assets/images/cmderrunner-banner.png');"
		></div>
		<section-detail technologies="vscode cmder typescript"></section-detail>

		<section-header
			title="Stifel.com"
			web-url="https://www.stifel.com"
		></section-header>
		<div
			class="section-banner"
			style="background-image: url('/assets/images/stifel-banner.png');"
		></div>
		<section-detail technologies="dotnet sql csharp"></section-detail>

		<section-header
			title="TIC-80 Pro: VSCode extension"
			code-url="https://github.com/Trifectuh/Cmder-Runner"
			web-url="https://marketplace.visualstudio.com/items?itemName=justinwash.tic80-pro-vscode"
		></section-header>
		<div
			class="section-banner"
			style="background-image: url('/assets/images/tic80pro-vscode-banner.png');"
		></div>
		<section-detail technologies="vscode tic80 typescript"></section-detail>
	</div>
</template>

<script>
	module.exports = {
		components: {
			"section-header": httpVueLoader("components/section-header.vue"),
			"section-detail": httpVueLoader("components/section-detail.vue")
		}
	};
</script>

<style scoped>
	.home-page {
		width: 100vw;
	}

	p {
		font-size: 2em;
		text-align: center;
	}

	.section-banner {
		height: 340px;
		background-position: top;
		background-size: cover;
	}
</style>
