import { createApp, ref } from "./vue";

createApp("#app", {
  refs: {
    title: ref("This is TITLE"),
    content: ref("This is CONTENT"),
  },
  methods: {
    setTitle() {
      this.title.value = "这是标题";
    },
    setContent() {
      this.content.value = "这是内容";
    },
    reset() {
      this.title.$reset();
      this.content.$reset();
    },
  },
});
