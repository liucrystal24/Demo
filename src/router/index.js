import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HourCalculator from "@/components/HourCalculator";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "HelloWorld",
			component: HelloWorld,
		},
		{
			path: "/HourCalculator",
			name: "HourCalculator",
			component: HourCalculator,
		},
	],
});
