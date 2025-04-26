import UserClass from "./UserClass"

 const  About = ()=>{
    return(
        <div className="">
            <h1 className="text-xl font-bold px-2">About Us</h1>
            <UserClass name={"Ram Charan"} location={"Ayodhya"} contact={"RC@Ayodhya"}/>
        </div>
    )
 }

 export default About