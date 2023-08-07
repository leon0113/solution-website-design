
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import { Provider } from "react-redux";
import store from './redux/store/store'
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <ThemeProvider>
        <MaterialTailwindControllerProvider>
          <Provider store={store}>
          <App />
          </Provider>  
        </MaterialTailwindControllerProvider>
      </ThemeProvider>
    </BrowserRouter>

);
