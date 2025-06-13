import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/Far-away')({
  component: RouteComponent,
});

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 1, packed: true },
];

function RouteComponent() {
  const [items, setItems] = useState(initialItems);
  return (
    <div style={styles.app}>
      <Logo />
      <Form setItems={setItems} items={items} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1 style={styles.logo}>🌴 Far Away 💼</h1>;
}

function Form({ setItems, items }) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { id: initialItems.length + 1, description, quantity, packed: false };
    setItems([...items, newItem]);
  };

  return (
    <form style={styles.addForm} onSubmit={handleSubmit}>
      <h3>What do you need for your trip? ✈️</h3>
      <div style={styles.formControls}>
        <select style={styles.select} value={quantity} onChange={e => setQuantity(e.target.value)}>
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
        />
        <button style={styles.button}>Add</button>
      </div>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div style={styles.list}>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  return <footer style={styles.stats}>💼 You have X items packed (X%)</footer>;
}

function Item({ item }) {
  return (
    <li
      style={{
        ...styles.item,
        ...(item.packed ? styles.packedItem : {}),
      }}
    >
      <span>
        {item.quantity} {item.description}
      </span>
      <button style={styles.deleteButton}>❌</button>
    </li>
  );
}

const styles = {
  app: {
    minHeight: '80vh',
    backgroundColor: '#f5f5f5',
    fontFamily: '"Quicksand", sans-serif',
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr auto',
  },
  logo: {
    textAlign: 'center',
    background: 'linear-gradient(to right, #1e3a8a, #172554)',
    color: 'white',
    fontFamily: '"Pacifico", cursive',
    fontSize: '2.25rem',
    padding: '1.5rem 0',
    margin: 0,
    letterSpacing: '1px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  addForm: {
    backgroundColor: '#f97316',
    padding: '1.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  formControls: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  select: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#facc15',
    color: '#1f2937',
    fontSize: '0.875rem',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 0 0 2px #eab308',
  },
  input: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#facc15',
    color: '#1f2937',
    fontSize: '0.875rem',
    minWidth: '200px',
    outline: 'none',
    boxShadow: '0 0 0 2px #eab308',
  },
  button: {
    padding: '0.5rem 1.5rem',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#22c55e',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  list: {
    backgroundColor: '#2563eb',
    color: '#facc15',
    padding: `4rem 0`,

    display: `flex`,
    justifyContent: `space-between`,
    flexDirection: `column`,
    gap: '3.2rem',
    alignItems: `center`,
  },
  stats: {
    backgroundColor: '#22c55e',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '1.5rem 0',
    color: 'white',
    fontSize: '1.125rem',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.25rem',
    margin: '0.5rem 0',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '0.5rem',
    width: '100%',
    maxWidth: '28rem',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  packedItem: {
    textDecoration: 'line-through',
    color: '#d1d5db',
    fontStyle: 'italic',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.25rem',
    transition: 'transform 0.2s ease',
    padding: 0,
    lineHeight: 1,
  },
};

// Add hover effects dynamically
styles.button[':hover'] = {
  backgroundColor: '#16a34a',
  transform: 'scale(1.05)',
};

styles.item[':hover'] = {
  backgroundColor: 'rgba(255,255,255,0.2)',
};

styles.deleteButton[':hover'] = {
  transform: 'scale(1.1)',
};
