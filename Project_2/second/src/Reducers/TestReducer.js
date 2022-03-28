import MaskGroup from "../img/Elements/firstPage/Mask Group.png"
import MaskGroup1 from "../img/Elements/firstPage/Mask Group-1.png"
import MaskGroup2 from "../img/Elements/firstPage/Mask Group-2.png"
import MaskGroup3 from "../img/Elements/firstPage/Mask Group-3.png"
import {unmountComponentAtNode} from "react-dom";

const GET_NEW_QUESTION = "GET_NEW_QUESTION"
const PAGE_CHANGED = "PAGE_CHANGED"
const SET_ON_CLICKED = "SET_ON_CLICKED"
const SET_RESULT = "SET_RESULT"
const SET_NEXT_PAGE = "SET_NEXT_PAGE"

let initialState = {
    pages: [],
    activepage: 0,
    questions: [
        {
            questId: 1,
            text: "Начинаем с простенького. Судя по мультфильму, Чебурашка и Гена много гуляли и ходили пешком." +
                " А вот если бы они устали, то могли бы спокойно воспользоваться любым " +
                "другим способом передвижения, кроме одного. Какого?",
            variables: [
                {
                    id: 0,
                    img: MaskGroup,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 1,
                    img: MaskGroup1,
                    accuracy: true,
                    onclicked: false
                },
                {
                    id: 2,
                    img: MaskGroup2,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 3,
                    img: MaskGroup3,
                    accuracy: false,
                    onclicked: false
                }
            ],
        },
        {
            questId: 2,
            text: "question number two",
            variables: [
                {
                    id: 0,
                    img: null,
                    accuracy: true,
                    onclicked: false
                },
                {
                    id: 1,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 2,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 3,
                    img: null,
                    accuracy: false,
                    onclicked: false
                }
            ]
        },
        {
            questId: 3,
            text: "question number three",
            variables: [
                {
                    id: 0,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 1,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 2,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 3,
                    img: null,
                    accuracy: false,
                    onclicked: false
                }
            ]
        },
        {
            questId: 4,
            text: "question number four",
            variables: [
                {
                    id: 0,
                    img: null,
                    accuracy: false,
                    onclicked: false,
                },
                {
                    id: 1,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 2,
                    img: null,
                    accuracy: false,
                    onclicked: false
                },
                {
                    id: 3,
                    img: null,
                    accuracy: false,
                    onclicked: false
                }
            ],

        },
    ],
    activequestion: null,
    nextPage: false,
    result: [],


}

const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEW_QUESTION: {
            return {
                ...state,
                activequestion: {...state.questions[action.page]}
            }
        }
        case PAGE_CHANGED: {
            return {
                ...state,
                activepage: action.value
            }
        }
        case SET_NEXT_PAGE: {
            return {
                ...state,
                nextPage: action.valid
            }
        }
        case SET_ON_CLICKED: {
            return {
                ...state,
                cardonclicked: action.accuracy,
                activequestion: {
                    ...state.activequestion, variables: [...state.activequestion.variables.map(e => {
                        if (e.id === action.id) {
                            return {
                                ...e,
                                onclicked: true
                            }
                        }
                        return {
                            ...e
                        }
                    })]
                }
            }
        }
        case SET_RESULT: {
            return {
                ...state,
                result: [...state.result, action.value]
            }
        }
        default: {
            return {
                ...state
            }
        }

    }
}

export const getQuestionThunk = (page) => {
    return (dispatch) => {
        dispatch(setNextPage(false))
        dispatch(getQuestion(page))
        dispatch(setOnClicked(false))
    }
}

export const setOnClickedThunk = (element, id) => {
    return (dispatch) => {
        dispatch(setOnClicked(element, id))
        dispatch(setResult(element))
        dispatch(setNextPage(true))
    }
}


export const getQuestion = (page) => ({type: GET_NEW_QUESTION, page})
export const onPageChanged = (value) => ({type: PAGE_CHANGED, value})
export const setOnClicked = (accuracy, id) => ({type: SET_ON_CLICKED, accuracy, id})
export const setResult = (value) => ({type: SET_RESULT, value})
export const setNextPage = (valid) => ({type: SET_NEXT_PAGE, valid})
export default TestReducer