import React from 'react'

export default class BookView extends React.Component {
  render () {
    console.log('hello ' ,this.props.display)
    return (
      <div className="book-view">
        <img src={this.props.display.src} />
        <p>{this.props.display.title}</p>
        <p>{this.props.display.author}</p>
        <p>{this.props.display.description}</p>
      </div>
    )
  }
}

BookView.defaultProps = { book: { author: '', description: '', title: '' } }
