import { configureStore } from '@reduxjs/toolkit'
import { IUser } from '../models'
import { userSlice } from './slices/user.slice'


export interface AppStore {
    user : IUser
}

export default configureStore <AppStore>({
    reducer: {
        user: userSlice.reducer,
    }
})