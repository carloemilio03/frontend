import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/login'); // Redirige al login
    }, []);

    return null; // No muestra nada mientras redirige
}
