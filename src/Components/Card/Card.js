import React from 'react'
import { useSelector } from 'react-redux'
import { selectDataCity } from '../../Redux/Slice/WatherSlice'
import Loading from '../Loading/Loading'
function Card() {
    const data = useSelector(selectDataCity)
    const icon_src = ` https://openweathermap.org/img/wn/`
    const limit = 7
    console.log(data, "data")
  
    return (
        <div>{data ? <div className='card'>
            <div className='weatherCard'>
                <div className='title'>
                    <h3>
                        {data.city.name}
                        {data.city.country}
                    </h3>
                </div>
                <div>
                    <img src={icon_src + data.list[0].weather[0].icon + "@2x.png"} alt={icon_src} />
                    <div>
                        {data.list[0].weather[0].description}
                        {data.list[0].weather[0].main}
                    </div>
                    <h3>{Math.floor(data.list[0].main.temp).toString().slice(0, -1)} °C</h3>
                    <div>
                        <h4>
                            {Math.max(data.list[0].main.temp_max).toString().slice(0, -4)} °C /
                            {Math.min(data.list[0].main.temp_min).toString().slice(0, -4)} °C
                        </h4>
                    </div>
                </div>
            </div><br></br>
            <div className='weatherCardSeven'>
                {data.list.slice(0, limit).map((c, key) => <div key={key} className='weatherCardSevenItem'>
                    <img src={icon_src + c.weather[0].icon + "@2x.png"} alt={icon_src} />
                    <div>
                        {Math.floor(c.main.temp).toString().slice(0, -1)}°C
                    </div>
                    <div>
                       <h5>
                       {Math.max(c.main.temp_max).toString().slice(0, -4)} °C /
                        {Math.min(c.main.temp_min).toString().slice(0, -4)} °C
                       </h5>
                    </div>
                    <div>
                        {c.weather[0].description}
                        {c.weather[0].main}
                    </div>
                </div>)
                }
            </div>
            <div>
                
            </div>
        </div>
        :<Loading/>}

        </div>
    )
}

export default Card
