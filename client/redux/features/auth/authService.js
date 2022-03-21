const API_URL = process.env.BACKEND_URL;
import { registerUser, loginUser } from "../../../pages/api/users";

// Register user
const register = async (userData) => {
    // We need to post our user data to make sure the login is correct
    const ac = new AbortController();
    const response = await registerUser(userData, ac.signal);
    // Get the object back
    const result = await response.json();
    if (result) {
        // Set the localstorage user to the login result
        // This will include our token
        localStorage.setItem('user', JSON.stringify(result));
    }
    return result;
}

// Register user
const login = async (userData) => {
    // We need to post our user data to make sure the login is correct
    const ac = new AbortController();
    const response = await loginUser(userData, ac.signal);
    // Get the object back
    const result = await response.json();
    if (result) {
        // Set the localstorage user to the login result
        // This will include our token
        localStorage.setItem('user', JSON.stringify(result));
    }
    return result;
}

const logout = async () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout, 
    login
}

export default authService;