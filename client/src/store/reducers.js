import * as actionTypes from './actions';
import { login, register } from "../Utils/api-auth";
import isEmail from 'validator/lib/isEmail';

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
            if (isEmail(state.email) && state.password){
            register(userData).then((data) => {
                if (data.error) {
                    return {
                        ...state,
                        error: data.error,
                        show:true
                    }
                  } else {
                      console.log(data.user)
                    return {
                        ...state,
                        ...data.user,
                        open: true,
                    }
                  }
                })
            }
            else {
                return {
                    ...state,
                    error: "Data is not valid",
                    show:true
                }
            }
            break;            
        default:
            return {
                ...state
            }
    }
};

export default reducers;