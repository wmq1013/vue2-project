import Vue from "vue";
import Vuex from "vuex";
import persistedState from 'vuex-persistedstate';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    formattedCount: (state) => state.count.toLocaleString(),
  },
  mutations: {
    incrementCount (state) {
      state.count++;
    },
  },
  actions: {
    async incrementCountAsync ({ commit }) {
      // 模拟异步操作（如 API 调用）
      setTimeout(() => {
        commit("incrementCount");
      }, 1000);
    },
  },
  // 用户模块
  modules: {
    user: {
      namespaced: true, // 使用命名空间隔离模块内部状态和方法
      state: {
        isLoggedIn: false,
        userInfo: null,
      },
      getters: {
        isLoggedIn: (state) => state.isLoggedIn,
        userName: (state) => (state.userInfo ? state.userInfo.name : ""),
      },
      mutations: {
        setLoggedIn (state, status) {
          state.isLoggedIn = status;
        },
        setUserInfo (state, userInfo) {
          state.userInfo = userInfo;
        },
      },
      actions: {
        async login ({ commit }, credentials) {
          try {
            // const response = await axios.post("/api/login", credentials);
            setTimeout(() => {
              commit("setLoggedIn", true);
              commit("setUserInfo", { name: "admin" });
            }, 1000);
          } catch (error) {
            commit("setLoggedIn", false);
            commit("setUserInfo", null);
            // 处理错误...
          }
        },
        logout ({ commit }) {
          commit("setLoggedIn", false);
          commit("setUserInfo", null);
        },
      },
    },
  },
  plugins: [persistedState(
    {
      paths: ['count', 'user.userInfo'],
    },
    {
      storage: window.localStorage
    },
  )],
});
export default store; 