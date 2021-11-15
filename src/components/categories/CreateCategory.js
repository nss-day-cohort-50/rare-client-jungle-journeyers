import React, { useEffect, useState } from "react";
import "./CategoryProvider.css"
import { deleteCategory, getCategories, updateCategory, postCategory} from "./CategoryProvider";
import DeleteIcon from "@material-ui/icons/Delete"
import AddIcon from '@material-ui/icons/Add';

export const CategoryManager = () => {
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState ({})
    const [editMyCategory, setEditCategory] = useState(false)
    const [rend, setRend] = useState(0)

    console.log(rend)

    useEffect(() => {
        getCategories()
        .then(res => res.json())
        .then(categories => setCategories(categories))
        
    }, [, rend]
    )

    const setCategory = (event) => {
        let copy = {...newCategory }
        copy.label = event.target.value
        setNewCategory(copy)
    }

    const updateRender = () => {
        getCategories()
        .then(res => res.json())
        .then(categories => setCategories(categories))
    }

    const editCategory = (category) => {
        setEditCategory(true)
        const copy = { ...newCategory }
        copy.label = category.label
        copy.id = category.id
        setNewCategory(copy)
    }


    return (<>
        <h2>Category Manager</h2>
        <article className="category-manager">
            <section>
                <ul>
                    {categories?.map(category => {
                        return <li key={category.id}>
                            <div className="category-list-item">
                                {category.label}
                                <div>
                                    <button className="edit-delete"
                                        onClick={() => { 
                                            editCategory(category)
                                                 
                                        }
                                        }><AddIcon fontSize="large"/></button>
                                    <button className="edit-delete"
                                        onClick={() => {
                                            deleteCategory(category.id)
                                                .then(updateRender)
                                        }
                                        }><DeleteIcon fontSize="large"/></button>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </section>
            <section>
                <div className="new-category-form">
                    <fieldset>
                        <h3>Create a new category</h3>
                        <input type="text" placeholder="Add category"
                            value={newCategory.label}
                            onChange={setCategory} />
                        {editMyCategory ?
                            <><button className="submit-category"
                                onClick={() => updateCategory(newCategory)
                                    .then(updateRender)}>Update</button></>
                            : <><button className="submit-category"
                                onClick={() => {
                                    postCategory(newCategory)
                                        .then(updateRender)
                                }}>Create</button></>}
                        {editMyCategory ?
                            <><button className="submit-category"
                                onClick={() => setEditCategory(false)}>Cancel</button></>
                            : ""
                        }
                    </fieldset>
                </div>
            </section>
        </article>
    </>)
}




