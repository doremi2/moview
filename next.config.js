const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [{
      source: "/old-blog/:path*", //입력받은주소
      destination: "/new-sexy-blog/:path*", //리다이렉트 되는 주소
      permanent: false,
    }]
  },
  async rewrites(){
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    },
      {
        source: "/api/movies/:id/videos",
        destination: `https://api.themoviedb.org/3/movie/:id/videos?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
      ]

  }//유저를 redirect 시키기는 하지만 URL은 변하지 않는다.
}
//리다이렉트