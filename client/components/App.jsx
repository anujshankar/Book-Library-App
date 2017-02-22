import React from 'react'
import BookList from './BookList.jsx'
import allBooks from '../allBooks.js'
import BookView from './BookView.jsx'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currBook: { author: '', title: '', description: '', src: '' },
      filter: allBooks
    }
  }

  updateView(view) {
    this.setState({ currBook: view })
  }

  getFilteredList(query) {
    const filtered = allBooks.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    )
    this.setState({ filter: filtered })
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
        <BookList books={this.state.filter} filterList={this.getFilteredList.bind(this)} update={this.updateView.bind(this)} />
        <BookView display={this.state.currBook} />
      </div>
    )
  }
}
