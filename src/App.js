import React, { Component } from 'react';
import Header from './components/Header';
// import About from './components/About';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
 //import Footer from './components/Footer';
 import resumeData from './resumeData';
//import Cube from './components/Cube';
//import Layne from './components/Layne';

//import Spaceboxes from './components/Spaceboxes';

import LazyLayne from './components/LazyLayne';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/> */}
        <Header resumeData={resumeData}/>
        <LazyLayne/>
        {/* <div id="laynehead"><Layne resumeData={resumeData}/></div>
        <div id="Spaceboxes"><Spaceboxes/></div> */}
      </div>
    );
  }

}

export default App;