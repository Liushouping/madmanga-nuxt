<template>
	<div>
		<section 
	:class="isOpen ? 'fixed top-0 z-50' : 'hidden'" 
	class="w-screen h-screen bg-deeporange">
		<div 
		class="flex justify-center items-center h-screen">
			<ul 
			class="space-y-6">
				<li 
				class="text-white text-center text-[14px] hover:text-yellow-300">
					<a href="index.html" class="appearance-none">
						HOME
					</a>
				</li>
				<li 
				class="text-white text-center text-[14px] hover:text-yellow-300">
					<a href="story.html" class="appearance-none">
						STORY
					</a>
				<li 
				class="text-white text-center text-[14px] hover:text-yellow-300">
					<a href="fomo stone.html" class="appearance-none">
						FOMO STONE
					</a>
				</li>
				<li 
				class="text-white text-center text-[14px] hover:text-yellow-300">
					<a href="team.html" class="appearance-none">
						TEAM
					</a>
				</li>
				<li>
					<ul class="flex flex-row space-x-4 w-40 justify-center items-center">
						<li>
							<a href="https://discord.gg/madmanga" class="appearance-none">
								<img src="@/assets/image/discord.svg" class="w-4 h-4 hover:opacity-70">
							</a>
						</li>
						<li>
							<a href="https://twitter.com/madmanga2022" class="appearance-none">
								<img src="@/assets/image/twitter.svg" class="w-4 h-4 hover:opacity-70">
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/madmanga2022" class="appearance-none">
								<img src="@/assets/image/instagram.svg" class="w-4 h-4 hover:opacity-70">
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		
		<div 
		class="absolute right-5 top-5 z-30">
				<button 
				type="button" 
				@click="isOpen = false">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
		</div>
		
	</section>
	
	<section 
	class="relative w-screen h-screen bg-black bg-cover bg-center overflow-hidden" style="background-image:url(@/assets/image/banner-02.png);">
		<header>
			<nav 
			class="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center py-3 md:py-6 px-4">
				<ul 
				class="hidden lg:flex flex-row space-x-6 md:space-x-16 ml-[30px]">
					<li class="text-white hover:text-deeporange text-[14px]">
						<a href="index.html" class="appearance-none">HOME</a>
					</li>
					<li class="text-white hover:text-deeporange text-[14px]">
						<a href="story.html" class="appearance-none">STORY</a>
					</li>
					<li class="text-deeporange hover:text-deeporange text-[14px]">
						<a href="fomo stone.html" class="appearance-none">FOMO STONE</a>
					</li>
					<li class="text-white hover:text-deeporange text-[14px]">
						<a href="team.html" class="appearance-none">TEAM</a>
					</li>
				</ul>

				<button 
				@click="isOpen = true" 
				type="button" 
				class="lg:hidden flex absolute right-5 top-5">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>

				<ul 
				class="hidden lg:flex flex-row space-x-4 text-white py-3 md:py-4 md:py-0">
					<li>
						<a href="https://discord.gg/madmanga" class="appearance-none">
							<img src="@/assets/image/discord.svg" class="w-4 h-4 hover:opacity-70">
						</a>
					</li>
					<li>
						<a href="https://twitter.com/madmanga2022" class="appearance-none">
							<img src="@/assets/image/twitter.svg" class="w-4 h-4 hover:opacity-70">
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/madmanga2022" class="appearance-none">
							<img src="@/assets/image/instagram.svg" class="w-4 h-4 hover:opacity-70">
						</a>
					</li>
				</ul>
			</nav>
		</header>

		<div 
		class="absolute inset-x-0 bottom-80 md:bottom-[36rem] lg:bottom-80 z-30 mx-auto w-[20rem] h-[22rem] lg:w-[16rem] lg:h-[16rem] flex items-end">
			<img src="@/assets/image/1228-egg.gif" 
			class="mx-auto w-[15rem] lg:w-[17rem] scale-125 lg:scale-50 z-40" 
			style="animation: switch 1463ms linear 238ms infinite alternate;">
		</div>

		<div class="absolute inset-x-0 bottom-40 md:bottom-96 lg:bottom-28 z-40">
			<p class="text-white text-center font-XtreemFatDemo text-[32px] lg:text-[36px] py-4">About to be born...</p>
			<ul 
			class="flex flex-row space-x-4 lg:space-x-12 justify-center items-center">
				<li 
				class="flex flex-col justify-center items-center">
					<span class="text-deeporange text-[36px] font-XtreemFatDemo">???</span>
					<span class="text-white text-[14px] lg:text-[16px] font-bold italic">DAYS</span>
				</li>
				<li 
				class="flex flex-col justify-center items-center">
					<span class="text-deeporange text-[36px] font-XtreemFatDemo">??</span>
					<span class="text-white text-[14px] lg:text-[16px] font-bold italic">HOURS</span>
				</li>
				<li 
				class="flex flex-col justify-center items-center">
					<span class="text-deeporange text-[36px] font-XtreemFatDemo">??</span>
					<span class="text-white text-[14px] lg:text-[16px] font-bold italic">MINUTES</span>
				</li>
				<li 
				class="flex flex-col justify-center items-center">
					<span class="text-deeporange text-[36px] font-XtreemFatDemo">??</span>
					<span class="text-white text-[14px] lg:text-[16px] font-bold italic">SECONDS</span>
				</li>
			</ul>
		</div>

		<div 
		class="flex lg:hidden absolute inset-x-1/3 lg:inset-x-1/2 bottom-24 lg:bottom-20 ml-12 lg:ml-6 z-20 flex flex-col items-center justify-center">
			<a href="team.html" class="intro-banner-vdo-play-btn pinkBg appearance-none w-[30px] h-[30px] appearance-none flex justify-center items-center flex-col">
				<i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
				<span class="ripple pinkBg"></span>
				<span class="ripple pinkBg"></span>
				<span class="ripple pinkBg"></span>
				<p 
				class="text-white pt-20 lg:pt-20 flex flex-row w-40 justify-center items-center text-center text-[14px] lg:text-[16px]">FOMO stones</p>
			</a>
		</div>
		<!--  -->
		<div
		class="absolute bottom-24 md:bottom-40 right-80">
			<img src="@/assets/image/t-01.png" style="animation: switch 1463ms linear 238ms infinite alternate">
		</div>
		<div
		class="absolute bottom-60 md:bottom-80 left-72">
			<img src="@/assets/image/t-02.png" style="animation: switch 1463ms linear 238ms infinite alternate">
		</div>
		<div
		class="absolute bottom-44 md:bottom-44 right-80">
			<img src="@/assets/image/t-03.png" style="animation: switch 1463ms linear 238ms infinite alternate">
		</div>
		<div
		class="absolute top-16 md:bottom-20 left-36">
			<img src="@/assets/image/t-01.png" style="animation: switch 1463ms linear 238ms infinite alternate">
		</div>
		
