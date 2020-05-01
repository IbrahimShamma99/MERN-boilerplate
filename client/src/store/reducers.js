import * as actionTypes from './actions';

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
            return{
                ...state,
                ...action.res
            };
        case(actionTypes.MODIFY):
            console.log(state);
            return {
                [action.name]:action.value
            }
        default:
            return {
                ...state
            }
    }
};

export default reducers;