import React from 'react';

function TweetList(props) {
    return (
        <div>
            <div>
                name: {props.tweet.name}
            </div>
            <div>
                text: {props.tweet.text}
            </div>
        </div>
    )
}

export default TweetList;