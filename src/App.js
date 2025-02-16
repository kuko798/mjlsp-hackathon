// App.js
import React, { useState } from 'react'; 

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  // Handle the change for each checkbox
  const handleSportChange = (e) => {
    const sport = e.target.value;
    setSelectedSports((prevSelectedSports) => 
      prevSelectedSports.includes(sport)
        ? prevSelectedSports.filter(s => s !== sport)  // If it's already selected, remove it
        : [...prevSelectedSports, sport]  // Otherwise, add it to the list
    );
  };

  return (
    <div>
      {/* 1) Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>RecSearch 🤾‍♂️</div>
        <div>
          <button style={styles.navButton} onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </nav>

      {/* 2) Main Content */}
      <div className="App" style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <iframe
            src="https://www.google.com/maps/d/u/1/embed?mid=1iJryewAkJ6kcrgQwz5wP4f00yoBw_Lc&ehbc=2E312F&noprof=1"
            width="1000"
            height="800"
            style={{ border: 'none', borderRadius: '10px' }}
            allowFullScreen
            title="RecSearch"
          ></iframe>
        </div>

        {/* 3) Sidebar with Checkboxes */}
        <div style={styles.sidebar}>
          <h3>Choose Sports:</h3>
          <label>
            <input
              type="checkbox"
              value="Basketball"
              checked={selectedSports.includes('Basketball')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Basketball
          </label>
          <label>
            <input
              type="checkbox"
              value="Soccer"
              checked={selectedSports.includes('Soccer')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Soccer
          </label>
          <label>
            <input
              type="checkbox"
              value="Tennis"
              checked={selectedSports.includes('Tennis')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Tennis
          </label>
          <label>
            <input
              type="checkbox"
              value="Baseball"
              checked={selectedSports.includes('Baseball')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Baseball
          </label>
          <label>
            <input
              type="checkbox"
              value="Football"
              checked={selectedSports.includes('Football')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Football
          </label>
          <label>
            <input
              type="checkbox"
              value="Volleyball"
              checked={selectedSports.includes('Volleyball')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Volleyball
          </label>
          <label>
            <input
              type="checkbox"
              value="Climbing"
              checked={selectedSports.includes('Climbing')}
              onChange={handleSportChange}
              style={styles.checkbox}
            />
            Climbing
          </label>
        </div>

        {/* Display selected sports */}
        {selectedSports.length > 0 && (
          <div style={styles.selectedSports}>
            <h3>Selected Sports:</h3>
            <ul>
              {selectedSports.map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 4) Conditionally render the Login Modal */}
      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </div>
  );
}

/* --------------------------------------------- */
/* Login Modal Component
   Renders the backdrop + modal content         */
/* --------------------------------------------- */
function LoginModal({ onClose }) {
  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <LoginForm />
      </div>
    </div>
  );
}

/* --------------------------------------------- */
/* Login Form Component
   Simple username/password with local validation*/
/* --------------------------------------------- */
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please fill in both fields.');
      return;
    }

    // Dummy check
    if (username === 'user' && password === 'password') {
      setMessage('Login successful! 🎉');
    } else {
      setMessage('Invalid username or password. 🔑');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.loginForm}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <label>
        Username:
        <input
          style={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </label>
      <label>
        Password:
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </label>
      <button type="submit" style={styles.submitButton}>Log In</button>
      {message && <p style={styles.message}>{message}</p>}
    </form>
  );
}

/* --------------------------------------------- */
/* Inline Styles (for demo purposes)            */
/* --------------------------------------------- */
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#222',
    color: '#fff',
    padding: '0.5rem 1rem',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  navButton: {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    padding: '2rem',
    textAlign: 'center',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  input: {
    display: 'block',
    width: '100%',
    marginTop: '0.25rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    marginTop: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.75rem',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  message: {
    marginTop: '0.5rem',
    textAlign: 'center',
  },
  sidebar: {
    width: '200px',
    position: 'fixed',
    left: '0',
    top: '0',
    bottom: '0',
    padding: '1rem',
    backgroundColor: '#f5f5f5',
    borderRight: '2px solid #ccc',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  checkbox: {
    marginRight: '10px',
  },
  selectedSports: {
    marginTop: '20px',
    textAlign: 'left',
    padding: '0 20px',
  },
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align items to the start of the sidebar
    gap: '15px', // Add space between checkboxes
  },
};

export default App;
