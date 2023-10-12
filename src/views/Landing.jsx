import { Promo } from "../components/promociones/Promo"
import { Trending } from "./Trending"
import { Categories } from "./Categories"
export const Landing = () => {
    return (
        <>
            <Promo /> 
            <Trending />
            <Categories />
        </>
    )
}

