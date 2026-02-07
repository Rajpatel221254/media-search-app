import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import {fetchGIF, fetchPhotos, fetchVideos} from '../api/mediaApi'
import Photos from './Photos'
import Videos from './Videos'
import Gifs from './Gifs'
import { setError, setLoading, setResults } from '../redux/slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'

const MediaGrid = (props) => {

    const activeTab = props.activeTab
    const query = props.query
    const { results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()
    const [page, setPage] = useState('')

    useEffect(()=>{
        if(!query) return
        async function getData(){
            try{
                if(activeTab == 'photos'){
                dispatch(setLoading())
                setError(false)
                const {results} = await fetchPhotos(query)
                dispatch(setResults(results))
                setPage(<Photos results={results}/>)
            }
            else if(activeTab == 'videos'){
                dispatch(setLoading())
                const {videos} = await fetchVideos(query)
                dispatch(setResults(videos))
                setPage(<Videos results={videos}/>)
            }
            else{
                dispatch(setLoading())
                const {data} = await fetchGIF(query)
                dispatch(setResults(data))
                setPage(<Gifs results={data}/>)
            }
            }
            catch(err){
                dispatch(setError(err.message))
            }
        }

        getData()
    },[query,activeTab, dispatch])

    if(error) return <h1>Error..</h1>
    if(loading) return <Loader />

    return(
        <div>
            {page}
        </div>
    )
}

export default MediaGrid
