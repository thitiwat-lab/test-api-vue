import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "@/router/index";
import "ant-design-vue/dist/antd.css";
import "ant-design-vue/lib/date-picker/style/css";
import "@/assets/css/style.css";

const app = createApp(App);
app.use(router);
app.use(Antd).mount("#app");
