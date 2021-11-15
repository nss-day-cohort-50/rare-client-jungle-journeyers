import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router"
import { PostContext } from "./PostProvider"
export const EditPost = () =>{
    const {getPost, editPost} = useContext(PostContext)
    const {postId} = useParams()
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const history = useHistory()
    const buildObject = () => {
        return {
                "user_id" : parseInt(localStorage.getItem("rare_user_id")),
                "category_id" : 1,
                "publication_date": post.publication_date,
                "title" : title,
                "content" : content 
        }
    }
    useEffect(() => {
        console.log(postId)
        getPost(postId).then((data) => setPost(data))
    },[])
    useEffect(() => {
        setTitle(post.title)
        setContent(post.content)
    },[post])
    return(
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  type="text" name="title"  className="form-control" placeholder="Title" value={title}required autoFocus onChange={(event)=>{
                        setTitle(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="iamgeurl"> Image URL </label>
                    <input type="text" name="iamgeurl" className="form-control" placeholder="URL" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="article"> Article Content  </label>
                    <textarea rows="10" cols="20"name="article" className="form-control" placeholder="Article Content" value={content}required onChange={(event)=>{
                        setContent(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>
                    <select>
                        <option>Select a Category</option>
                    </select>
                </fieldset>
                <fieldset>
                    <input type="checkbox"/>Tag
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1  " type="submit" onClick={()=>{
                        editPost(post.id, buildObject()).then(history.push("/mypost"))
                    }}
                    >Save Edits</button>
                </fieldset>
            </form>
    )
}