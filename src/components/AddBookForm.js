import React, { useState } from 'react';

const AddBookForm = ({ onAdd }) => {
  const [newBook, setNewBook] = useState({
    nombre: '',
    autor: '',
    genero: '',
    tema: '',
    isbn: '',
    ejemplares: 0,
    disponibles: 0,
    descripcion: {
      paginas: 0,
      editorial: '',
      fechaPublicacion: '',
      resumen: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newBook);
    setNewBook({
      nombre: '',
      autor: '',
      genero: '',
      tema: '',
      isbn: '',
      ejemplares: 0,
      disponibles: 0,
      descripcion: {
        paginas: 0,
        editorial: '',
        fechaPublicacion: '',
        resumen: ''
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="nombre" value={newBook.nombre} onChange={handleChange} />
      </label>
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default AddBookForm;
