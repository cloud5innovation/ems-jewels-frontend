import {authTypes} from './actionTypes';
import axios from './../../axiosInstance';

export const initAuth = (email, uid, idToken) => dispatch => {
    dispatch ({
        type: authTypes.AUTH_START
    })
    if (uid) {
        axios.defaults.headers.common["Authorization"] = idToken;
        axios.get(`/user/${uid}`)
        .then(res => {
            if (res.status === 200) {
                dispatch({
                    type: authTypes.AUTH_SUCCESS,
                    payload: res.data
                })
            }
        })
        .catch(err => {
            dispatch({
                type: authTypes.AUTH_FAIL,
                payload: err
            })
        })
    } else {
        dispatch ({
            type: authTypes.AUTH_FAIL,
            payload: "No uid provided"
        })
    }
};

export const register = (userObj) =>  (dispatch) => {
    dispatch ({
        type: authTypes.REGISTER_START
    })

    axios.post("/register", { ...userObj })
    .then(res =>{
    if (res.status === 201) {
        const data = {
            first_name: userObj.first_name,
            last_name: userObj.last_name,
            email: userObj.email,
            firebase_id: userObj.firebase_id,
        }
        dispatch({
            type: authTypes.REGISTER_SUCCESS,
            payload: data
        })
    } else if (res.status === 400) {
        dispatch({
            type: authTypes.REGISTER_FAIL,
            payload: res.data
        })
    }
   })
   .catch( err => {
    dispatch({
        type: authTypes.REGISTER_FAIL,
        payload: err
    })
})
    
}

export const logOut = () => (dispatch) => {
    dispatch ({
        type: authTypes.LOGOUT_START
    })
    dispatch ({
        type: authTypes.LOGOUT_SUCCESS,
        payload: true
    })
    dispatch ({
        type: authTypes.LOGOUT_FAIL,
        payload: 'Failed to log use out'
    })
}
export default {
    register,
    initAuth,
    logOut
}