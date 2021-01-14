import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../Routes/About';
import Home from '../../Routes/Home';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DinnerSS from './images/Dinner_SS_Wheel.png';
import RecipeProject from './images/recipe-project-ss.png';
import BookmarkProject from './images/bookmark-project-ss.png';
import SBCMain from './images/mainPageSS.png';
import Context from '../../Context';
import Projects from '../../Routes/Projects';
import Contact from '../../Routes/Contact';
import './App.css';

class App extends React.Component {

  state = {
    projects: [
    {
      title: 'Freshlist Recipe Search',
      host: 'https://freshlist-recipe-search.vercel.app/',
      clientRepo: 'https://github.com/rhammock1/freshlist-recipe-search',
      serverRepo: '',
      description: 'App to search Freshlist’s recipes. Users can directly search through recipes or they can decide to filter by the course.',
      stack: 'JavaScript, React, HTML5, CSS3',
      img: RecipeProject,
      alt: 'Freshlist recipe app home page screen shot',
    },
    {
      title: 'Website Bookmark App',
      host: 'https://thinkful-ei-tiger.github.io/robert-hammock-bookmark-app/',
      clientRepo: 'https://github.com/thinkful-ei-tiger/robert-hammock-bookmark-app',
      serverRepo: '',
      description: 'App to add, edit, and delete website bookmarks. Bookmarks can be rated and expanded to see more details about it.',
      stack: 'JavaScript, JQuery, HTML5, CSS3, Webpack',
      img: BookmarkProject,
      alt: 'Bookmark app home page screen shot',
    },
    {
      title: `What's For Dinner`,
      host: 'https://whats-for-dinner-client.vercel.app/',
      clientRepo: 'https://github.com/rhammock1/whats-for-dinner-client',
      serverRepo: 'https://github.com/rhammock1/whats-for-dinner-server',
      description: 'App to help users decide what to do for dinner with the help of a fun spinning wheel. Users can filter by restaurants or recipes. Users can signup/login and save their own restaurants and recipes and can even mark favorites.',
      stack: 'JavaScript, React, Node.js, Express, PostgreSQL',
      img: DinnerSS,
      alt: 'What\'s For Dinner app home page screen shot',
    },
    {
      title: `Sports Biz Cares Fundraising Raffle`,
      host: 'https://sbc-fundraising-campaign.vercel.app',
      clientRepo: 'https://github.com/rhammock1/sbc-random-raffler',
      serverRepo: 'https://github.com/rhammock1/sbc-raffle-server',
      description: 'Sports Biz Cares is 501(c)(3) non-profit, whose mission is to create career opportunities for individuals that are passionate about sports and currently underrepresented in the sports business. This is a simple PERN app that enables Sports Biz Cares to upload a csv file and spin a wheel to randomly choose a winner for their raffles. The winner is randomly chosen based on the number of entries each person has according to the csv file. ',
      stack: 'JavaScript, React, Node.js, Express, PostgreSQL',
      img: SBCMain,
      alt: 'SBC fundraising raffle app home page screen shot',
    },
    ]
  }

  render() {
    const value = {
      projects: this.state.projects,
    }
    return (
      <Context.Provider value={value} >
        <Header />
        <main>
          <div className="big-container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Context.Provider>

      )
  }
}

export default App;