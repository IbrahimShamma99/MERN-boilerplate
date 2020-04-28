import apiNames from '../constants/server';

const login = (DATA) => {
    return fetch(apiNames.serverDev +'/login/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body:JSON.stringify(DATA)
        
      })
      .then((response) => {
        return response.json()
      }).catch((err) => console.log(err))
}
  
  const logout = () => {
    return fetch(apiNames.serverDev +'/logout', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
  }
  
  const register = (user) => {
    
    return fetch(apiNames.serverDev +'/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json"
        },
        withCredentials: true,
        crossdomain: true,
        body: JSON.stringify(user)
      })
      .then((response) => {
        console.log(response)
        return response.json()
      }).catch((err) => console.log(err))
  }
  

  export {
    login,
    logout,
    register
  };