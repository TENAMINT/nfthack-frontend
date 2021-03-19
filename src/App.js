import React from 'react'
import model from './model'
import { StoreProvider, createStore } from 'easy-peasy'
import { Switch, Route } from 'react-router-dom'
import Home from './pages'

// state management doc (using easy-peasy) :: https://easy-peasy.now.sh/
const store = createStore(model)

function App() {
  return (
    <>
        <StoreProvider store={store}>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </StoreProvider>
    </>
  );
}

export default App;
