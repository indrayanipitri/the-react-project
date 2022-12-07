import { useEffect } from "react"

export default function Home() {
    useEffect(function(){
      document.title = "Home" 
    }, [])
    
    return (
        <section className="section">
            <h1 className="section-title">Hai Gaes!</h1>
            <p className="section-description">selamat datang di website sederhana aku.
                aku buat pakai reactjs nih.
                kamu mau liat2? silahkan.. :D
            </p>
        </section>
    )
}