import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeState from "./context/themes/themeState";

import Home from './components/home/home';
import AboutMe from './components/aboutme/aboutMe';
import Skill from './components/skill/skill';
import Jobs from './components/jobs/jobs';
import Footer from './components/footer/footer';


function App() {
  return (
    <ThemeState>
      <Router>
        <Header />
        
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/about-me' component={AboutMe} />
            <Route path='/skill' component={Skill} />
            <Route path='/jobs' component={Jobs} />
            <Route path="*" component={Home}/>
        </Switch>

        <Footer />
      </Router>
    </ThemeState>
  );
}

export default App;
