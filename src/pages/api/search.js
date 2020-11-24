import axios from 'axios'

const axiosConfig = {
    baseURL: 'https://api.unsplash.com/photos/'
}

export default async function(req, res) {
    const response = await axios.get(
        `random?client_id=` + process.env.UNSPLASH_CLIENT_ID + `&count=10`,
        axiosConfig
    )

    res.json(response.data)
}
