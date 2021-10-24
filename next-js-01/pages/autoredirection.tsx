import { useEffect } from "react"
import { useRouter } from "next/dist/client/router";

// pages/404.tsx
export default function AutoRedirection() {

    const router =  useRouter ();

    useEffect ( () => {
        setTimeout( () => {
            router.push('/');
            console.log('dipanggil setelah 2 detik')
        }, 2000);

    })
    return (
        <>
            <h1>Wait ...</h1>
        </>
    )
}