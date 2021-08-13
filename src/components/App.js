import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import ExerciseOne from './ExerciseOne';
import ExerciseOneReadme from './ExerciseOne/ReadmeOne';
import ExerciseTwo from './ExerciseTwo';
import ExerciseTwoReadme from './ExerciseTwo/ReadmeTwo';

import './app.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <div className='exercise-index'>
            <div className='exercise-index__group'>
              <Link to='/exercise-one'>Clyde Exercise 1</Link>
              <Link to='/exercise-one/readme'>Clyde Exercise 1 README</Link>
            </div>
            <div className='exercise-index__group'>
              <Link to='/exercise-two'>Clyde Exercise 2</Link>
              <Link to='/exercise-two/readme'>Clyde Exercise 2 README</Link>
            </div>
          </div>
        </Route>
        <Route exact path='/exercise-one' component={ ExerciseOne }/>
        <Route exact path='/exercise-one/readme' component={ ExerciseOneReadme }/>
        <Route exact path='/exercise-two' component={ ExerciseTwo }/>
        <Route exact path='/exercise-two/readme' component={ ExerciseTwoReadme }/>
      </Switch>
    </main>
  );
}

export default App;
