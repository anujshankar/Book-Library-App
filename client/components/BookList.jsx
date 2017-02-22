import React from 'react'
import Book from './Book.jsx'

export default class BookList extends React.Component {
  onFilter(e) {
    this.props.filterList(e.target.value)
  }

  render() {

    const bookList = this.props.books.map((item) => {
      return (<Book title={item.title}
        author={item.author}
        src={item.src}
        update={this.props.update}
        description={item.description}
      />)
    })

    return (
      <div className="book-list">
        <div className="search-bar">
          <input type="text" onChange={this.onFilter.bind(this)} />
        </div>
        <div>
          {bookList}
        </div>
      </div>
    )
  }
}
