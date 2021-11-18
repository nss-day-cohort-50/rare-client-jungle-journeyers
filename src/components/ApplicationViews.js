import React from "react"
import { Route } from "react-router-dom"
import { CreateComment } from "./posts/CreateComment"
import { CreatePost } from "./posts/CreatePost"
// import { CreateCategory } from "./categories/CreateCategory"
import { MyPostList } from "./posts/PostList"
import { PostProvider } from "./posts/PostProvider"
import { TagList } from "./tags/tagList"
import { EditTag } from "./tags/EditTag"
import { EditPost } from "./posts/EditPost"
import { CategoryManager } from "./categories/CreateCategory"
import { AllPosts } from "./posts/AllPosts"

export const ApplicationViews = () => {
    return <>

    
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        
        <PostProvider>
                <Route exact path ="/mypost">
                    <MyPostList />
                </Route>
                <Route exact path ="/allPosts">
                    <AllPosts />
                </Route>
                
                <Route exact path ="/comments/:postId(\d+)">
                    <CreateComment />
                </Route>
                <Route path="/createpost">
                    <CreatePost />
                </Route>
                <Route path="/editpost/:postId(\d+)">
                    <EditPost />
                </Route>
        </PostProvider>
        <Route path="/tagManagement">
            <TagList/>
            
        </Route>
                <Route path="/categories">
                    <CategoryManager />
                </Route>
        <Route path="/editTag/:tagId(\d+)">
            <EditTag/>
            
        </Route>
        
        </main>
        
    </>
}
