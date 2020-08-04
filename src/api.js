import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "e28b9b6be0334c1e101c277c6159079d",
        language:"en-US"
    }
});

export const movieAPI = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) =>
        api.get(`movie/${id}`, {
            params: {
                append_to_response : "videos"
            }
    }),
    search: (term) => api.get("search/movie", {
        param: {
            query: encodeURIComponent(term)
        }
    })
};

export const tvAPI = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => 
        api.get(`tv/${id}`, { 
            params: {
                append_to_response : "videos"
            }
    }),
    search: (term) => api.get("search/tv", {
        param: {
            query: encodeURIComponent(term)
        }
    })
}; 