import React, { useContext, useRef } from "react"
import { useHistory } from "react-router"
import { PostContext } from "./PostProvider"
export const CreatePost = () =>{
    const {createPost} = useContext(PostContext)
    const title = useRef()
    const content = useRef()
    const date = Date.now()
    const history = useHistory()
    const buildObject = () => {
        return {
                "user_id" : parseInt(localStorage.getItem("rare_user_id")),
                "category_id" : 1,
                "publication_date": date,
                "title" : title.current.value,
                "content" : content.current.value 
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
                    <label htmlFor="iamgeurl"> Image URL </label>
                    <input type="text" name="iamgeurl" className="form-control" placeholder="URL" required />
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