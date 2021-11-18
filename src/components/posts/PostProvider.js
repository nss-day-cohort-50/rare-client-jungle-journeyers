
import React,{ createContext, useState } from "react";
const api = "http://localhost:8000"
export const PostContext = createContext()

export const PostProvider = (props) => {
    const currentUser = localStorage.getItem("rare_user_id")
    const [myPost, setMyPost] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const getPost = (id) => {
        return fetch(`${api}/posts/${id}`)
            .then(res => res.json())
            
    }
    const fetchMyPost = () => {
        return fetch(`${api}/mypost`, {
            headers:{
                "Authorization": `Token ${currentUser}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                setMyPost(data)
            })
    }
    const fetchAllPosts = () => {
        return fetch(`${api}/posts`, {
            headers:{
                "Authorization": `Token ${currentUser}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                setAllPosts(data)
            })
    }
    const createPost = (object) => {
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${currentUser}`
            },
            body: JSON.stringify(object)
        }
        
        return fetch(`${api}/mypost`, fetchOption)
            
    }
    const deletePost = (id) =>{
        return (fetch(`${api}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    }))
    }
    const editPost = (id, object) => {
        const dataToSend = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)

        }
        return fetch(`${api}/posts/${id}`, dataToSend)
    }
    return (<PostContext.Provider value={{
        fetchMyPost, myPost, createPost,deletePost, getPost, editPost, fetchAllPosts, allPosts
    }}>{props.children}</PostContext.Provider>)
}