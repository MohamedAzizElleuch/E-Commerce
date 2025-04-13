import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import App from "./App.jsx"; // Import your main App component
import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider
import {BrowserRouter} from "react-router-dom"; // Import BrowserRouter for routing
// This is where React app is rendered to the DOM

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <BrowserRouter> {/* BrowserRouter to enable routing */}
 {/* React.StrictMode to highlight potential issues in development */}
    <ChakraProvider> {/* ChakraProvider to wrap your app with Chakra UI */}
      <App /> {/* Your main app component */}
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
