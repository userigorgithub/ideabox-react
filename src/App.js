import React, { Component } from 'react';
import Ideas from './Ideas';
import IdeasForm from './IdeasForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    }
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  }

  deleteIdea = (id) => {
    console.log(id);
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({ ideas: filteredIdeas });
  }

  render() {
    return(
      <main className='App'>

        <h1>IdeaBox React</h1>

        <IdeasForm
          addingIdea={this.addIdea}
        />

        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}

        <Ideas
          allIdeas={this.state.ideas}
          deletingIdea={this.deleteIdea}
        />

      </main>
    )
  }
}

export default App;
