import * as actionTypes from './actions';
import { login, register } from "../Utils/api-auth";

const intialState = {
    first_name:"",
    last_name:"",
    bio:"",
    collections:[{}],
    interests:[],
    email:"",
    location:"",
    contacts:[{
        link:"",
        platform:""
    },{
        link:"",
        platform:""
    },{
        link:"",
        platform:""
    },
    {
        link:"",
        platform:""
    },
    {
        link:"",
        platform:""
    }],
    open: false,
    error: "",
    show: false
};

const reducers = (state=intialState,action)=>{
    const userData = {user:{...state}};
    switch(action.type){
        case(actionTypes.LOGIN):
            console.log("Reducer state",userData)
            login(userData).then(
            (data)=>console.log(data)
        )
        break;
        case(actionTypes.MODIFY):
            console.log(state.email);
            return {
                ...state,
                [action.name]:action.value
            }
        case(actionTypes.REGISTER):
            console.log("Reducer state",userData)
            register(userData).then(
            (data)=>console.log(data))
            break;            
        default:
            return {
                ...state
            }
    }
};

export default reducers;