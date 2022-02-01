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
        @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    </div>
    
  </section>
  
<!--   <div 
  class="loader-home absolute inset-0 w-screen h-screen fixed bg-black flex justify-center items-center z-50">
     <video class="hidden lg:block" src="@/assets/video/1.mp4" type="video/mp4" autoplay muted loop="" playsinline="" webkit-playsinline="" x5-playsinline=""></video>
     <video class="lg:hidden block" src="@/assets/video/m-01.mp4" type="video/mp4" autoplay muted loop="" playsinline="" webkit-playsinline="" x5-playsinline=""></video>
  </div> -->

  <section 
  class="relative w-screen h-screen bg-black overflow-hidden">
    <header 
    class="absolute top-0 w-full z-20">
      <nav 
      class="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center py-3 md:py-6 px-4">
        <ul 
        class="hidden lg:flex flex-row space-x-6 md:space-x-16 ml-[30px]">
          <li class="text-deeporange hover:text-deeporange text-[14px]">
            <a href="index.html" class="appearance-none">HOME</a>
          </li>
          <li class="text-white hover:text-deeporange text-[14px]">
            <a href="story.html" class="appearance-none">STORY</a>
          </li>
          <li class="text-white hover:text-deeporange text-[14px]">
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

    <section 
    class="absolute inset-0 flex justify-center items-center">
      <video 
      class="hidden lg:block scale-150 px-2" 
      src="@/assets/video/2.mp4" type="video/mp4" autoplay muted loop="" playsinline="" webkit-playsinline="" x5-playsinline=""></video>
      <video 
      class="lg:hidden block scale-150 px-2"  
      src="@/assets/video/m-02.mp4" type="video/mp4" autoplay muted loop="" playsinline="" webkit-playsinline="" x5-playsinline=""></video>
    </section>

    <div 
    class="absolute inset-x-3/4 lg:inset-x-2/3 bottom-40 md:bottom-80 lg:bottom-44">
      <a href="story.html" class="appearance-none intro-banner-vdo-play-btn pinkBg w-[15px] h-[15px]">
        <i class="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
        <span class="ripple-index pinkBg"></span>
        <span class="ripple-index pinkBg"></span>
        <span class="ripple-index pinkBg"></span>
      </a>
    </div>

    <div
    class="absolute bottom-16 md:bottom-20 right-0 md:right-5 hidden lg:flex">
      <img src="@/assets/image/orange-logo.png" class="scale-50 lg:scale-100">
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
