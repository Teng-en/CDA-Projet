import { createContext, useState} from "react";

export const AuthContext = createContext()
export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);

    const signIn = async (mail, password) => {
        const response = await fetch('http://localhost:4005/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials : "include",
            body : JSON.stringify({
                mail,
                password
            })
        });

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "Erreur lors de la connexion");
        }

        const token = await response.json();
        setToken(token);
    };


    return (
        <AuthContext.Provider value={{ token, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};