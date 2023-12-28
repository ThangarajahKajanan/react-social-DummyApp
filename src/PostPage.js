import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const PostPage = () => {
  const {posts, handleDelete} = useContext(DataContext)
  const {id} = useParams()
  const post = posts.find((post) => (post.id).toString() === id  )

  return (
    <main className='PostPage'>
      <article className='post'>
        {
          post && <>
                    <h2>{post.title}</h2>
                    <p className='postDate'>{post.datetime}</p>
                    <p className='postBody'>{post.body}</p>
                    <Link to ={`/edit/${post.id}`}>
                      <button type='button'>Edit</button>
                    </Link>
                    <button type='button' onClick={()=>handleDelete(post.id)}>delete</button>
                  </>
        }
        {
          !post && <>
                    <h2>page not found</h2>
                    <p>visit our home page</p>
                   </>
        }
      </article>
    </main>
  )
}
export default PostPage
