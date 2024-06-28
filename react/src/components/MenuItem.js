import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import MenuCard from "./MenuCard"

const MenuItem=()=>{

    const [mealName, setMealName ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/${params.path}/${params.id}`

    useEffect(()=>{
        axios.get(url).then(res => setMealName(res.data))
    }, [])

    //swtich between category headings
    let dish
    switch (mealName.category){
        case 'appetizer':
            dish = mealName.app
            break
        case 'protein':
            dish = mealName.protein
            break
        case 'side':
            dish = mealName.side
            break
        case 'drink':
            dish = mealName.drink
            break
        default: 
            dish = 'your dish'
            break
    }

    return(
        <main>
            <div className="container">
                <h3 className="dish-head">{dish}</h3>
                <img src={`/images/${mealName.imgUrl}`} alt={`image of ${mealName.title}`} className="img-fluid image card-img-top menu-image"/>
                <p className="dish-price">${mealName.price}</p>
                <p className="dish-descript">{mealName.descript}</p>
            </div>
        </main>
    )


}

export default MenuItem