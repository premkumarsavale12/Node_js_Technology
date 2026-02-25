import { userList } from "../model/userModel.js";

export function handleUser(req, res) {

    const userData = userList(); 
    console.log("userData", userData); 

    // Must send as object
    res.render("user", { users: userData });

}