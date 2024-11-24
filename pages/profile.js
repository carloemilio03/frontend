import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [router]);

    if (!user) return <p>Cargando...</p>;

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(to right, #ff9966, #ff5e62)',
                fontFamily: 'Arial, sans-serif',
                color: 'white',
            }}
        >
            <div
                style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center',
                    maxWidth: '500px',
                    width: '100%',
                }}
            >
                <h1
                    style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                    }}
                >
                    Datos del Usuario
                </h1>
                <p
                    style={{
                        marginBottom: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    Nombre:{' '}
                    <span
                        style={{
                            fontSize: '16px',
                            fontWeight: 'normal',
                            color: 'rgba(255, 255, 255, 0.8)', // Blanco suave
                        }}
                    >
                        {user.firstName}
                    </span>
                </p>
                <p
                    style={{
                        marginBottom: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    Apellido:{' '}
                    <span
                        style={{
                            fontSize: '16px',
                            fontWeight: 'normal',
                            color: 'rgba(255, 255, 255, 0.8)', // Blanco suave
                        }}
                    >
                        {user.lastName}
                    </span>
                </p>
                <div>
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${user.photo}`}
                        alt="Foto de perfil"
                        style={{
                            display: 'block',
                            maxWidth: '100%',
                            height: 'auto',
                            borderRadius: '10px',
                            border: '3px solid white',
                            margin: '0 auto',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
