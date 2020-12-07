import axios from 'axios'

const axiosConfig = {
    baseURL: 'https://api.unsplash.com/'
}

const client_id = process.env.UNSPLASH_CLIENT_ID

export default async function(req, res) {
    const response = await axios.get(
        `photos/random?client_id=` + client_id + `&count=10`,
        axiosConfig
    )

    res.json(response.data)
}
