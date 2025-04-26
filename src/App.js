import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";



import RestaurantInfo from "./components/RestaurantInfo";

import ErrorElement from "./components/ErrorElement";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Shimmer } from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";

import appStore from "./utils/appStore";

const About = lazy(() => import("./components/About"));

// const RestaurantInfo=lazy(()=>import("./components/RestaurantInfo"))

const App = () => {
  const [userName, setUserName] = useState("");
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const data = {
      name: "Sachin Tendulkar",
    };

    setUserName(data.name);
    setItemCount(0);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
          count: itemCount,
          setItemCount,
        }}
      >
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Restaurant/:resId",
        element: (<RestaurantInfo />),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
