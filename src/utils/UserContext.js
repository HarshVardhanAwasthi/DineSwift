import { createContext } from "react";

const UserContext=createContext({
    loggedInUser : "Default User",
    count:0
})

export default UserContext;