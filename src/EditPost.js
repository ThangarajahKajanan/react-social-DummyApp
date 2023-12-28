import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const EditPost = () => {
    const {posts, handleEdit, setEditTitle, setEditBody, editTitle, editBody} = useContext(DataContext)
    const {id} = useParams()
    const post = posts.find(post =>(post.id).toString()===id);

    useEffect(() => {
        if(post){ 
            setEditTitle(post.title); 
            setEditBody(post.body); 
        }
    }, [post, setEditBody, setEditTitle])
 
  return (
    <main className='NewPost'>
    {
    id && 
        <>        
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor='postTitle'>Title</label> 
            <input 
                type="text"
                required
                id="postTitle"
                value={editTitle}
                onChange={(e)=>setEditTitle(e.target.value)}
            />
            <label htmlFor='postBody'>Post :</label>
            <input 
                type="text"
                required
                id="postBody"
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}
            />
            <button 
                type='submit'
                onClick={()=>handleEdit(post.id)}
            > 
                update 
            </button>
        </form>
        </>
}
    </main>
  )
}

export default EditPost
