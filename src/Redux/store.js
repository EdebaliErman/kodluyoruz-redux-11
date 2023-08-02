import {configureStore} from '@reduxjs/toolkit'
import weatherSlice  from './Slice/WatherSlice'


export const store = configureStore({
    reducer: { weather: weatherSlice }
})