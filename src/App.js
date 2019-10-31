import React, {Component} from 'react';

// Components
import Header from './components/Header'
import Post from './components/Post'

// Estilos
import './style.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nutri: []
    }

  }

  componentDidMount() {
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
    fetch(url).then((res) => {
      res
        .json()
        .then((json) => {
          let state = this.state

          state.nutri = json
          this.setState(state)
          // console.log(json)
        })
    })
  }

  render() {
    return (
      <div className="container">
        <Header nome="React Nutri"/> {this
          .state
          .nutri
          .map((item) => {
            return (
            <Post
              id={item.id}
              titulo={item.titulo}
              capa={item.capa}
              subtitulo={item.subtitulo}/>
              )})}
      </div>
    )
  }
}

export default App;