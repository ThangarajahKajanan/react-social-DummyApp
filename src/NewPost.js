import React, { useContext } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {
  const {postTitle, setPostTitle, postBody, setPostBody, handleSubmit} = useContext(DataContext)
  return (
    <main className='NewPost'>
      <h2>New Post</h2>

      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title</label> 
        <input 
          type="text"
          required
          id="postTitle"
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />

        <label htmlFor='postBody'>Body</label>
        <input 
          type='text'
          required
          id="postBody"
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
        />

        <button type='submit'> submit </button>

      </form>
    </main>
  )
}

export default NewPost
