import React from 'react'
const url= 'https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={url} alt="loading" />
        </div>
    )
}

export default Loading
