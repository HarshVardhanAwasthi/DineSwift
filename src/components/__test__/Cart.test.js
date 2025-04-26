import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from  "../../slices/cartSlice"

test("Should load About component", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load Button in Cart component", () => {
  const mockStore = configureStore({
    reducer: {
      cart:cartReducer
    },
    preloadedState: {
      cart: {
        items: ["Item A"], // 👈 This makes the button render
      },
    },
  });

  render(
    <Provider store={mockStore}>
      <Cart />
    </Provider>
  );

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument()
});
