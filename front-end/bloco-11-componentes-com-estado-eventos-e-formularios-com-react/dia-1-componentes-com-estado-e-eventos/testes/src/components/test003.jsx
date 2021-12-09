import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: this.props.count };
    this.add = this.add.bind(this);
  }

  add() {
    // this.setState({count: this.state.count + 1})
    this.setState(
      (state) => ({ count: this.state.count + 1 }),
      () => {
        localStorage.setItem('state', JSON.stringify(this.state));
      },
    );
  }
  // impede a atualização do componente
  // shouldComponentUpdate() {
  //   return false
  // }

  // Atualiza o estado do componente após a renderização
  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('state')));
  }

  // Executa uma ação quando o componente for removido
  // componentWillUnmount() { }

  render() {
    return (
      <>
        <h1>Counter: {this.state.count} </h1>
        <button onClick={this.add}>Add</button>
      </>
    );
  }
}

export default Counter;
