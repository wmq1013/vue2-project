import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // 懒加载
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/directive",
    name: "directive",
    component: function () {
      return import(/* webpackChunkName: "directive" */ "@/views/directive/index.vue");
    },
  },
  {
    path: "/form",
    name: "form",
    component: function () {
      return import(/* webpackChunkName: "form" */ "@/views/form/index.vue");
    },
  },
  {
    path: "/lifecycleHooks",
    name: "lifecycleHooks",
    component: function () {
      return import(/* webpackChunkName: "lifecycleHooks" */ "@/views/lifecycleHooks/index.vue");
    },
  },
  {
    path: "/templateSyntax",
    name: "templateSyntax",
    component: function () {
      return import(/* webpackChunkName: "templateSyntax" */ "@/views/templateSyntax/index.vue");
    },
  },
  {
    path: "/component",
    name: "component",
    component: function () {
      return import(/* webpackChunkName: "component" */ "@/views/component/index.vue");
    },
  },
  {
    path: "/router",
    name: "router",
    component: function () {
      return import(/* webpackChunkName: "router" */ "@/views/router/index.vue");
    },
    // 子路由
    children: [
      {
        path: "children",
        component: function () {
          return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
        },
      },
    ],
  },
  {
    path: "/transition",
    name: "transition",
    component: function () {
      return import(/* webpackChunkName: "transition" */ "@/views/transition/index.vue");
    },
  },
  {
    path: "/vuex",
    name: "vuex",
    component: function () {
      return import(/* webpackChunkName: "vuex" */ "@/views/vuex/index.vue");
    },
  },
];
const router = new VueRouter({
  mode: "history", // 可选，启用HTML5 History模式（默认为hash模式）
  base: process.env.BASE_URL, // 可选，设置基路径
  routes, // 导入路由数组
});
// 全局前置守卫：打印即将进入的路由
router.beforeEach((to, from, next) => {
  // console.log("打印即将进入的路由", to.fullPath);
  next();
});

// 全局解析守卫：在解析过程中显示加载提示
let isLoading = false;
router.beforeResolve((to, from, next) => {
  isLoading = true;
  // console.log("解析路由", to.fullPath);
  next(() => {
    isLoading = false;
    // console.log("已解析的路由", to.fullPath);
  });
});

// 全局后置守卫：打印已完成的路由变更
router.afterEach((to, from) => {
  // console.log("已完成的路由变更", from.fullPath, "to:", to.fullPath);
});
export default router;
