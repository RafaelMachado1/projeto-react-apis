import { ChakraProvider } from "@chakra-ui/react";
import Router from "./Router/Router";
import  GlobalState  from "./context/GlobalState"


function App() {
  return (

    <>
    <GlobalState>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </GlobalState>
    </>

  );
}

export default App;
