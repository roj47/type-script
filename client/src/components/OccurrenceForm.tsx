import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface OccurrenceFormProps {
  addOccurrence: (occurrence: any) => void;
}

const OccurrenceForm: React.FC<OccurrenceFormProps> = ({ addOccurrence }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newOccurrence = { title, description };
    axios.post('/api/occurrences', newOccurrence)
      .then(response => {
        addOccurrence(response.data);
        setTitle('');
        setDescription('');
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Occurrence</button>
    </form>
  );
};

export default OccurrenceForm;
