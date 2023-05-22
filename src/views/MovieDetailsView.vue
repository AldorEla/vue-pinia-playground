<template>
  <div class="movies">
    <h1>{{ moviesStore.singleMovie.title }}</h1>
    <div class="max-w-sm mx-auto" v-if="moviesStore.isLoading">
      <span class="text-2xl font-bold text-indigo-700">Movies Are Loading ...</span>
    </div>
    <img v-else :src="moviesStore.singleMovie.poster" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMoviesStore } from '../stores/movies'
import { useRoute } from 'vue-router'

const moviesStore = useMoviesStore()
const route = useRoute()

onMounted(() => {
  moviesStore.getSingleMovie(route.params.id)
})
</script>

<style>
@media (min-width: 1024px) {
  .movies {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .movies img {
    max-width: 100%;
  }
}
</style>
