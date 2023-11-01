import './components/bookForm.js'
import { BookController } from './controllers/bookController.js'

document.addEventListener('DOMContentLoaded', () => {
  const bookController = new BookController()

  bookController.getBooks()
})

document.getElementById('books-cards').addEventListener('click', (event) => {
  const bookController = new BookController()

  if (event.target.classList.contains('delete')) {
    const id = event.target.getAttribute('_id')

    bookController.deleteBook(id)

    bookController.renderMessage('Libro eliminado correctamente', 'success', 3000)
  }

  if (event.target.classList.contains('edit')) {
    const id = event.target.getAttribute('_id')

    bookController.editBook(id)
  }

  event.preventDefault()
})
