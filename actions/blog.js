import fetch from 'isomorphic-unfetch'
import {API} from '../config'

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
    const data = {limit: limit, skip: skip}
    return fetch(`${API}/blogs/list`, {
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
    return fetch(`${API}/blogs/${slug}`, {
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

export const getLatestBlog = () => {
    return fetch(`${API}/blogs/latest`, {
        method: 'GET',
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




