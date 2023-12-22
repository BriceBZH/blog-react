import { useState } from 'react'
import './Blog.css'

function Blog(props) {
    const blogPosts = props.posts;
    console.log(props.post);
    return (
        <>
            <h1>Le blog</h1>
            <ul>
                {
                   blogPosts.map((post, i) =>
                       <li key={i}>
                           <article>
                               <header>
                                   <figure>
                                       <img src={post.thumbnail} alt="Image aléatoire de démonstration"/>
                                   </figure>
                                   <h2>
                                       {post.title}
                                   </h2>
                               </header>
                               <section>
                                   <p>
                                       Par { post.expert }
                                   </p>
                                   <p>
                                       { post.excerpt }
                                   </p>
                               </section>
                               <footer>
                                   <button onClick={() => props.post(i)}>Lire l'article</button>
                               </footer>
                           </article>
                       </li>
                   )
                }
            </ul>
        </>
    )
}

export default Blog