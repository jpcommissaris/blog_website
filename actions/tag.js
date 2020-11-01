import fetch from 'isomorphic-fetch'
import {API} from '../config'
import slugify from 'slugify'


export const getTags = () => {
    return fetch(`${API}/tags`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}
export const singleTag = (slug) => {
    return fetch(`${API}/tag/${slug}`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}
