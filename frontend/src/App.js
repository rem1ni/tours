import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import {AuthProvider} from "./auth/AuthProvider";

function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
