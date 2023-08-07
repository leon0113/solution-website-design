import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import auth from '../../services/authService'
import axios from '../../axios/axios'

const state = {
    user: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
}

         export const loginFB = createAsyncThunk('/loginFB', async (_, thunkAPI) => {
           
         try {
             const response=await axios.get('/auth/facebook/callback/')
             console.log(response)
             return response.data
            
         } catch (error) {
             const message = error.response?.data?.error || error.message || error.toString()
           
             return thunkAPI.rejectWithValue(message)
         }



     })



    // export const refreshToken = createAsyncThunk('/refresh-token', async (_, thunkAPI) => {
    //     try {
    //         const response=await axiosPrivate.get('/api/auth/refresh_token/')
    //         console.log(response)
    //         return response.data
            
    //     } catch (error) {
    //         const message = error.response?.data?.error || error.message || error.toString()
           
    //         return thunkAPI.rejectWithValue(message)
    //     }



    // })






   

 

   




    







 

   export  const authSlice = createSlice({
        name: 'auth',
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
            
           .addCase(loginFB.pending, (state) => {
                   state.isLoading = true

               }).addCase(loginFB.fulfilled, (state, action) => {
                   state.isLoading = false
                   state.isSuccess = true
                   state.message=''
                  state.user = action.payload
               }).addCase(loginFB.rejected, (state, action) => {
                   state.isLoading = false
                   state.isSuccess=false
                   state.isError = true
                   state.message = action.payload
                   state.user = null
               })

    
                
                // .addCase(refreshToken.pending, (state) => {
                //     state.isLoading = true

                // }).addCase(refreshToken.fulfilled, (state, action) => {
                //     state.isLoading = false
                //     state.isSuccess = true
                //     state.message=''
                //     let {tokens,...elements} = state.user
                //     tokens = action.payload
                //     state.user = {tokens,...elements}
                // }).addCase(refreshToken.rejected, (state, action) => {
                //     state.isLoading = false
                //     state.isSuccess=false
                //     state.isError = true
                //     state.message = action.payload
                //     state.user = null
                // })



                

                


                
               


             
                

                

        }
    })


    export default authSlice.reducer
    export const {reset}= authSlice.actions
