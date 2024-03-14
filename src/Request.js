const key='2d9c7bb72c40f2534725b8f939e04f2b'
const request={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    // requestSeries:`https://api.themoviedb.org/3/rated/tv?api_key=${key}&language=en-US&page=1&sort_by=created_at.asc`
}
export default request;