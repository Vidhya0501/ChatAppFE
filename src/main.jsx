import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import ChatProvider from "./Context/ChatProvider.jsx";

export const server = "https://chatappbe-806c.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
  </ChakraProvider>
);
