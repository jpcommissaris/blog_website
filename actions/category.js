import fetch from 'isomorphic-fetch'
import {API} from '../config'
import slugify from 'slugify'

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}
export const singleCategory = (slug) => {
    return fetch(`${API}/category/${slug}`, {
        method: 'GET',
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}
