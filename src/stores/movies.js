import { defineStore } from 'pinia'
import { moviesList } from '../data/moviesList'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    isLoading: false,
    query: '',
    singleMovie: {},
    year: 2000
  }),
  getters: {
    totalMovies: (state) => {
        return state.movies.length
    },
    filterMovies() {
        return this.movies.filter((movie) => {
            return movie.year >= this.year
        })
    }
  },
  actions: {
    getMovies() {
      if (this.query)
        this.movies = moviesList.filter((movie) =>
          movie.title.toLowerCase().includes(this.query.toLowerCase())
        )
      else this.movies = moviesList
    },
    getSingleMovie(id) {
      this.isLoading = true
      this.singleMovie = moviesList.filter((movie) => movie.id === parseInt(id))[0]
      this.isLoading = false
      // Redirect to 404 page
      if (!this.singleMovie) this.router.push({ name: 'NotFound' })
    }
  }
})
