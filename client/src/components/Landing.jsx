import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div>
            Welcome!
            <hr/>
            <Link to="/home"><button>Get started</button></Link>
        </div>
    )
}
