import { ACT_REGISTER } from "../constrains/actionType"

export const act_register = (user) => {
    return {
        type: ACT_REGISTER,
        payload: user,
    };
};