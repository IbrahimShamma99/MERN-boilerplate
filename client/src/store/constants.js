const contactsInitState = {
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
}

const BasicInfoInitState = {
    first_name:"",
    last_name:"",
    username:"",
    bio:"",
    password:"",
    collections:[{}],
    interests:[],
    email:"",
    location:"",
    avatar:"",
}

const userInitState = {
    ...BasicInfoInitState,
    ...contactsInitState
}

export {userInitState};