import type { App } from "vue";

import UiButton from "./ui-button/index.vue";

export default {
  install(app: App) {
    app.component("UiButton", UiButton);
  },
};
export { UiButton };

