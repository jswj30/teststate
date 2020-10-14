import React from 'react';
import './App.css';
import NewTweet from './NewTweet';
import Tweets from './Tweets';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          name: 'Jung',
          text: 'Hello World.'
        },
        {
          name: 'Kim',
          text: 'I can do it!'
        }
      ]
    }
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  handleNewTweet(e) {
    this.setState({
      tweets: [...this.state.tweets, e]
    })
  }

  render() {
    return (
      <div>
        Tweet Test!
        <NewTweet click={this.handleNewTweet} />
        <ul>
          <Tweets tweets={this.state.tweets} />
        </ul>
      </div>
    );
  }

}

export default App;
