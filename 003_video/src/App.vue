<template>
  <div id="root" style="width: 500px;height: 500px;"></div>
</template>

<script>
import Player from 'xgplayer';
import FlvJsPlayer from 'xgplayer-flv.js';

export default {
  mounted() {
    setTimeout(() => {
      this.init()
    }, 1000);
  },
  methods: {
    init() {
    const url = `wss://cxvideo-ws.123cx.com/websocket/040092661024-2?deviceNo=6fd05230-a31c-11ef-b440-ef6b7d1e8a1d&dataType=0&streamType=1&token=b74b7188-b7e5-49b3-a017-7cf0c3142bc8&channel=2`
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