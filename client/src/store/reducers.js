import * as actionTypes from './actions';
import { login, register } from "../Utils/api-auth";

const intialState = {
    first_name:"",
    last_name:"",
    bio:"",
    password:"",
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
    show: false,
    submitted:false
};

const reducers = (state=intialState,action) => {
    const userData = {user:{...state}};
    switch(action.type){
        case(actionTypes.LOGIN):
            login(userData).then()
        break;
        case(actionTypes.MODIFY):
            return {
                ...state,
                [action.name]:action.value
            };
        case(actionTypes.REGISTER):
            register(userData)
            .then((data) => {
                if (data.error) {
                    action.asyncDispatch({type:"error",message:data.error})
                  } 
                  else {
                      action.asyncDispatch({type:"success",res:data.user})
                  }
                })
            return {...state};
        case("error"):
            return {
                ...state,
                error: action.message,
                show:true
            }
        case("success"):
        return {
            ...state,
            ...action.res,
            open:true,
        }
        default:
            return {
                ...state
            }
    }
};

export default reducers;