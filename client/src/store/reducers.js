import * as actionTypes from './actions';
import { login, register, logout } from "../Utils/api-auth";

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
    }]
};

const reducers = (state=intialState,action)=>{
    switch(action.type){
        case(actionTypes.LOGIN):
            console.log("Reducer state",state)
            login({user:{
                ...state
            }
        }).then(
            (data)=>console.log(data)
        )
        break;
        case(actionTypes.MODIFY):
            console.log(state);
            return {
                ...state,
                [action.name]:action.value
            }
        default:
            return {
                ...state
            }
    }
};

export default reducers;