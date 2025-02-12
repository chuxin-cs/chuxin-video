<template>
  <div>
    <div id="root" style="width: 500px;height: 500px;"></div>

    <Video width="300px" heigh="300px" :controls="false" :src="flvSrc" />

    <Video connetMethod="websocket" width="300px" heigh="300px" :controls="false" :src="wsFlvSrc" />

  </div>
</template>

<script>
import Player from 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';
import { Video } from "@chu-xin/components"

export default {
  components: { Video },
  mounted() {
    setTimeout(() => {
      this.init()
    }, 1000);
  },
  data() {
    return {
      flvSrc: '',
      wsFlvSrc: "",
    }
  },
  methods: {
    init() {
      const player = new FlvJsPlayer({
        id: "root",
        url,
        fluid: true,
        autoplay: true,
        isLive: true,
        playsinline: false,
        screenShot: true,
        whitelist: [''],
        ignores: ['time'],
        closeVideoClick: true,
        customConfig: {
          isClickPlayBack: false
        },
        flvOptionalConfig: {
          enableWorker: true,
          enableStashBuffer: true, //启用缓存
          stashInitialSize: 4096, //缓存大小4m
          lazyLoad: false,
          lazyLoadMaxDuration: 40 * 60,
          autoCleanupSourceBuffer: true,
          autoCleanupMaxBackwardDuration: 35 * 60,
          autoCleanupMinBackwardDuration: 30 * 60
        }
      });
    }
  }
}
</script>