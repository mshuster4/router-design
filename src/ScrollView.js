import React, { Component } from 'react';
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar"
import { Element } from 'react-scroll'
import About from "./components/About";
import Contact from "./components/Contact";

class ScrollView extends Component {

 constructor(props) {    
    super(props);    
    this.state = {
      navClassName: "",
      itemClassName: "",
      color: "",
    }
    this.handleSetActive.bind(this)
  }

  handleSetActive = (to) => {
  console.log(to)
  if (to === "landing") {
    this.setState({
      navClassName: "nav-bg-1",
      itemClassName: "nav-item-1",
      color: "white",
    })
  }
  else if (to === "portfolio") {
    this.setState({
      navClassName: "nav-bg-2",
      itemClassName: "nav-item-2",
      color: "black",
    })
  }
 else if (to === "about") {
    this.setState({
      navClassName: "nav-bg-3",
      itemClassName: "nav-item-2",
      color: "black",
    })
  }
  else if (to === "contact") {
     this.setState({
      navClassName: "nav-bg-2",
      itemClassName: "nav-item-2",
      color: "black"
    })
  }
}

  render() {

    return (
      <div>
        <NavBar
          handleSetActive={this.handleSetActive}
          navClassName={this.state.navClassName}
          itemClassName={this.state.itemClassName}
          style={{ color: this.state.color }}
          src={this.state.logo}
        />
          <Landing/>
          <Portfolio/>
          <About/>
          <Contact/>
      </div>
      
    );
    }
  }

export default ScrollView;
