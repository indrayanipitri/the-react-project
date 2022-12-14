import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function(){
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if(!request.ok) {
                return setNotFound(true)
            }

            const response = await request.json();

            document.title = response.title
            setArticle(response);
            setLoading(false);
        }
        getArticle()
    }, [params])

    if (notFound) {
        return <h2>Engga ada artikel yang ditemukan. huhu</h2>
    }

    return (
        <section className="section">

           {loading ? <i>Tunggu ya sist...</i> : 
            <article key={article.id}>
            <h2 className="article">{article.title}</h2>
            <time className='article-time'>{new Date(article.publishedAt).toLocaleDateString()}</time>
            <div className="section-description">
                <p> Source: {' '}
                <a href={article.url}>{article.newsSite}</a>
                </p>
                <img src={article.imageUrl} alt={article.title}/>
                <p>{article.summary}</p>
            </div>
            
        </article>}
           
            
        </section>
    )
}