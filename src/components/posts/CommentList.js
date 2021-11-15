import React, {useState, useEffect} from "react";

export const CommentList = ({postId, comments, reRender}) => {
    
   
    useEffect (() => {
        reRender()
    } , [])

    const deleteListItem = (id) => {
        
            return fetch(`http://localhost:8088/comments/${id}`, {
                method: "DELETE"
            }) 
            .then(() => {
                reRender()
            })
        }

    return(
        <>
            <h1>Comments</h1>
                <div>
                    {
                        comments?.map((comment) => {
                           
                        return (
                        <>
                            
                            <div>{comment.user.username}</div>
                            <div>{comment.content}</div><button onClick={() => deleteListItem(comment.id)}>Delete</button>
                        </>)}

                        )
                    }
                </div>
        </>
    )
}