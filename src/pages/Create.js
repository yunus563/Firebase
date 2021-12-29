import React, {useState, useEffect, useMemo} from 'react'
import classes from './pages.module.css'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firabase.config'


const Create = () => {
  const [todos, setTodos] = useState([])
  const [post, setPost] = useState({title:'', comment:''})
  const collectionRef = collection(db, "posts")

  async function CreatePost(e){
    e.preventDefault()
      await addDoc(collectionRef, {...post, author:auth.currentUser.displayName, authId: auth.currentUser.uid, img:auth.currentUser.photoURL})
      setPost({...post, title:'', comment:''})
      getPosts()
  }
  const getPosts = async () => {
    const getDb = await getDocs(collectionRef)
    setTodos(getDb.docs.map((doc) => ({...doc.data(), id:doc.id})))
  }
  const deletePost = async (id) => {
    const docId = doc(db,"posts", id)
    await deleteDoc(docId)
    getPosts()
  }
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <div className={classes.chat}>
        <h3>Live Chat</h3>
      {todos?.map((item) => {
        return(
          <div className={classes.users} key={item.id}>
            <h4 style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>{item.author} <div><img src={item.img} alt="img" /></div></h4>
            <span>Title:{item.title}</span>
            <span>Comment:{item.comment}</span>
           {auth.currentUser.uid.toString() === item.authId ? <button onClick={()=>deletePost(item.id)}>Delete</button> : ""}
          </div>
        )
      })}
      </div>
      <form className={classes.form_comment} onSubmit={CreatePost}>
        <h3>Create your post</h3>
        <input type="text" placeholder="Title" required value={post.title} onChange={(e)=> setPost({...post, title:e.target.value})}/>
        <input placeholder='Comment' required value={post.comment} onChange={(e)=> setPost({...post, comment:e.target.value})}></input>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Create
