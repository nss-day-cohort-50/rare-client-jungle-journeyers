import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router";
import { CommentList } from "./CommentList";
export const CreateComment = () => {
    const [comment, setComment] = useState("")
    const[postComments, setPostComments] = useState([])
    const history = useHistory()
    const {postId} = useParams()
    const[bull, setBull] = useState({})

    const reRender = () => {
        const currentUser = localStorage.getItem("rare_user_id")
        return fetch(`http://localhost:8000/comments?post_id=${postId}`, {headers: {"Authorization": `Token ${currentUser}`} })
            .then(res => res.json())
            .then((data) => {
                setPostComments(data)
                setBull(data[0])
            })
    }
    useEffect (() => { 
        reRender()
    } , [])

    const postComment = () => {
        
        const commentObject = {
            post_id: postId,
            author_id: parseInt(localStorage.getItem("rare_user_id")),
            content: comment,
            created_on: Date.now()
        }
        
        setComment('')

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObject)
        }
        
        return fetch("http://localhost:8000/comments", fetchOption)
            .then(reRender)

}
    return (
    <>
    <h1>{bull?.post?.title}</h1>
    
{/* <h1>{postComments[1].post?.title}</h1> */}

    
        <fieldset>
            <label htmlFor="content"></label>
            <input onChange = {(event) => setComment(event.target.value)}
            type="text" name="firstName" className="form-control" placeholder="Type your comment here" value = {comment} required autoFocus />
        </fieldset>
        <fieldset style={{
                    textAlign: "center"
                }}>
            <button className="btn btn-1 btn-sep icon-send" type="submit" onClick={() => postComment()}>Submit comment</button>
        </fieldset>
    
    <div>{<CommentList postId={postId} comments = {postComments} reRender = {reRender}/>}</div>
    </>
    )
}