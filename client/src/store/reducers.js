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
    show: false
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
            if (state.email && state.password){
            register(userData).then((data) => {
                  if (data.error) {
                      return {
                          ...state,
                          error: data.error
                      }
                  } else {
                    return {
                        ...state,
                        ...data.user,
                        open: true
                    }
                  }
                })}
            break;            
        default:
            return {
                ...state
            }
    }
};

export default reducers;