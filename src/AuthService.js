// AuthService.js
import auth from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';

class AuthService {
  signUp = async (email, password) => {
    try {
      // ... (your signUp implementation)
    } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }
  };

  signIn = async (email, password) => {
    try {
      // ... (your signIn implementation)
    } catch (error) {
      console.error('Error signing in:', error.message);
      throw error;
    }
  };

  signOut = async () => {
    try {
      // ... (your signOut implementation)
    } catch (error) {
      console.error('Error signing out:', error.message);
      throw error;
    }
  };

  onAuthStateChanged = (callback) => {
    return onAuthStateChanged(auth, callback);
  };
}

const authService = new AuthService();
export default authService;
