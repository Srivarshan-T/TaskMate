import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Start from "./pages/Start"
import Todo from './pages/Todo'
function App() {

  return( <Router>
    <Routes>
      <Route path="/" element={<Start/>}/> 
      <Route path="/todo" element={<Todo/>}/>
 
    </Routes>
  </Router>);
}

export default App
