import { useState } from 'react'
import './Post.css'
import App from './App.jsx'

const Post = (props) => {
    return (
        <>
            <article className="post">
                <header>
                    <figure>
                        <img src={props.post.image} alt="image aléatoire de démonstration" />
                    </figure>
                    <h1>{props.post.title}</h1>
                </header>
                <section dangerouslySetInnerHTML={{ __html: props.post.content }}>
                </section>
                <footer>
                    <article>
                        <img src={props.post.profileImageURL} alt="Image de profil de Jean Dupont, Développeur React expérimenté" />
                        <p>{props.post.expert}</p>
                    </article>
                    <button onClick={() => props.accueil('null')}>Retour au blog</button>
                </footer>
            </article>
        </>
    )

};

export default Post;