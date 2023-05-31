// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true,
  },
  app: {
    head: {
      title: "律动音乐",
      meta: [
        {
          name: "keywords",
          content: "律动音乐,免费,AI检索,免费听歌,律动音乐app",
        },
        {
          name: "description",
          content:
            "律动音乐-免费音乐，AI检索歌曲，支持各平台客户端，Android安卓、macos、ios、windows客户端",
        },
      ],
    },
  },
});
