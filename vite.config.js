import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PratoHub/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
        market: resolve(__dirname, 'market.html'),
        discussions: resolve(__dirname, 'discussions.html'),
        questions: resolve(__dirname, 'questions.html'),
        events: resolve(__dirname, 'events.html'),
        community: resolve(__dirname, 'community.html'),
        article: resolve(__dirname, 'article.html'),
        thread: resolve(__dirname, 'thread.html'),
        question: resolve(__dirname, 'question.html'),
        login: resolve(__dirname, 'login.html'),
        register: resolve(__dirname, 'register.html'),
        profile: resolve(__dirname, 'profile.html'),
        notifications: resolve(__dirname, 'notifications.html'),
      },
    },
  },
});
