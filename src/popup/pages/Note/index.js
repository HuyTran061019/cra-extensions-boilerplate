import React from 'react'
import { Link } from 'react-router-dom'

function Note() {
    return (
        <div>
            <h2>This is my note</h2>
            <p>This is another line !</p>
            <Link to="/">
                <button> Back to homepage </button>
            </Link>
            <a href="http://www.google.com" target="_blank">Example</a>
        </div>
    )
}

export default Note