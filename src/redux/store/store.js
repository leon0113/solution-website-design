import authReducer from '../features/auth/authSlice'
import compaignReducer from '../features/compaign/compaignSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({

    reducer:{
    auth:authReducer,
   compagin:compaignReducer
    }
})

export default store