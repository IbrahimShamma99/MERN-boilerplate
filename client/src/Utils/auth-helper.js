import { signout } from './api-auth.js';

const auth = {
  isAuthenticated() {
    if (typeof window === "undefined")
      return false

    if (sessionStorage.getItem('jwt'))
      return sessionStorage.getItem('jwt')
    else
      return false
  },
  authenticate(jwt, cb) {
    console.log("PRE JWT=",jwt);
    console.log("PRE JWT type=",typeof jwt);
    if (typeof window !== "undefined")
      sessionStorage.setItem('jwt', jwt)
    cb();
  },
  signout(cb) {
    if (typeof window !== "undefined")
      sessionStorage.removeItem('jwt');
    cb()
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth;