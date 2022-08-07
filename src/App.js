
import Header from './Modules/JS/Header/Header.js'
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
}  from 'react-router-dom';

import About from './Modules/JS/Pages/About.js'
import Contact from './Modules/JS/Pages/Contact.js'
import Home from './Modules/JS/Pages/Home.js'
import Services from './Modules/JS/Pages/Services.js'
import Complaint from './Modules/JS/Pages/Complaint.js'

function App() {
  return (

    // <Header />
    
    // <Router>
    //   <Header />
    //   <main>
    //     <Routes>
    //       <Route path='/' exact>
    //         <Home/>
    //       </Route>
    //       <Route path='/services' exact>
    //         <Services/>
    //       </Route>
    //       <Route path='/complaint' exact>
    //         <Complaint/>
    //       </Route>
    //       <Route path='/about' exact>
    //         <About/>
    //       </Route>
    //       <Route path='/contact' exact>
    //         <Contact/>
    //       </Route>
    //       <Navigate to = '/' />
    //       </Routes>
    //   </main>
    // </Router>

    <Header/>
    
  );
}

export default App;
