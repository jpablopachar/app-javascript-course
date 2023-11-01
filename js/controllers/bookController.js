import { BookService } from '../services/bookService.js'

const bookService = new BookService()

export class BookController {
  async getBooks () {
    const books = await bookService.getBooks()

    const booksCard = document.getElementById('books-cards')

    booksCard.innerHTML = ''

    books.forEach((book) => {
      const div = document.createElement('div')

      div.className = 'animated fadeInRight'

      div.innerHTML = `
        <div class="card m-2">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${book.img}" class="img-fluid h-100 w-100" alt="" />
            </div>
            <div class="col-md-8">
              <div class="px-2">
                <header class="d-flex justify-content-between">
                  <h4 class="card-title">${book.title}</h4>
                  <a href="#" class="btn btn-danger delete" _id="${book.id}">Delete</a>
                </header>
                <p class="card-text">${book.author}</p>
              </div>
              <button _id="${book.id}" type="button" class="btn btn-primary edit">Editar</button>
            </div>
          </div>
        </div>
      `

      booksCard.appendChild(div)
    })
  }

  async addBook (book) {
    await bookService.postBook(book)

    this.clearBookForm()
    this.getBooks()
  }

  async updateBook (book) {
    await bookService.putBook(book)

    this.clearBookForm()
    this.getBooks()
  }

  async editBook (id) {
    const book = await bookService.getBook(id)

    if (book) {
      const bookForm = document.getElementById('book-form')

      const btnSubmit = document.getElementById('btn-submit')

      const btnCancel = document.getElementById('btn-cancel')

      bookForm.id.value = book.id
      bookForm.title.value = book.title
      bookForm.author.value = book.author
      bookForm.isbn.value = book.isbn
      bookForm.img.value = book.img

      btnSubmit.textContent = 'Actualizar Libro'
      btnCancel.classList.remove('d-none')
    }
  }

  async deleteBook (id) {
    await bookService.deleteBook(id)

    this.getBooks()
  }

  renderMessage (message, colorMessage, secondsToRemove) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const div = document.createElement('div')

    div.innerHTML = `
      <div class="alert alert-${colorMessage} alert-dismissible" role="alert">
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `

    alertPlaceholder.append(div)

    setTimeout(() => {
      const alert = document.querySelector('.alert')

      if (alert) alert.remove()
    }, secondsToRemove)
  }

  clearBookForm () {
    document.getElementById('id').value = ''
    document.getElementById('btn-submit').textContent = 'Agregar Libro'

    document.getElementById('book-form').reset()
    document.getElementById('title').focus()
    document.getElementById('btn-cancel').classList.add('d-none')
  }
}
