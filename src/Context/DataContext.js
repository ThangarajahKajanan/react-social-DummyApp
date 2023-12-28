import { createContext, useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import {format} from "date-fns"
import api from "../api/posts"
import useWindowSize from "../Hooks/useWindowSize";
import useAxiosFetch from "../Hooks/useAxiosFetch";

const DataContext = createContext({})

export const DataProvider = ({children}) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const navigate = useNavigate()
    const {width} = useWindowSize()
    const { data, fetchError, isLoading} =  useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data)
    }, [data])
   
    // SEARCH
    useEffect(() => {
        const filteredResult = posts.filter( (post) => 
           ((post.body).toLowerCase()).includes(search.toLowerCase()) 
                            || 
           ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResult(filteredResult.reverse())
      }, [posts , search])

      // INSERT
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const id = posts.length ? posts[posts.length -1].id + 1 : 1
        const datetime = format( new Date(), 'MMMM dd, yyyy pp')
        const newPost = {id, title:postTitle, datetime:datetime, body:postBody}
        try {
          const response = await api.post("/posts", newPost)
          const insertAllPosts = [...posts, response.data]
          setPosts(insertAllPosts)
          setPostTitle('')
          setPostBody('')
          navigate('/')
        } catch (err) {
          console.log(`Error ${err.message}`)
        }
    }
      
    // DELETE 
    const handleDelete = async(id) => {
        try {
          await api.delete(`/posts/${id}`)
          const deletePost = posts.filter((post)=> post.id !== id  )
          setPosts(deletePost)  
          navigate('/')
        } catch (err) {
          console.log(`Error ${err.message}`)
        }
    }
    
    // EDIT
    const handleEdit = async (id) => {
        const datetime = format( new Date(), 'MMMM dd, yyyy pp')
        const updatePost = {id, title:editTitle, datetime:datetime, body:editBody}
        try {
          const response = await api.put(`/posts/${id}`, updatePost)
          setPosts ( posts.map( (post)=> post.id === id ? {...response.data} : post))
          setEditTitle('')
          setEditBody('')
          navigate('/')
        } catch (err) {
          console.log(`Error ${err.message}`)
        }
    } 

    return (
        <DataContext.Provider value={{
            width, search, setSearch,
            searchResult, fetchError, isLoading,
            postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
            posts, handleDelete,
            handleEdit, setEditTitle, setEditBody, editTitle, editBody
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext






/* width, search, setSearch,
searchResult, fetchError, isLoading,
postTitle, setPostTitle, postBody, setPostBody, handleSubmit,
posts, handleDelete,
handleEdit, setEditTitle, setEditBody, editTitle, editBody, */