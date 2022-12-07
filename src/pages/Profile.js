import { useEffect } from "react"

export default function Profile() {
    useEffect(function(){
        document.title = "Profile"
    }, [])
    
    return (
        <section className="section">
            <h1 className="section-title">Tentang Aku</h1>
            <p className="section-description">gak ada yang menarik tentang aku. aku cuma pengen belajar ngoding aja. aku tuh pengen jadi fe hehe. telat gak ya diumur aku yang segini. ah apalah arti usia. yang penting semangat belajar aku tetap ada hehe.</p>
        </section>
    )
}