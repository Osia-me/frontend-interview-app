import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from 'react-router-dom'
import Purchaseflow from './purchase-flow/purchase-flow.component'
import LANDING_CONST from './constants/landing.constants'
import { ProductIds } from './types/product.type'
import logo from './logo.svg'
import './App.css'

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route
            path="/buy/insurance_developer"
            element={<Purchaseflow productId={ProductIds.developerInsurance} />}
          />
          <Route
            path="/buy/insurance_designer"
            element={<Purchaseflow productId={ProductIds.designerInsurance} />}
          />
          <Route
            path="/"
            element={
              <nav>
                <p>{LANDING_CONST.title}</p>
                <div className="App-buttons">
                  <Link to="/buy/insurance_developer">
                    <button type="button" className="App-button">
                      {LANDING_CONST.subtitle_1}
                    </button>
                  </Link>
                  <Link to="/buy/insurance_designer">
                    <button type="button" className="App-button">
                      {LANDING_CONST.subtitle_2}
                    </button>
                  </Link>
                </div>
              </nav>
            }
          />
        </Switch>
      </div>
    </Router>
  )
}

export default App