<!-- 		<div
		class="logo fixed top-[2rem] right-[15rem] se:right-[15rem] 12pro:right-[16rem] md:hidden flex">
			<img src="@/assets/image/orange-logo.png" style="max-width: 90%;margin: 0 auto;">
		</div> -->
		<div
		class="logo fixed left-5 top-5 md:hidden flex">
			<img src="@/assets/image/orange-logo.png" style="max-width: 90%;margin: 0 auto;">
		</div>

		<div
		class="logo fixed bottom-20 right-5 hidden md:flex">
			<img src="@/assets/image/orange-logo.png" style="max-width: 90%;margin: 0 auto;">
		</div>
		
		<div 
		class="fixed bottom-0 bg-deeporange py-8px w-full rounded-tl-full">
			<ul class="flex justify-between items-center flex-col md:flex-row px-10 text-white text-[12px] lg:text-[14px] tracking-onepx">
				<li><a href="mailto:Info@madmanga.io">Mail.&nbsp;Info@madmanga.io</a></li>
				<li>Copyright MadManga all rights reserved 2022</li>
			</ul>
		</div>

		<div class="absolute bottom-0 lg:-bottom-6 righ-5 lg:right-20">
				<img src="@/assets/image/ft-logo-02.png" class="w-full">
		</div>
	</section>
	</div>
</template>

<script>
export default {
  head() {
      // 針對這一頁設定 Meta 標籤
  },
  data() { 
    return {
      isOpen: false,
      copyright : 'Copyright MadManga all rights reserved 2022',
    } 
  },
  beforeCreate: function() {
    console.log("beforeCreate()")
  },
}
</script>