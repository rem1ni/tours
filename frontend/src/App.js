import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {useEffect} from "react";
import {getClientsInfo} from "./api/rest/clients";

function App() {

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
