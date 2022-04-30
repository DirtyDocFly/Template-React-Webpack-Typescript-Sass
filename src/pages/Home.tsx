import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor ( props: any ) {
        super( props )
        this.state = {
            data: [],
        }
        document.title = 'Home'
    }

    render() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/secondpage">Second Page</Link>
                </nav>
            </>
        )
    }
}

export default Home
