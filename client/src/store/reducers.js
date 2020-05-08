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
                    action.asyncDispatch({type:actionTypes.ERROR,message:data.error})
                  } 
                  else {
                      action.asyncDispatch({type:actionTypes.SUCCESS,res:data.user})
                  }
                })
            return {...state};
        case(actionTypes.ERROR):
            return {
                ...state,
                error: action.message,
                show:true
            }
        case(actionTypes.SUCCESS):
        return {
            ...state,
            ...action.res,
            open:true,
        }
        case(actionTypes.LOGOUT):
            return {
                open:true
            }
        default:
            return {
                ...state
            }
    }
};

export default reducers;