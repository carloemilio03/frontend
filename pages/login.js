import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
                username,
                password,
            });
            localStorage.setItem('user', JSON.stringify(response.data.user));
            router.push('/profile');
        } catch (err) {
            setError('Credenciales incorrectas, intenta de nuevo.');
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: '26px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                    }}
                >
                    Iniciar Sesión
                </h1>
                <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                    <label
                        htmlFor="username"
                        style={{
                            display: 'block',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            marginBottom: '8px',
                        }}
                    >
                        Nombre de usuario:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '14px',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                    <label
                        htmlFor="password"
                        style={{
                            display: 'block',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            marginBottom: '8px',
                        }}
                    >
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '14px',
                        }}
                    />
                </div>
                {error && (
                    <p
                        style={{
                            color: 'red',
                            marginBottom: '15px',
                            fontSize: '14px',
                        }}
                    >
                        {error}
                    </p>
                )}
                <button
                    type="submit"
                    style={{
                        background: '#4facfe',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
