import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Blog from './Blog.jsx'
import Post from './Post.jsx'
import blogPosts from './blogPosts.js'
import './App.css'

function App() {
  const [state, setState] = useState({
        currentPost : null,
        postNb : 0
    });

  return (
    <>
      {
        state.currentPost === null && (
          <Blog posts={blogPosts} post={(postNb) => setState({currentPost: postNb})} />
        )
      }
      
      {
        state.currentPost !== null && (
          <Post post={blogPosts[state.currentPost]} accueil={() => setState({currentPost: null})} />
        )
      }
    </>
  )
}

export default App