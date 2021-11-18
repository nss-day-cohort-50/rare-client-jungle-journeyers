import React, { useContext, useRef } from "react"
import { useHistory } from "react-router"
import { PostContext } from "./PostProvider"
export const CreatePost = () =>{
    const {createPost} = useContext(PostContext)
    const title = useRef()
    const content = useRef()
    const history = useHistory()
    const buildObject = () => {
        return {
                "categoryId" : 1,
                "publicationDate": new Date().toISOString().slice(0,10),
                "title" : title.current.value,
                "content" : content.current.value, 
                "approved" :false
        }
    }
    return(
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">New Post</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  type="text" name="title" ref={title} className="form-control" placeholder="Title" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="article"> Article Content  </label>
                    <textarea rows="10" ref={content}cols="20"name="article" className="form-control" placeholder="Article Content" required />
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
                    <button className="btn btn-1  " type="submit" onClick={() => {
                        createPost(buildObject()).then( history.push("/mypost"))
                    }
                    }>Submit</button>
                </fieldset>
            </form>
    )
}