import { Component, createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import components from "@/components/ui/index";

const app = createApp(App);

components.forEach((c: Component & { name: string }) =>
    app.component(c.name, c)
);

app.use(router).mount("#app");
