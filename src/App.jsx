import React, { Component } from 'react';
import "./App.css";
import Block from './Block';
import blocks from './block.json';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.handleclick = this.handleclick.bind(this);

    this.state = {
      activeIndex: null,
      activeChevron: '',
    };
  }


  handleclick = (itemsId) => {  
    return itemsId===this.state.activeIndex ? 
    this.setState({ activeIndex: null, activeChevron: ''}): 
    this.setState({ activeIndex: itemsId, activeChevron: 'active', });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-content'>
          <div className='App-content__left'>
            <div className='mask'><img src="images/Path Copy.png" alt='' /></div>
            <div className='mask2'><img src="images/Path Copy 3.png" alt='' /></div>
            <div className='mask3'><img src="images/Path Copy 3.png" alt='' /></div>
            <div className='mask4'><img src="images/mention_isometric 2.svg" alt='' /></div>
          </div>
          <div className='mask5'><img src="images/Group 6.svg" alt='' /></div>
          <div className='App-content__right'>
            <h1>FAQ</h1>
            {
              blocks.map((block) => <Block activeChevron={this.state.activeChevron} 
              isActive={this.state.activeIndex===block.id} 
              key={block.id} block={block} 
              handleclick={this.handleclick}/>)
            }
          </div>
        </div>
      </div>
    )
  }
}

