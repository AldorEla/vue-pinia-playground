<template>
  <div class="movies">
    <h1>Search movies</h1>
    <input type="search" placeholder="Enter movie title" v-model="moviesStore.query" />
    <h1>Movies({{ moviesStore.totalMovies }})</h1>
    <select v-model="moviesStore.year">
        <option :value="year.value" v-for="year in years">{{ year.label }}</option>
    </select>
    <div class="max-w-sm mx-auto" v-if="moviesStore.isLoading">
      <span class="text-2xl font-bold text-indigo-700">Movies Are Loading ...</span>
    </div>
    <div class="movies-list" v-else>
      <MovieCard v-for="movie in moviesStore.filterMovies" :key="`movie-${movie.id}`" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watchEffect } from 'vue'
import { useMoviesStore } from '../stores/movies'
import MovieCard from '../components/MovieCard.vue'

const years = [{value: 0, label: 'All'}, {value: 1990, label: '1990'}, {value: 2000, label: '2000'}, {value: 2010, label: '2010'}]

const moviesStore = useMoviesStore()

onMounted(() => {
  moviesStore.getMovies()
})
watchEffect(() => {
  moviesStore.getMovies(moviesStore.query)
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
  .movies-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}
</style>
