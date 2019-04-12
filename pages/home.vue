<template>
	<div class="home-page">
		<div class="card-container">
			<div
				username="justinwash"
				repos="Client-Side-Vue,Cmder-Runner,Fantasy-Console-Projects,JustinWash-Dev,Perpetual-Shred,TIC-80-Pro-VSCode"
				id="card"
			>
				<div class="github-card-container">
					<div class="github-card-header">
						<img
							class="github-card-logo"
							src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"
						/>
					</div>
					<div class="github-card-content">
						<table class="github-card-image-text-wrap">
							<tbody>
								<tr>
									<td>
										<img
											class="github-card-avatar"
											src="https://avatars3.githubusercontent.com/u/6236852?v=4"
											width="100"
										/>
									</td>
									<td class="github-card-name">
										Justin Wash<br />
										<span style="color:#222;font-size:9pt;"
											>Followers: 5 | Following: 6</span
										><br />
										<a
											target="_blank"
											class="github-card-button"
											href="https://github.com/justinwash"
											>View profile</a
										>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br /><br /><br /><br />
					<span
						id="github-card-repo-headline"
						style="font-size:9pt;color:#777font-weight:bold;margin:text-align:center"
						><center>Repositories</center></span
					>
					<div class="github-card-repos" id="github-card-repos">
						<div id="github-card-repo1" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/Client-Side-Vue"
								><b>Client-Side-Vue</b></a
							><br /><span class="github-card-repo-desc"
								>Vue.js client-side for tiny, quick-loading, node.js-less Single
								Page Apps.</span
							><br /><span class="gc-lang" style="font-size:8pt;">★Vue</span>
						</div>
						<div id="github-card-repo2" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/Cmder-Runner"
								><b>Cmder-Runner</b></a
							><br /><span class="github-card-repo-desc"
								>Run Cmder on the current file or workspace from VSCode's
								Command Palette</span
							><br /><span class="gc-lang" style="font-size:8pt;"
								>★TypeScript</span
							>
						</div>
						<div id="github-card-repo3" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/Fantasy-Console-Projects"
								><b>Fantasy-Console-Projects</b></a
							><br /><span class="github-card-repo-desc"
								>Games for fantasy consoles</span
							><br /><span class="gc-lang" style="font-size:8pt;">★Lua</span>
						</div>
						<div id="github-card-repo4" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/JustinWash-Dev"
								><b>JustinWash-Dev</b></a
							><br /><span class="github-card-repo-desc"
								>My portfolio site, made with Vue.js</span
							><br /><span class="gc-lang" style="font-size:8pt;">★Vue</span>
						</div>
						<div id="github-card-repo5" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/Perpetual-Shred"
								><b>Perpetual-Shred</b></a
							><br /><span class="github-card-repo-desc"
								>PerpetualShred, but MEANer</span
							><br /><span class="gc-lang" style="font-size:8pt;"
								>★JavaScript</span
							>
						</div>
						<div id="github-card-repo6" class="github-card-repo">
							<a
								class="github-card-repo-headline"
								href="https://github.com/justinwash/TIC-80-Pro-VSCode"
								><b>TIC-80-Pro-VSCode</b></a
							><br /><span class="github-card-repo-desc"
								>A VSCode extension for TIC-80 Pro users</span
							><br /><span class="gc-lang" style="font-size:8pt;"
								>★JavaScript</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
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

	.card-container {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	#card {
		height: 411px;
		width: 400px;
	}

	.github-card-container {
		color: black;
	}

	.github-card-header {
		background: rgb(24, 18, 30);
		color: white;
		height: 113px;
		width: 100%;
	}

	.github-card-avatar {
		border-radius: 200px;
		border: none;
		margin-left: 10px;
	}

	.github-card-name {
		/* height: 117px; */
		display: inline-grid;
		margin-left: 12px;
		top: 48px;
		/* display: inline; */
		transform: translateY(32px);
		/* margin-top: 44px; */
	}
</style>