import { useRouteError } from "react-router-dom"

const   ErrorElement=  ()=>{

    const error=useRouteError();
    // console.log(error);

    return(
        <div>
            <h1>OOPS!!</h1>
            <h2>Something Went Wrong!!</h2>
            <h3>{error.statusText || error.message}</h3>
        </div>
    )
}

export default ErrorElement