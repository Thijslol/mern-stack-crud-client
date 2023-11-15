import React from 'react';
import axios from 'axios';

const Example = ({ example, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/examples/delete/${example._id}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting example:', error);
    }
  };

  return (
    <tr>
      <td><h3>{example.name}</h3></td>
      <td><p>{example.description}</p></td>
      <td><p>{example.date.substring(0, 10)}</p></td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  );
};

export default Example;