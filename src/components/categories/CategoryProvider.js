export const getCategories = () => {
    return fetch('http://localhost:8088/categories')
}

export const updateCategory = (newCategory) => {
    return fetch(`http://localhost:8088/categories/${newCategory.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })
}

export const deleteCategory = (id) => {
    return fetch(`http://localhost:8088/categories/${id}`,
        { method: "DELETE" })
}

export const postCategory = (newCategory) => {
    return fetch('http://localhost:8088/categories', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCategory)
    })
}