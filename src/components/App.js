import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LoginF from './LoginF';
import Adherent from './Adherents';
import MemberCreation from './MemberCreation';
import Articles from './Articles';
import ArticleCreation from './ArticleCreation';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginF} />
          <Route path="/home" />
          <Route exact path="/adherents" component={Adherent} />
          <Route exact path="/adherents/creation" component={MemberCreation} />
          <Route exact path="/adherents/:id" />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/creation" component={ArticleCreation} />
          <Route exact path="/articles/:id" />
          <Route exact path="/garden" />
          <Route path="/garden/:id" />
          <Route path="/garden/creation" />
          <Route path="/calendar" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
