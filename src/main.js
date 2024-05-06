import { createApp } from "vue";
import { Swipe, SwipeItem, Image, Search } from "vant";
import "./style.css";
import { Icon } from "@iconify/vue";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";

const app = createApp(App);
app.component("Icon", Icon);

createApp(App)
  .use(router)
  .use(Swipe)
  .use(Search)
  .use(SwipeItem)
  .use(Image)
  .mount("#app");
