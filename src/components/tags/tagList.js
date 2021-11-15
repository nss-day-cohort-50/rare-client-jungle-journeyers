
import React, { useEffect, useState } from "react";
import './tag.css'
import CreateTag from "./CreateTag"
import { useHistory, Link } from "react-router-dom";

export const TagList = () => {

    const [tags, changeTag] = useState([])
const history = useHistory
    // useEffect(
    //     () => {
    //         fetch("http://localhost:8088/tags")
    //             .then(res => res.json())
    //             .then((ListArray) => {
    //                 changeTag(ListArray)
    //             })
    //     }, []
    // )
    const reRender = () => {

        return fetch("http://localhost:8088/tags")
            .then(res => res.json())
            .then((ListArray) => {
                changeTag(ListArray)

            })
    }
    useEffect(() => {
        reRender()
    }, [])

    const deleteTag = (id) => {
        fetch(`http://localhost:8088/tags/${id}`, {
            method: "DELETE"
        }).then(reRender)
    }
    return (
        <>
            <div className="tag-manager">

                <div className="tag-list">
                    <h2 className='tag-title'>Tags</h2>
                    {

                        tags.map(
                            (tag) => {
                                return <div className='tag' key={`tag--${tag.id}`}>
                                    <div className="tag-group">
                                        <div className='tag-edit-delete'>
                                           <Link to ={`/editTag/${tag.id}`}> <button >edit</button></Link>
                                            <button onClick={() => {
                                                deleteTag(tag.id)
                                                
                                            }}>delete</button>
                                        </div>
                                        <p>{tag.label}</p>

                                    </div>
                                </div>
                            }
                        )
                    }</div>
                <CreateTag reRender={reRender} />
                
            </div>


        </>
    )
}

