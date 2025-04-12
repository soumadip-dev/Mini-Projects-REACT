import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/Far-away')({
  component: RouteComponent,
});

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

function RouteComponent() {
  const [items, setItems] = useState(initialItems);

  const handleSubmit = (description, quantity) => {
    const newItem = { id: items.length + 1, description, quantity, packed: false };
    setItems(items => [...items, newItem]);
  };

  const handleDelete = id => {
    setItems(items => items.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(items =>
      items.map(item => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  return (
    <div style={styles.app}>
      <Logo />
      <Form handleSubmit={handleSubmit} />
      <PackingList items={items} handleDelete={handleDelete} handleToggleItem={handleToggleItem} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <div style={styles.logoContainer}>
      <h1 style={styles.logo}>🌴 Far Away 💼</h1>
      <p style={styles.tagline}>Your Tropical Adventure Packing List</p>
    </div>
  );
}

function Form({ handleSubmit }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const onSubmit = e => {
    e.preventDefault();
    if (!description) return;
    handleSubmit(description, quantity);
    setDescription('');
    setQuantity(1);
  };

  return (
    <form style={styles.addForm} onSubmit={onSubmit}>
      <h3 style={styles.formTitle}>What do you need for your trip? ✈️</h3>
      <div style={styles.formControls}>
        <select
          style={styles.select}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          style={styles.input}
          placeholder="Item name..."
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button style={styles.button}>Add</button>
      </div>
    </form>
  );
}

function PackingList({ items, handleDelete, handleToggleItem }) {
  return (
    <div style={styles.listContainer}>
      <ul style={styles.list}>
        {items.map(item => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter(item => item.packed).length;
  const percentage = Math.round((numberOfPackedItems / numberOfItems) * 100) || 0;

  return (
    <footer style={percentage === 100 ? styles.statsComplete : styles.stats}>
      {percentage === 100
        ? 'You got everything! Ready to go ✈️'
        : `💼 You have ${numberOfItems} items on your list, and you already packed ${numberOfPackedItems} (${percentage}%)`}
    </footer>
  );
}

function Item({ item, handleDelete, handleToggleItem }) {
  return (
    <li style={item.packed ? { ...styles.item, ...styles.packedItem } : styles.item}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={styles.itemText}>
        {item.quantity} {item.description}
      </span>
      <button style={styles.deleteButton} onClick={() => handleDelete(item.id)}>
        ❌
      </button>
    </li>
  );
}

const styles = {
  app: {
    minHeight: '80vh',
    backgroundColor: '#f0f9ff',
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  logoContainer: {
    background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
    padding: '1.5rem',
    textAlign: 'center',
    color: 'white',
  },
  logo: {
    fontSize: '2.5rem',
    margin: 0,
    fontWeight: '800',
    letterSpacing: '-0.5px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  tagline: {
    margin: '0.5rem 0 0',
    fontSize: '1rem',
    fontWeight: '500',
    opacity: 0.9,
  },
  addForm: {
    backgroundColor: '#7dd3fc',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    color: '#083344',
  },
  formTitle: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: '600',
  },
  formControls: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  select: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#e0f2fe',
    color: '#075985',
    fontSize: '1rem',
    cursor: 'pointer',
    outline: 'none',
    fontWeight: '500',
    flexShrink: 0,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#e0f2fe',
    color: '#075985',
    fontSize: '1rem',
    width: '100%',
    outline: 'none',
    fontWeight: '500',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#f59e0b',
    color: '#78350f',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ':hover': {
      backgroundColor: '#d97706',
      color: 'white',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#e0f2fe',
    padding: '2rem',
    overflowY: 'auto',
    maxHeight: '400px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  stats: {
    backgroundColor: '#f59e0b',
    textAlign: 'center',
    fontWeight: '600',
    padding: '1.5rem',
    color: '#78350f',
    fontSize: '1rem',
  },
  statsComplete: {
    backgroundColor: '#10b981',
    textAlign: 'center',
    fontWeight: '600',
    padding: '1.5rem',
    color: 'white',
    fontSize: '1rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    ':hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  packedItem: {
    backgroundColor: '#f0fdf4',
    color: '#64748b',
    textDecoration: 'line-through',
  },
  itemText: {
    flex: 1,
    fontSize: '1rem',
    fontWeight: '500',
  },
  checkbox: {
    width: '1.25rem',
    height: '1.25rem',
    accentColor: '#10b981',
    cursor: 'pointer',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    color: '#ef4444',
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    borderRadius: '4px',
    ':hover': {
      backgroundColor: '#fee2e2',
      transform: 'scale(1.1)',
    },
  },
};
