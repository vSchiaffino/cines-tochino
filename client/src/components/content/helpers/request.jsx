import axios from "axios"
let backend_server = 'http://localhost:1500'


export async function request(method, path, headers = {}, data = ''){
    return new Promise((resolve, reject) => {
        axios( {method, url: `${backend_server}/${path}`, headers, data } )
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}