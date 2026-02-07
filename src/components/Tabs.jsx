import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/slices/searchSlice'
import MediaGrid from './MediaGrid'

const Tabs = () => {
  
  const tabs = ['photos','videos','gifs']

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)
  const query = useSelector((state)=>state.search.query)

  if(!query) return <div></div>

  return (
    <div className='p-10'>
      <div className='flex gap-10 mb-8'>
      {tabs.map((elem,idx)=>{
        return <button 
        className={`${(activeTab == elem ? 'bg-blue-600' : 'bg-gray-600')} px-5 py-2 rounded uppercase cursor-pointer active:scale-95 `}
         key={idx}
         onClick={()=>{
          dispatch(setActiveTabs(elem))
         }}
         >
          {elem}
          </button>
      })}

    </div>
      <MediaGrid activeTab={activeTab} query={query}/>
    </div>
  )
}

export default Tabs
