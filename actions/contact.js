import fetch from 'isomorphic-unfetch'
import {API} from '../config'

export const sendMail = (data) => {
    console.log(data)
    return fetch(`${API}/contact`, {
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