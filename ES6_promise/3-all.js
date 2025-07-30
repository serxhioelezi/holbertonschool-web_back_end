import {uploadPhoto, createUser} from "./utils.js";

function handleProfileSignup(){
    return promis.all([uploadPhoto(), createUser()])
    .then((Response)=>{
console.log()
    })
}
