import { ACT_REGISTER } from "../constrains/actionType";

const initialState = JSON.parse(localStorage.getItem("listUser")) || [];
export const listUser = (state = initialState, action) => {
    switch (action.type) {
        // clone new array
        
        case ACT_REGISTER:
            const newUsers = [...state]
            // push vao mang moi
            newUsers.push(action.payload)
            // luu len localStorage
            localStorage.setItem("listUser", JSON.stringify(newUsers));
            return newUsers;    
        default:
            return state;
    }
};