import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fecthDataCity = createAsyncThunk("weather/getCity", async (city) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1267cb9050fc373669749d1313b6c5b7`)
    return res.data

})
export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        statusCity: "idle",
        city: "",
        cityName:"Write in City"
    },
    reducers: {
        setCityName: (state, action) => {
            state.cityName = action.payload
        }
    },
    extraReducers: {
        [fecthDataCity.pending]: (state) => {

            state.statusCity = "loading"
        },
        [fecthDataCity.fulfilled]: (state, action) => {
            state.city = action.payload
            state.selectDataCity = "succes"
        },
        [fecthDataCity.rejected]: (state) => {
            state.statusCity = "error"
        }

    }
})
export const selectCityName = (state) => state.weather.cityName
export const selectDataCity = (state) => state.weather.city
export const selectStatusCity = (state) => state.weather.statusCity

export const { setCityName } = weatherSlice.actions

export default weatherSlice.reducer
