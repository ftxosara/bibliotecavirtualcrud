import React, { useState } from 'react';
import libros from './BooksData';

function BookList() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('nombre');
  const [results, setResults] = useState(libros);

  const handleSearch = (event) => {
    event.preventDefault();
    const lowercasedQuery = query.toLowerCase();
    const filteredBooks = libros.filter((libro) =>
      libro[filter].toLowerCase().includes(lowercasedQuery)
    );
    setResults(filteredBooks);
  };

  return (
    <div>
      <section id="search">
        <h2>Buscar Libros</h2>
        <form id="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            id="search-input"
            placeholder="Buscar libros..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            id="search-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="autor">Autor</option>
            <option value="nombre">Nombre del Libro</option>
            <option value="tema">Palabra Clave</option>
            <option value="isbn">ISBN</option>
          </select>
          <button type="submit">Buscar</button>
        </form>
      </section>
      <section id="results">
        <h2>Resultados de la Búsqueda</h2>
        <div id="books-list">
          {results.map((libro, index) => (
            <div key={index} className="book-item">
              <h3>{libro.nombre}</h3>
              <p>Autor: {libro.autor}</p>
              <p>Género: {libro.genero}</p>
              <p>Tema: {libro.tema}</p>
              <p>ISBN: {libro.isbn}</p>
              <p>
                Ejemplares: {libro.ejemplares} (Disponibles: {libro.disponibles})
              </p>
              <p>Páginas: {libro.descripcion.paginas}</p>
              <p>Editorial: {libro.descripcion.editorial}</p>
              <p>Fecha de Publicación: {libro.descripcion.fechaPublicacion}</p>
              <p>Resumen: {libro.descripcion.resumen}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BookList;
