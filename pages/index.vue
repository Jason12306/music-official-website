<template>
  <div class="home px-8">
    <header class="h-20 flex justify-center sticky top-0 left-0 z-50">
      <nav
        class="flex items-center h-[100%] w-[100%] xl:w-[1200px] justify-center lg:justify-start"
      >
        <div
          class="w-[50px] h-[50px] bg-white rounded-xl flex justify-center items-center"
        >
          <img src="/logo.svg" width="80" alt="律动音乐" />
        </div>
        <span class="ml-2 text-2xl">律动音乐</span>
        <a
          href="https://github.com/Vanyi0924/music-official-website"
          class="ml-2"
        >
          <GithubIcon width="20" />
        </a>
      </nav>
    </header>
    <section
      class="w-[100%] xl:w-[1200px] mx-auto flex justify-center lg:justify-between pt-8"
    >
      <div class="w-96 flex-shrink-0 text-center lg:text-left">
        <h1 class="text-4xl mt-12">律动音乐 · 免费听歌</h1>
        <h3 class="text-xl text-black/60 mt-2 mb-12">海量资源 支持AI搜索</h3>
        <div class="flex justify-center flex-wrap lg:justify-start px-4">
          <a class="download-btn" :href="AppInfo.download.android" download>
            <AndroidFilledIcon class="h-8" />
            <span class="leading-8 ml-2">安卓下载</span>
          </a>
          <a
            class="cursor-not-allowed download-btn"
            :href:javascript:void(0)="AppInfo.download.ios"
          >
            <AppleIcon class="h-8" />
            <span class="leading-8 ml-2">Ios(开发中)</span>
          </a>
          <a class="download-btn" :href="AppInfo.download.macos" download>
            <DesktopMac20FilledIcon class="h-8" />
            <span class="leading-8 ml-2">Mac下载</span>
          </a>
          <a class="download-btn" :href="AppInfo.download.windows" download>
            <LogoWindowsIcon class="h-8" />
            <span class="leading-8 ml-2">Window下载</span>
          </a>
        </div>
      </div>
      <div class="lg:block flex-auto relative h-[650px]">
        <img class="absolute" src="/screenshots/client1.png" alt="" />
        <img
          class="absolute w-[300px] -right-24 top-14 rounded-lg"
          src="/screenshots/app1.png"
          alt=""
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import AndroidFilledIcon from "@/assets/icons/vue/AndroidFilled.vue";
import AppleIcon from "@/assets/icons/vue/Apple.vue";
import DesktopMac20FilledIcon from "@/assets/icons/vue/DesktopMac20Filled.vue";
import LogoWindowsIcon from "@/assets/icons/vue/LogoWindows.vue";
import GithubIcon from "@/assets/icons/vue/Github.vue";
import AppInfo from "~/public/app-info.json";
</script>

<style lang="postcss" scoped>
.download-btn {
  @apply bg-black text-white rounded-2xl py-1.5 px-4 flex text-sm cursor-pointer transition-all hover:opacity-60 mb-4 w-[100%] justify-center lg:w-40 mx-4;
}
</style>
