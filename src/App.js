import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Routes from './routing/Routes'

const App = () => (
  //We create this provider and pass the store
  //so that all the components have access to the state
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route component={Routes} />
    </Switch>
  </Router>
)

export default App
