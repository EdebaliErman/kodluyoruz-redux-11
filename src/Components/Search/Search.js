import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { selectStatusCity, fecthDataCity, selectCityName, setCityName } from '../../Redux/Slice/WatherSlice'

function Search() {
    const statusCity = useSelector(selectStatusCity)
    const cityName = useSelector(selectCityName)
    const dispacht = useDispatch()
    useEffect(() => {
        if (statusCity === "idle") {
            console.log("loading")
        }
        else if (statusCity === "succes") {
            console.log("data succes")
        }
        else {
            console.log("error")
        }

    }, [dispacht, statusCity, cityName])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispacht(fecthDataCity(cityName))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={cityName || ""}
                    placeholder="write city"
                    onChange={e => dispacht(setCityName(e.target.value))} />
                <button type='submit'>Search</button>
            </form>
           
        </div>
    )
}

export default Search
