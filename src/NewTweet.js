import React from 'react';

function NewTweet(props) {
    let tweet = {
        name: null,
        text: null
    }

    return (
        <div>
            <div>
                username
                <input type="text" onChange={data => tweet.name = data.target.value} />
            </div>
            <div>
                NewText
                <input type="text" onChange={data => tweet.text = data.target.value} />
            </div>
            <button onClick={() => props.click(tweet)}>
                submit
            </button>
        </div>
    )
}

export default NewTweet;