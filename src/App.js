import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upload from './Upload'
import ImageList from './imageList';
import { useState } from "react";



function App() {
  const [list, setList] = useState('');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Upload setList={setList}/>
        </Route>
        <Route exact path="/list">
          <ImageList  list={list}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
