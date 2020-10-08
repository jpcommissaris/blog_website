import fetch from 'isomorphic-fetch'
import {API} from '../config'

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
    const data = {limit: limit, skip: skip}
    return fetch(`${API}/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

export const singleBlog = slug => {
    return fetch(`${API}/blog/${slug}`, {
        method: 'GET'
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

export const listRelatedBlogs = (blog) => {
    return fetch(`${API}/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}

export const listBlogs = () => {
    return fetch(`${API}/blogs`, {
        method: 'GET'
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}


