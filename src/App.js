import './App.css';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import {BrowserRouter as Router,Route} from "react-router-dom";
 

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact"  component={Contact}></Route>
        <Route path="/flat/:id"  component={FlatDetail}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
