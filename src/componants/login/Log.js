import React, { useState, useEffect } from 'react';
import createAuthProvider from './createAuthProvider'

const LoginComponent = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        password: ''
    });
    const onChange = ({ target: { name, value } }) => {
        setCredentials(Object.assign(Object.assign({}, credentials), { [name]: value }));
    };
    const onSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(token => createAuthProvider.login(token));
    };
    return React.createElement("form", { onSubmit: onSubmit },
        React.createElement("input", { name: "name", value: credentials.name, onChange: onChange }),
        React.createElement("input", { name: "password", value: credentials.password, onChange: onChange }));

};

export default LoginComponent