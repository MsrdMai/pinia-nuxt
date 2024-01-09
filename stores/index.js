// import axios from 'axios';

// export const state = () => ({
//   news: [],
// });

// export const mutations = {
//   SET_NEWS(state, posts) {
//     state.news = posts;
//   },
// };

// export const actions = {
//   async nuxtServerInit({ commit }, { req }) {
//     const res = (await this.$axios.$get('https://api/news.json')).data;
//     if (res) {
//       commit('SET_NEWS', res);
//     }
//   },
// };

// export const getters = {
//   getNews(state) {
//     return state.news;
//   },
// };

// store/index.js
import { useSessionStore } from '~/stores/session';

export const actions = {
  async nuxtServerInit({ dispatch }, { req, redirect, $pinia }) {
    if (!req.url.includes('/profile/')) {
      const store = useSessionStore($pinia);

      try {
        await store.me(); // load user information from the server-side before rendering on client-side
      } catch (e) {
        redirect('/'); // redirects to login if user is not logged in
      }
    }
  },
};
