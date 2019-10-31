import React, {Component} from 'react'

class Post extends Component {
  render() {
    return (
      <article key={this.props.id} className="post">
        <strong className="titulo">{this.props.titulo}</strong>
        <img src={this.props.capa} className="capa"/>
        <p className="subtitulo">{this.props.subtitulo}</p>
        <a href="#!" className="botao">Acessar</a>
      </article>
    )
  }
}

export default Post