import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost"
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route , Routes} from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./Context/DataContext";


function App() {

/* 
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

  */

/*   
// this code is re-placed by -> ' useAxiosFetch Hooks ' 
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/posts")
        setPosts(response.data)
      } catch (err) {
        if(err.response){
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }else{
          console.log(`Error ${err.message}`)
        }
      }
    }
//    (()=>fetch())() 
    fetch()
  }, []) */

/*   useEffect(() => {
    const filteredResult = posts.filter( (post) => 
       ((post.body).toLowerCase()).includes(search.toLowerCase()) 
                        || 
       ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResult(filteredResult.reverse())
  }, [posts , search]) 


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
  } */


  return (
    <div className="App">
      <DataProvider>
          <Header title="welcome guys"/>
          <Nav />
          <Routes>
              <Route path='/' element={ <Home />  } />
              <Route path="post">
                  <Route index element={ <NewPost /> } />
                  <Route path=":id" element={<PostPage />} />
              </Route>
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path='about' element={ <About /> } />
              <Route path='*' element={ <Missing /> } />
          </Routes>
          <Footer />
      </DataProvider>
    </div>
  );
}
export default App;







/* 

before edit

<div className="App">
<Header title="welcome guys" width={width}/>
<Nav 
  search={search} 
  setSearch={setSearch}
/>
<Routes>
  <Route path='/' element={ 
     <Home
     searchResult={searchResult}
         fetchError={fetchError}
         isLoading={isLoading}
  />  } />
  <Route path="post">
    <Route index element={ <NewPost 
      handleSubmit={handleSubmit}
      setPostTitle={setPostTitle}
      setPostBody={setPostBody}
      postTitle={postTitle}
      postBody={postBody}
    /> } />
    <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
  </Route>
  <Route path="/edit/:id" element={<EditPost  
              posts={posts}        
              handleEdit={handleEdit}
              setEditTitle={setEditTitle}
              setEditBody={setEditBody}
              editTitle={editTitle}
              editBody={editBody}
  />} />
  <Route path='about' element={ <About /> } />
  <Route path='*' element={ <Missing /> } />
</Routes>
<Footer />
</div> */