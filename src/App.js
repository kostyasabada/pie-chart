import React, { useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './App.scss';
import Chart2 from './components/Chart2/Chart2';
import Home from './components/Home/Home';
import { randomColor } from './utils/common.utils';

function App() {
  const [items, setItems] = useState([
    { title: '', amount: '', id: randomColor() },
  ]);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                activeClassName="nav__link_active"
                to="/chart"
                exact
              >
                Chart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route
          path="/"
          exact
        >
          <Home
            items={items}
            setItems={setItems}
            randomColor={randomColor}
          />
        </Route>
        <Route
          path="/chart"
          exact
        >
          <Chart2 items={items} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
