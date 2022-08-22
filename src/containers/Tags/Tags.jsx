import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { tagsAction } from '../../apiControl/actions'
import SingleTags from '../../components/SingleTags/SingleTags'
import TagsPlaceholder from '../../components/UI/TagsPlaceholder/TagsPlaceholder'
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
      { !tagsData.loading ? (
        tags.map(tag => (
          <SingleTags>{tag}</SingleTags>
        ))
        ) : (
        <Row>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <Col sm={12} md={2}><TagsPlaceholder /></Col>
            ))
          }
        </Row>
      ) }
    </div>
  )
}

export default Lessions