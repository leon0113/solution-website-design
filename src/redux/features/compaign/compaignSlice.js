import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import auth from '../../services/authService'
import axios from '../../axios/axios'

const state = {
    compaigns: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',

}





    export const allCompaigns = createAsyncThunk('/compaigns', async (_, thunkAPI) => {
        // console.log(userData)
       
        try {
            const response=await axios.get('/getcampaign/')

            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }

    })


    
    export const creatCompaign = createAsyncThunk('/create-compaigns', async (userData, thunkAPI) => {
        console.log(userData)
       
        try {
            
            const response=await axios.post('/getcampaign',userData)

            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }

    })


    export const createAdset = createAsyncThunk('/create-Adset', async (userData, thunkAPI) => {
        console.log(userData)
       
        try {
            
            const response=await axios.post('/getcampaign/adset',userData)

            return response.data
            
        } catch (error) {
            const message = error.response?.data?.error || error.message || error.toString()
           
            return thunkAPI.rejectWithValue(message)
        }

    })




    
  


    

   export  const compaignSlice = createSlice({
        name: 'compaigns',
        initialState: state,
        reducers: {
            reset:(state,action)=>{
                state.isSuccess = false
                state.isLoading = false
                state.isError = false
            }

        },
        extraReducers: (builder) => {
            builder
            
            .addCase(allCompaigns.pending, (state) => {
                    state.isLoading = true

                }).addCase(allCompaigns.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.message=''
                    state.compaigns = action.payload
                    // if(state?.packages?.attributes){state.packages = {...state.packages,packages:packages}}
                    // state.packages = {...state?.packages,packages:packages}
                    

                }).addCase(allCompaigns.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess=false
                    state.isError = true
                    state.compaigns = action.payload
                    state.compaigns = null
                })


                   
            .addCase(creatCompaign.pending, (state) => {
                state.isLoading = true

            }).addCase(creatCompaign.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message=''
                state.compaigns = action.payload
                // if(state?.packages?.attributes){state.packages = {...state.packages,packages:packages}}
                // state.packages = {...state?.packages,packages:packages}
                

            }).addCase(creatCompaign.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess=false
                state.isError = true
                state.compaigns = action.payload
                state.compaigns = null
            })




            .addCase(createAdset.pending, (state) => {
                state.isLoading = true

            }).addCase(createAdset.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message=''
                state.compaigns = action.payload
                // if(state?.packages?.attributes){state.packages = {...state.packages,packages:packages}}
                // state.packages = {...state?.packages,packages:packages}
                

            }).addCase(createAdset.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess=false
                state.isError = true
                state.compaigns = action.payload
                state.compaigns = null
            })



               



                

                

        }
    })


    export default compaignSlice.reducer
    export const {reset}= compaignSlice.actions
