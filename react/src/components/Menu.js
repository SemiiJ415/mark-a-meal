import { useState, useEffect } from "react"
import axios from "axios"
import MenuCard from "./MenuCard"

const Menu=()=>{

    //grab the data of each item in each category
    const [apps, setApps] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/appetizer')
        .then(res => {
            setApps(res.data)
        })
    }, [])

    const [drinks, setDrinks] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/drink')
        .then(res => {
            setDrinks(res.data)
        })
    }, [])
    const [meals, setMeals] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/meal')
        .then(res => {
            setMeals(res.data)
        })
    }, [])

    const [proteins, setProteins] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/protein')
        .then(res => {
            setProteins(res.data)
        })
    }, [])

    const [seasonings, setSeasonings] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/seasoning')
        .then(res => {
            setSeasonings(res.data)
        })
    }, [])
    const [sides, setSides] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/side')
        .then(res => {
            setSides(res.data)
        })
    }, [])

    const [desserts, setDesserts] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/dessert')
        .then(res => {
            setDesserts(res.data)
        })
    }, [])

    //grab each category item and its components
    const appetizerComponents = apps.map(item =>{
        return <MenuCard
                    key={item.appetizer_id}
                    id={item.appetizer_id}
                    title={item.app}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    descript={item.descript}
                    path={'appetizer'}
                />
    })
    const drinkComponents = drinks.map(item =>{
        return <MenuCard
                    key={item.drink_id}
                    id={item.drink_id}
                    title={item.drink}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    descript={item.descript}
                    path={'drink'}
                />
    })
    const proteinComponents = proteins.map(item =>{
        return <MenuCard
                    key={item.protein_id}
                    id={item.protein_id}
                    title={item.protein}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    descript={item.descript}
                    path={'protein'}
                />
    })
    const sideComponents = sides.map(item =>{
        return <MenuCard
                    key={item.side_id}
                    id={item.side_id}
                    title={item.side}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    descript={item.descript}
                    path={'side'}
                />
    })
    const dessertComponents = desserts.map(item =>{
        return <MenuCard
                    key={item.dessert_id}
                    id={item.dessert_id}
                    title={item.dessert}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    descript={item.descript}
                    path={'dessert'}
                />
    })


  
    return(
        <main className="main" id="menuMain">
            <div className="container">
                <h2 className="menu-subhead">Appetizers</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4 menu-comp">
                    { appetizerComponents }
                </div>
                <h2 className="menu-subhead">Proteins</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4 menu-comp">
                    { proteinComponents }
                </div>
                <h2 className="menu-subhead">Sides</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4 menu-comp">
                    { sideComponents }
                </div>
                <h2 className="menu-subhead">Drinks</h2>
                <div className="row row-cols-1 row-cols-md-5 g-4 menu-comp">
                    { drinkComponents }
                </div>
            </div>
        </main>
    )
}

export default Menu