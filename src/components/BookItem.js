import React, { useState } from 'react';

const BookItem = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id); // Suponiendo que cada libro tenga un id único
  };

  return (
    <div>
      <p>Nombre: {book.nombre}</p>
      <p>Autor: {book.autor}</p>
      {/* Mostrar más detalles del libro según sea necesario */}
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default BookItem;
