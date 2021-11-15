import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


export const EditTag = () => {

    const [tag, changeTag] = useState({
        label: ''
    })

    const {tagId} =useParams()
    const history = useHistory()

    useEffect(
        ()=>{
            fetch(`http://localhost:8088/tags/${tagId}`)
            .then(res=> res.json())
            .then((data)=>{
                changeTag(data)
            })
        },[]
    )

    const saveEditTag = (event)  =>{
        event.preventDefault()
        const newEditTag  = {
            id: tag.id,
            label:tag.label
        }

        const fetchOption ={
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEditTag)
        }
        return fetch(`http://localhost:8088/tags/${tagId}`, fetchOption)
        .then(()=>{
            history.push('/tagManagement')
        })
    }
    return (
        <>
            <div className="tag-form">
                <form class="tag-form-group">
                    <h2>Edit Tag</h2>

                    <input type="text" value={tag.label}name="title" className="form-control" placeholder=" Tag Title" required autoFocus 
                    onChange={
                        (event) =>{
                            const copy = { ...tag}
                            copy.label = event.target.value
                            changeTag(copy)
                        }
                    }/>

                    <button className="form-button" onClick={saveEditTag}> Save Tag</button>
                    <button className="form-button" onClick={()=>{history.push('/tagManagement')}}> Back</button>
                </form>
            </div>
        </>
    )
}