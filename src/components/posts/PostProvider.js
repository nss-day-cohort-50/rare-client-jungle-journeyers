
import React,{ createContext, useState } from "react";
const api = "http://localhost:8088"
export const PostContext = createContext()

export const PostProvider = (props) => {
    const currentUser = parseInt(localStorage.getItem("rare_user_id"))
    const [myPost, setMyPost] = useState([])
    const getPost = (id) => {
        return fetch(`${api}/posts/${id}`)
            .then(res => res.json())
            
    }
    const fetchMyPost = () => {
        return fetch(`${api}/posts?user_id=${currentUser}`)
            .then(res => res.json())
            .then((data) => {
                setMyPost(data)
            })
    }
    const createPost = (object) => {
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        
        return fetch(`${api}/posts`, fetchOption)
            
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
        fetchMyPost, myPost, createPost,deletePost, getPost, editPost
    }}>{props.children}</PostContext.Provider>)
}