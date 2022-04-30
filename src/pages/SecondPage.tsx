import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SecondPage extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
    }
    document.title = 'SecondPage'
  }

  render() {
    return (
      <>
        <main>
          <h2>Second Page</h2>
          <p>That feels like an existential question, don't you think?</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    )
  }
}

export default SecondPage
