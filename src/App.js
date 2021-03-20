import React from 'react'
import model from './model'
import { StoreProvider, createStore} from 'easy-peasy'
import { Switch, Route } from 'react-router-dom'

/* Pages */
// Non-Session
import Home from './pages'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

// Session-Dependent
import SubmitCard from "./pages/session/SubmitCard"
import Profile from "./pages/session/Profile"

/* Components */
import Navbar from './components/Navbar'

// state management doc (using easy-peasy) :: https://easy-peasy.now.sh/
const store = createStore(model)

function App() {
    return (
        <StoreProvider store={store}>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/sign-up' component={Signup} />
                <Route path='/login' exact component={Login} />
                <Route path='/forgot-password' exact component={ForgotPassword} />

                <Route path='/submit-card' exact component={SubmitCard} />
                <Route path='/profile' exact component={Profile} />
            </Switch>
        </StoreProvider>
    );
}

export default App;
