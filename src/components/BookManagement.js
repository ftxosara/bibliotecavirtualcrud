import React, { useState } from 'react';
import '../styles/Modal.css';

const BookManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [bookCopies, setBookCopies] = useState(1);
  const [bookAvailable, setBookAvailable] = useState(true);
  const [books, setBooks] = useState([
    { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", available: true, copies: 5 },
    { id: 2, title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez", available: false, copies: 3 },
    { id: 3, title: "La vorágine", author: "José Eustasio Rivera", available: true, copies: 7 },
  ]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleAddBook = () => {
    if (bookTitle.trim() !== '' && authorName.trim() !== '' && bookCopies > 0) {
      const newBook = { id: books.length + 1, title: bookTitle, author: authorName, available: bookAvailable, copies: bookCopies };
      setBooks([...books, newBook]);
      setBookTitle('');
      setAuthorName('');
      setBookCopies(1);
      setBookAvailable(true);
    }
  };

  const handleUpdateBook = (id) => {
    const newTitle = prompt('Ingrese el nuevo título');
    const newAuthor = prompt('Ingrese el nuevo autor');
    const newCopies = parseInt(prompt('Ingrese el nuevo número de ejemplares'), 10);
    const newAvailable = prompt('¿Está disponible? (sí/no)').toLowerCase() === 'sí';
    if (newTitle && newAuthor && newCopies > 0) {
      const updatedBooks = books.map(book =>
        book.id === id ? { ...book, title: newTitle, author: newAuthor, copies: newCopies, available: newAvailable } : book
      );
      setBooks(updatedBooks);
    }
  };

  const handleDeleteBook = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="book-management">
      <button className="admin-button" onClick={toggleModal}>Mostrar opciones de administrador</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Opciones de libros</h2>
            <table>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Autor</th>
                  <th>Disponible</th>
                  <th>Ejemplares</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.available ? 'Disponible' : 'No disponible'}</td>
                    <td>{book.copies}</td>
                    <td>
                      <button className="action-button" onClick={() => handleUpdateBook(book.id)}>Actualizar</button>
                      <button className="action-button" onClick={() => handleDeleteBook(book.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <input
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
              placeholder="Nombre del libro"
            />
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Nombre del autor"
            />
            <input
              type="number"
              value={bookCopies}
              onChange={(e) => setBookCopies(parseInt(e.target.value, 10))}
              placeholder="N° de ejemplares"
              min="1"
              className="small-input"
            />
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={bookAvailable}
                  onChange={(e) => setBookAvailable(e.target.checked)}
                />
                Disponible
              </label>
            </div>
            <button onClick={handleAddBook}>Agregar libro</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookManagement;
