import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(function(){
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`)

            const response = await request.json();

            setArticle(response);
            setLoading(false);
        }
        getArticle()
    }, [params])

    return (
        <section>
           {loading ? <i>Tunggu ya sist...</i> : 
            <article key={article.id}>
            <h2>{article.title}</h2>
            <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
            <p> Source: {' '}
            <a href={article.url}>{article.newsSite}</a>
            </p>
            <img src={article.imageUrl} alt={article.title}/>
            <p>{article.summary}</p>
            
        </article>}
           
            
        </section>
    )
}