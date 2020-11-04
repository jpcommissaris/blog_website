import fetch from 'isomorphic-unfetch'
import {API} from '../config'

export const listProjects = (skip, limit) => {
    const data = {limit: limit, skip: skip}
    return fetch(`${API}/projects/list`, {
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