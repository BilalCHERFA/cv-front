import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
// import AdminList from './components/admin/AdminList';
import AboutMe from './components/about_me/AboutMe';
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact';
import Diplomas from './components/diplomas/Diplomas';
import Experience from './components/experience/Experience';
import Interests from './components/interests/Interests';
import NotFound from './components/not_found/NotFound';
import Skills from './components/skills/Skills';





function App() {
  return (
    <div className="App">
      {/* <AdminList /> */}
     
        <Switch>
          <Route path="/" exact component={AboutMe} />
          <Route path="/realisations" component={Achievements} />
          <Route path="/contact" component={Contact} />
          <Route path="/diplomes" component={Diplomas} />
          <Route path="/experience" component={Experience} />
          <Route path="/competences" component={Skills} />
          <Route path="/interets" component={Interests} />
          <Route component={NotFound} />
        </Switch>
     
    </div>
  );
}

export default App;
