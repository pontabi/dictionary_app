import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Search from "./components/Search.vue";
import Result from "./components/Result.vue";

const app = createApp(App);
app.component("Search", Search);
app.component("Result", Result);

app.mount("#app");
