import React from 'react';
import './App.css';
import BookList from './BookList';
import BookManagement from './components/BookManagement';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="/images/book_logo.png" alt="Logo de la Biblioteca" />
          <h1>Consulta de Libros en la Biblioteca Virtual</h1>
        </div>
      </header>
      <main>
        <BookList />
        <BookManagement />
        <section id="cover">
          <h2>Libros Destacados</h2>
          <div className="cover-images">
            <img src="/images/cover1.jpg" alt="Libro 1" />
            <img src="/images/cover2.jpg" alt="Libro 2" />
            <img src="/images/cover3.jpg" alt="Libro 3" />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Biblioteca - Realizado por Osmar Jose Perez Ricardo</p>
      </footer>
    </div>
  );
}

export default App;
