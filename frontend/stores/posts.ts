import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      const { $axios } = useNuxtApp();
      const { data } = await $axios.get("/posts");
      this.posts = data;
    },
  },
});
