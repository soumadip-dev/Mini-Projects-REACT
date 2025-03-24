import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/Eat-n-Split')({
  component: RouteComponent,
});

const initialFriends = [
  {
    id: 118836,
    name: 'Sumit',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -70,
  },
  {
    id: 933372,
    name: 'Sahil',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 200,
  },
  {
    id: 499476,
    name: 'Pratik',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

// Updated Style object with equal division
const styles = {
  app: {
    display: 'flex',
    height: '82.1vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f0f2f5',
  },
  sidebar: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    backgroundColor: 'white',
    overflowY: 'auto',
  },
  formContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: 'white',
    borderLeft: '1px solid #e0e0e0', // Visual separator
  },
  friendList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  friendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  friendImage: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    marginLeft: 'auto',
  },
  formAddFriend: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  formSplitBill: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    height: '100%',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '14px',
    marginBottom: '5px',
  },
  formTitle: {
    margin: '0 0 20px 0',
    color: '#333',
  },
  friendName: {
    margin: '0 0 5px 0',
    fontSize: '16px',
  },
};

// App
function RouteComponent() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleShowAddFriend() {
    setShowAddFriend(show => !show);
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div style={styles.app}>
      <div style={styles.sidebar}>
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onclick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <div style={styles.formContainer}>
        <FormSplitBill />
      </div>
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul style={styles.friendList}>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li style={styles.friendItem}>
      <img src={friend.image} alt={`${friend.name} profile picture`} style={styles.friendImage} />
      <div>
        <h3 style={styles.friendName}>{friend.name}</h3>
        {friend.balance < 0 && (
          <p style={styles.red}>
            {friend.name} owes you ₹{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p style={styles.green}>
            You owe {friend.name} ₹{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      </div>
      <Button>Select</Button>
    </li>
  );
}

function Button({ children, style, onclick }) {
  return (
    <button style={{ ...styles.button, ...style }} onClick={onclick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=');

  const handleSubmit = e => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48?u=');
  };
  return (
    <form style={styles.formAddFriend} onSubmit={handleSubmit}>
      <h3 style={styles.formTitle}>Add Friend</h3>
      <label style={styles.label}>👫 Friend Name</label>
      <input
        type="text"
        style={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />

      <label style={styles.label}>📸 Image URL</label>
      <input
        type="text"
        style={styles.input}
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form style={styles.formSplitBill}>
      <h2 style={styles.formTitle}>Split a bill with X</h2>
      <label style={styles.label}>💰 Bill Value</label>
      <input type="text" style={styles.input} />

      <label style={styles.label}> 🕴️Your expense</label>
      <input type="text" style={styles.input} />

      <label style={styles.label}>👫X's expense</label>
      <input type="text" style={styles.input} disabled />

      <label style={styles.label}>🤑 Who is paying the bill?</label>
      <select style={styles.input}>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
