import { User, userEmptyState } from '@/models';
import { createSlice} from '@reduxjs/toolkit';

interface Action{
    payload: User;
}


export const userSlice = createSlice({
    name: 'user',
    // initialState: localStorage.getItem(LocalStorageEntities.user_info)
    // ?JSON.parse(localStorage.getItem(LocalStorageEntities.user_info)) as string
    // : userEmptyState,
    initialState: userEmptyState,
    reducers:{
        createUser:(state, action: Action) => {
            return action.payload;
        },

        modifyUser:(state, action: Action)=>{
            const formattedData = {
                ...state, ...action.payload
            }
            return formattedData;
        },

        resetUser:()=>{
            return userEmptyState;
        }
    }

})

export const {createUser, modifyUser, resetUser } = userSlice.actions
export default userSlice.reducer;