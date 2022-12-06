import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function() {
       async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')

            const response = await request.json()

            setArticles(response)
            setLoading(false)
            
       }
       getArticles();
    }, [])
 
    return (
        <section>
            <h1>Blog Page</h1>
            <p>berikut tulisan-tulisan yang aku buat ketika aku sedang sedih : </p>

            {loading ? <i> tunggu ya sist..</i> : <div>
            <p>-- eh tapi bohong hehe..</p>
            <ul>
            {articles.map(function(article) {
                return <article key={article.id}>
                    <li> 
                        <p>
                            <Link to={`/blog/${article.id}`}>{article.title}</Link>
                        </p>
                        <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                        
                    </li>
                </article>
            })}
            </ul>
                </div> }

            
        </section>
    )
}