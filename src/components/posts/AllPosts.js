import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import "./post.css"
import { Link, useHistory } from "react-router-dom"
import DeleteIcon from "@material-ui/icons/Delete"
import SettingsIcon from "@material-ui/icons/Settings"
import AddIcon from '@material-ui/icons/Add';
export const AllPosts = () => {
    const {allPosts, fetchAllPosts, deletePost} = useContext(PostContext)
    const history = useHistory()
   
    useEffect(()=>{
        fetchAllPosts()
    },[])

    return <>
    {allPosts?.map((post)=>{
        return(
            <div className="post-container">
                <div className="post-head">
                    <h1>{post?.title}</h1>
                    <p>{post.publication_date}</p>
                </div>
                <div className="post-body">
                    <h3>{post.content}</h3>
                </div>
                <div className="post-footer">
                    <p>{post.user.first_name} {post.user.last_name}</p>
                    <div className="post-icons">
                        <p>number</p>
                        
                    </div>
                </div>
            </div>
        )
    })}
    </>
}