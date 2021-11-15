import React, { useState, useEffect } from "react"
import { TagList } from "./tagList"



const CreateTag = ({reRender}) => {
    const [tag, changeTag] = useState({
        label: ''
    })
    
 

    const saveTag = (event) => {
        
        event.preventDefault()
        const newTag = {
            label: tag.label

        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTag)
        }

        return fetch("http://localhost:8088/tags", fetchOption).then(()=>{
            tag.label = ""
        })

    }
    return (
        <>
            <div className="tag-form">
                <form class="tag-form-group">
                    <h2>Create a Tag</h2>
                    {/* <label htmlFor="description">title</label> */}
                    <input type="text" value={tag.label} name="title" className="form-control" placeholder=" Tag Title" required autoFocus
                        onChange={
                            (event) => {
                                const copy = { ...tag }
                                copy.label = event.target.value
                                changeTag(copy)
                            }
                        } />

                    <button className="form-button" onClick={(e)=>{saveTag(e).then(reRender)}}>Create</button>
                </form>
            </div>
        </>
    )

}

export default CreateTag