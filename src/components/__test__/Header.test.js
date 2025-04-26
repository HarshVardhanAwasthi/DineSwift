import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import  "@testing-library/jest-dom"

it("Should render component with login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const  loginButton=screen.getByRole("button",{name:"Login"});

    // fireEvent.click(loginButton)

    // const  logoutButton=screen.getByRole("button",{name:"Logout"})

    expect(loginButton).toBeInTheDocument();

})

it("Should change login button to  logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const  loginButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton)

    const  logoutButton=screen.getByRole("button",{name:"Logout"})

    expect(loginButton).toBeInTheDocument();

})

it("Should render component with cart having 0 items",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const  cart=screen.getByText("Cart(0)");

    expect(cart).toBeInTheDocument();

})

it("Should render component with Cart",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const  cart=screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();

})