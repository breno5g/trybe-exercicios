import React from "react"

class Test02 extends React.Component {

  render() {
    return (
      <>
        <header>
          <h1>{this.props.name}</h1>
          <ul>
            {this.props.links.map((link, index) => <li key={index}>{link}</li>)}
          </ul>
        </header>
      </>
    )
  }
}

export default Test02