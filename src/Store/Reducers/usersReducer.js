import { authTypes } from '../Actions/actionTypes.js';

const initialState = {
    // user: [],
    firebase_id: null,
    email: null,
    first_name: null,
    last_name: null,
    address: null,
    city: null, 
    state: null,
    zip: null,
    phone: null,
    cart: {
        id: null,
        qty: null,
    },
    loading: false,
    loggedIn: false,
    error: null
};

export default (state = initialState, actions) => {

    switch (actions.type) {
        case authTypes.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case authTypes.AUTH_SUCCESS:
            console.log(actions.payload[0].email, "authenticated user")
            return {
                ...state,
                loading: false,
                loggedIn: true,
                firebase_id: actions.payload[0].firebase_id,
                email: actions.payload[0].email,
                first_name: actions.payload[0].first_name,
                last_name: actions.payload[0].last_name,
                address: actions.payload[0].address,
                city: actions.payload[0].city, 
                state: actions.payload[0].state,
                zip: actions.payload[0].zip,
                phone: actions.payload[0].phone,
                cart: {
                    ...state.cart,
                    id: actions.payload[1].id,
                    qty:  actions.payload[1].quantity
                }
            }
            case authTypes.AUTH_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: actions.payload
                }
            case authTypes.LOGOUT_START:
                return {
                    ...state,
                    loading: true
                }
            case authTypes.LOGIN_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    loggedIn: false,
                }
            case authTypes.LOGOUT_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: actions.payload
                }
            default:
            return state;
    };

  

}