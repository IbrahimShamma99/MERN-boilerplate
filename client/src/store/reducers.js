import * as actionTypes from './actions';
import propTypes from 'prop-types';
const intialState = {
    first_name:propTypes.string,
    last_name:propTypes.string,
    bio:propTypes.string,
    contacts:[{
        link:propTypes.string,
        platform:propTypes.string
    },{
        link:propTypes.string,
        platform:propTypes.string
    },{
        link:propTypes.string,
        platform:propTypes.string
    },
    {
        link:propTypes.string,
        platform:propTypes.string
    },
    {
        link:propTypes.string,
        platform:propTypes.string
    }],
    collections:[{}],
    interests:[],
    email:propTypes.string,
    location:propTypes.string
};

const reducers = (state=intialState,action)=>{
    switch(action.type){
        case(actionTypes.LOGIN):
            state={
                ...state,
                ...action.res
            };
            break;
    }
};

export default reducers;