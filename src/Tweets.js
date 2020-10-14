import React from 'react';
import TweetList from './TweetList';

function Tweets(props) {
    return (
        <div>
            {props.tweets.map((data, index) => <TweetList tweet={data} key={index} />)}
        </div>
    )
}

export default Tweets;