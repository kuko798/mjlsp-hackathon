import React, { useState, useEffect } from 'react';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedSports, setSelectedSports] = useState([]);
  const [user, setUser] = useState(null); // Track the authenticated user

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user when the authentication state changes
    });
    return unsubscribe; // Cleanup the listener on component unmount
  }, []);

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

  // Firebase Google Login method
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setShowLoginModal(false);  // Close modal after login
    } catch (error) {
      console.error("Error during login: ", error.message);
    }
  };

  // Firebase Sign-out method
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during sign out: ", error.message);
    }
  };

  return (
    <div>
      {/* 1) Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>RecSearch 🤾‍♂️</div>
        <div>
          {/* Display the appropriate button based on user authentication status */}
          {user ? (
            <button style={styles.navButton} onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <button style={styles.navButton} onClick={handleLoginClick}>
              Login
            </button>
          )}
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
          <div style={styles.sidebarContent}>
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
      {showLoginModal && !user && (
        <LoginModal onClose={handleCloseModal} handleGoogleLogin={handleGoogleLogin} />
      )}
    </div>
  );
}

/* --------------------------------------------- */
/* Login Modal Component                        */
/* --------------------------------------------- */
function LoginModal({ onClose, handleGoogleLogin }) {
  return (
    <div style={styles.modalBackdrop}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <div style={styles.loginForm}>
          <button
            style={styles.submitButton}
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

/* Inline Styles */
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
  sidebarContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', // Align items to the start of the sidebar
    gap: '15px', // Add space between checkboxes
  },
  checkbox: {
    marginRight: '10px',
  },
  selectedSports: {
    marginTop: '20px',
    textAlign: 'left',
    padding: '0 20px',
  },
};

export default App;
