const SET_LOADING = "SET_LOADING";
const SET_TEXT = "SET_TEXT";

const initialState = {
    AppStart: false,
    Loading: true,
    Text: "initialValue"
}

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                loading: !state.loading
            }
        }
        case SET_TEXT:{
            return {
                ...state,
                Text: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }

}

export const setLoading = () => ({type: SET_LOADING})
export const setText=(payload)=>({type:SET_TEXT, payload})


export default AppReducer;