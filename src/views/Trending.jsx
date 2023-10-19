import { PubliTrending } from "../components/publitrending/PubliTrending"
import '../components/publitrending/publitrending.css'

export const Trending = () => {
  return (
    <div className="trending">
      <div className="title">
        <h3>Trending</h3>
        <a href="#">Show All</a>
      </div>
      
      <div className="trendingitem">
        <PubliTrending />
        <PubliTrending />
        <PubliTrending />
      </div>
    </div>
  )
}
