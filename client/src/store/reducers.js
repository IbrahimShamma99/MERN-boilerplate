import * as actionTypes from './actions';
import { login, register,update } from "../Utils/api-auth";
import auth from '../Utils/auth-helper';

const intialState = {
    first_name:"",
    last_name:"",
    bio:"",
    password:"",
    collections:[{}],
    interests:[],
    email:"",
    location:"",
    avatar:"",
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
        case(actionTypes.REFRESH):
            return {
                ...state,
                show:false,
                error:"",
                open:false
            }
        case(actionTypes.LOGIN):
            login(userData)
                .then((data) => {
                if (data.error) {
                    action.asyncDispatch({type:actionTypes.ERROR,message:data.error})
                  } 
                  else {
                      action.asyncDispatch({type:actionTypes.SUCCESS,user:data})
                  }
                })
            return {...state}
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
                      action.asyncDispatch({type:actionTypes.SUCCESS,user:data.user})
                  }
                })
            return {...state};
        case(actionTypes.ERROR):
            return {
                ...state,
                error: action.message,
                show:true
            }
        case (actionTypes.UPDATE):
            update(action.Data,action.avatar).then(
                (data)=>{
                    try {
                    console.log("data=",data)
                    if (data.error) {
                        action.asyncDispatch({type:actionTypes.ERROR,message:data.error})
                      } 
                      else {
                          action.asyncDispatch({type:actionTypes.SUCCESS,user:data.user})
                      }
                    }
                    catch(e){return {...state}}
                })
                return state;
        case(actionTypes.SUCCESS):
        console.log("action User",action.user)
        auth.authenticate(action.user.token,()=>{
            return(
                {...state,
                ...action.user,
                open:true
                }
            )
        });
        return(
            {...state,
            ...action.user,
            open:true
            }
        )
        case(actionTypes.LOGOUT):
            auth.signout(()=>{
                return {
                    ...state,
                    open:true
                }
            })    
            return {...state};
        case (actionTypes.ExternalError):
            return {
                ...state,
                error:action.message
            }
        default:
            return {
                ...state
            }
    }
};

export default reducers;