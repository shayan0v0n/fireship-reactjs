import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tagsAction } from '../../apiControl/actions'
import SingleTags from '../../components/SingleTags/SingleTags'
import useDarkMode from '../../hooks/useDarkMode'

const Lessions = () => {
  const [theme] = useDarkMode()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(tagsAction())
  }, [])

  const tagsData = useSelector(state => state.tags)
  let tags = []
  if (!tagsData.loading) {
    for(let i = 0;i <= tagsData.tags.length-1;i++) {
      tags.push(tagsData.tags[i])
    }
  }

  return (
    <div className='my-5 container'>
      <h2 className={theme ? 'text-white my-5' : 'text-dark my-5'}>tags</h2>
        {tags.map(tag => (
          <SingleTags>{tag}</SingleTags>
        ))}
    </div>
  )
}

export default Lessions