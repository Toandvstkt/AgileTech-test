import { useState, useEffect } from 'react';
import { User } from '../types';
import styles from './UserFormModal.module.scss';

interface UserFormModalProps {
  onSubmit: (user: User | Omit<User, 'id'>) => void;
  onClose: () => void;
  initialData?: User;
}

const UserFormModal = ({ onSubmit, onClose, initialData }: UserFormModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setTags(initialData.tags.join(', '));
    } else {
      setTitle('');
      setDescription('');
      setTags('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      tags: tags.split(',').map((tag) => tag.trim()),
    };

    if (initialData?.id) {
      onSubmit({ ...formData, id: initialData.id });
    } else {
      onSubmit(formData);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <form onSubmit={handleSubmit} className={styles.modalForm}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma separated)"
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserFormModal;
