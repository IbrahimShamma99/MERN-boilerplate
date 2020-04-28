const login = (DATA) => {
    return fetch('/auth/signin/', {
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
    return fetch('/auth/signout/', {
      method: 'GET',
    }).then(response => {
        return response.json()
    }).catch((err) => console.log(err))
  }
  
  const register = (user) => {
    
    return fetch('http://localhost:5000/register', {
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