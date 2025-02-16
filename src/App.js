// App.js
import React, { useState } from 'react'; 

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedSport, setSelectedSport] = useState('');

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleSportChange = (e) => {
    setSelectedSport(e.target.value); 
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

      {/* 2) Main Content (da map) */}
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

      {/* 3) Drop down menu */}
      <div style={{ marginTop: '20px' }}>
          <label htmlFor="sports-dropdown" style={styles.label}>
            Choose a Sport:
          </label>
          <select
            id="sports-dropdown"
            value={selectedSport}
            onChange={handleSportChange}
            style={styles.select}
          >
            <option value="">Select Sport</option>
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Tennis">Tennis</option>
            <option value="Baseball">Baseball</option>
            <option value="Football">Football</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Climbing">Climbing</option>
          </select>
          {selectedSport && <p style={styles.selectedSport}>You selected: {selectedSport}</p>}
        </div>
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
};

export default App;
