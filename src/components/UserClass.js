import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userData:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/HARSHVARDHANAWASTHI");
        const data= await response.json();
        

        this.setState({
            userData:data
        })
        // console.log(data);
    }

    render(){
        const { location, contact}=this.props;

        const {name , id, html_url}= this?.state?.userData
        return (
            <div className="user-card">
              <div>
                Name: 
                <UserContext.Consumer>
                  {data => (
                    <span>{data?.loggedInUser}</span>
                  )}
                </UserContext.Consumer>
              </div>
              <div>id: {id  ??  "1234" } </div>
              <div>Work: {html_url ?? "www.github.com"}</div>
            </div>
          );
          
          
    }
}

export default UserClass;