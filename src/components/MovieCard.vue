<template>
  <div class="movie-card" v-if="movie">
    <router-link :to="{ name: 'movieDetails', params: { id: movie.id } }">{{
      movie.title
    }}</router-link>
    <img :src="movie.poster" />
    {{ movie.year  }} | {{ movie.runtime }}
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    default: null
  }
})
</script>

<style>
.movie-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
