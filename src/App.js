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
import CardView from "./pages/session/CardView"
import CardListing from "./pages/session/CardListing"
import Logout from "./pages/session/Logout"

/* Components */
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// state management doc (using easy-peasy) :: https://easy-peasy.now.sh/
const store = createStore(model)

function App() {
    return (
        <StoreProvider store={store}>
            <div className="flex flex-col h-screen justify-between">
                <Navbar />
                <div className="mb-auto">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/sign-up' component={Signup} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/forgot-password' exact component={ForgotPassword} />

                        <Route path='/submit-card' exact component={SubmitCard} />
                        <Route path='/card-details' exact component={CardView} />
                        <Route path='/card-listing' exact component={CardListing} />
                        <Route path='/profile' exact component={Profile} />
                        <Route path='/logout' exact component={Logout} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </StoreProvider>
    );
}

export default App;
