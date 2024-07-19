import React, { useState, createContext, useContext, useEffect } from "react";

const UsuarioContext = createContext();

export const UseUser = () => {
    return useContext(UsuarioContext);
}

export const UserProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(() => {
        // Recuperar el usuario del localStorage si existe
        const user = localStorage.getItem('usuario');
        return user ? JSON.parse(user) : null;
    });

    function login(datosUsu) {
        setUsuario(datosUsu);
        // Guardar el usuario en localStorage
        localStorage.setItem('usuario', JSON.stringify(datosUsu));
    }

    function logout() {
        setUsuario(null);
        // Eliminar el usuario del localStorage
        localStorage.removeItem('usuario');
    }

    return (
        <UsuarioContext.Provider value={{ usuario, login, logout }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContext;
