import './App.css';
import { Route } from 'react-router-dom'
import Landing from './components/Landing'
import Home from './components/Home'
import GetGames from './components/GetGames';
import Footer from './components/Footer'
import AddVideoGame from './components/AddVideogame';
import GameDetail from './components/GameDetail';


function App() {
  return (
 
    <div className="App">
      <Route exact path='/'><Landing/></Route>
      <Route path='/home'><Home/></Route>
      <Route exact path='/home'><GetGames/></Route>
      <Route path='/home/addVideogame'><AddVideoGame/></Route>
      <Route path='/home'><Footer/></Route>
      <Route path='/home/GameDetail/:id' render={({match}) => <GameDetail id={match.params.id}/>}/>
    </div>
    
  );
}

export default App;
