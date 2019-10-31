import React, {Component} from 'react'

// Estilos
import './style.css'

class Header extends Component {
  render() {
    return (
      <header>
        <strong>{ this.props.nome }</strong>
      </header>
    )
  }
}

export default Header