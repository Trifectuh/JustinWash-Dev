<template>
	<div class="work-page">
		<div class="work-section">
			<section-header
				title="Perpetual Shred: Never-ending Gnar"
				code-url="https://github.com/Trifectuh/Perpetual-Shred"
				web-url="https://www.perpetualshred.com"
			></section-header>
			<div class="section-inner">
				<div
					class="section-banner"
					style="background-image: url('/assets/images/perpetual-shred-banner.png');"
				></div>
				<section-detail technologies="mongodb express angular node javascript typescript"></section-detail>
			</div>
		</div>
		<div class="work-section">
			<section-header
				title="The Elite: GoldenEye 64 Speedrun Companion"
				code-url="https://github.com/afterparty/the-elite"
			></section-header>
			<div
				class="section-banner"
				style="background-image: url('/assets/images/the-elite-banner.png');"
			></div>
			<section-detail technologies="ionic cordova angular node typescript"></section-detail>
		</div>
		<div class="work-section">
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
		</div>
		<div class="work-section">
			<section-header title="Stifel.com" web-url="https://www.stifel.com"></section-header>
			<div class="section-banner" style="background-image: url('/assets/images/stifel-banner.png');"></div>
			<section-detail technologies="dotnet sql csharp"></section-detail>
		</div>
		<div class="work-section">
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
	.work-page {
		width: calc(100vw - (100vw - 100%));
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

	.work-section {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-bottom: 20px;
		background: #18121e;
	}
</style>
