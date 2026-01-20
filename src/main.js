import { createApp } from "vue";
import { createPinia } from "pinia";
// bootstrap
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

//
import "@fortawesome/fontawesome-free/css/all.min.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// CKEditor
import CKEditor from "@ckeditor/ckeditor5-vue";

// loading
import Loading from "@/components/widgets/LoadingComponent.vue";

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// sweetaleret2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// moment
import moment from "moment";

// google-maps
import VueGoogleMaps from "vue-google-maps-community-fork";

// user
import {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	publicDateFormat,
} from "@/methods/format";

import $httpMessageState from "@/methods/updateMessageState";
import App from "./App.vue";
import router from "./router";

Object.keys(AllRules).forEach((rule) => {
	defineRule(rule, AllRules[rule]);
});

configure({
	generateMessage: localize({ zh_TW: zhTW }),
	validateOnInput: true,
});

setLocale("zh_TW");

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$moment = {
	moment,
};

app.config.globalProperties.$format = {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	publicDateFormat,
};

// 將 $httpMessageState 加入全域下
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(VueSweetalert2);
app.use(VueGoogleMaps, {
	load: {
		key: `${import.meta.env.VITE_GOOGLE_MAPS_TOKEN}`,
		libraries: "places",
	},
	installComponents: true,
});

app.component("LoadingComponent", Loading);
app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
