export interface User {
  email:string
  username:string
  isAdmin:string
  authentication:{
    password:string
    sault:string,
    sessionToken:string
  }
  _id:string
}
