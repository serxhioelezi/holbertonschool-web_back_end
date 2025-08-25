import {uploadPhoto, createUser} from "./utils.js";

function handleProfileSignup(){
    return promise.all([uploadPhoto(), createUser()])
    .then((Response)=>{
console.log()
    })
}
