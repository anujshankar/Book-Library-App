import React from 'react'

export default class Book extends React.Component {
  updateBookView() {
    const currBook = { author: this.props.author, title: this.props.title, description: this.props.description, src: this.props.src }
    console.log('currbook: ', currBook)
    this.props.update(currBook)
  }

  render() {
    return (
      <div className="book-preview">
        <div className="book-preview-img">
          <img src={this.props.src} onClick={this.updateBookView.bind(this)} />
        </div>
        <div className="book-preview-details">
          <a>{this.props.title}</a>
          <p>Author: {this.props.author}</p>
        </div>
      </div>
    )
  }
}
