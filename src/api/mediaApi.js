import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const GIFY_KEY = import.meta.env.VITE_GIFY_KEY
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY

export async function fetchPhotos(query,page=1,per_page=20) {
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization: `Client-ID ${UNSPLASH_KEY}`}
    })

    return res.data
}

export async function fetchVideos(query,page=1,per_page=15) {
    const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,page,per_page},
        headers:{Authorization: PEXEL_KEY}
    })

    return res.data
}

export async function fetchGIF(query,limit=20) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{q:query,
            limit:limit,
            api_key:GIFY_KEY
        }
    })

    return res.data
}