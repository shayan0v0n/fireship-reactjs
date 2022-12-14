import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction, licensesAction, tweetsAction } from '../../control/actions'
import TwitterPeople from '../../components/TwitterPeople/TwitterPeople'
import SingleLicense from '../../components/SingleLicense/SingleLicense'
import CheckoutLicense from '../../components/CheckoutLicense/CheckoutLicense'
import './License.scss'
import Masonry from 'react-masonry-css'

const License = () => {
    const currentStorage = JSON.parse(localStorage.getItem('theme'))
    const darkModeData = useSelector(state => state.darkMode)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(licensesAction())
        dispatch(tweetsAction())
        dispatch(darkModeAction(currentStorage))
    }, [])
    
    let currentMode = false
    if (darkModeData) {
        currentMode = darkModeData.mode
    }
    const licensesData = useSelector(state => state.licenses)
    let licenses = []
    if (!licensesData.loading) {
        for(let i = 0;i <= licensesData.license.length -1;i++) {
            licenses.push(licensesData.license[i])
        }
    }

    const tweetsData = useSelector(state => state.tweets)
    const tweets = []
  
    if (!tweetsData.loading && tweetsData.tweets[0]) {
      for(let i = 0;i <= tweetsData.tweets.length - 1; i++) {
        tweets.push(tweetsData.tweets[i])
      }
    }

  return (
    <div className={currentMode ? 'container license-dark my-3' : 'container license-light my-3'}>
        <section>
            <div className='license-banner'>
                <h2>PRO</h2>
                <hr style={{borderBottom: '1px dashed white'}} />
            </div>
            <div>
                <Row>
                    { licenses.map(license => (
                        <Col sm={12} md={4}>
                            <SingleLicense licenseData={license} />
                            <button className='singleLicense w-100'>CHOOSE PLAN</button>
                        </Col>
                    )) }
                </Row>
            </div>
            <CheckoutLicense />
        </section>
        <section className='text-center mt-5'>
            <h2>WELCOME ABOARD!</h2>
            <span>WHAT OTHER PROFESSIONAL DEVS SAY ABOUT FIRESHIP CONTENT</span>
            <div className='mt-5 text-start'>
                <Masonry breakpointCols={{default: 3, 900: 2, 300: 1}} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {tweets.map(user => (
                        <div>
                            <TwitterPeople userData={user} />
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
        <section className='text-center my-5'>
            <h2>THE VIDEO TOUR</h2>
            <span>UNLIMITED ACCESS TO CONTENT FOR SERIOUS DEVELOPERS</span>
            <img src='./assets/imgs/pro.png' className='w-100 rounded mt-3 video-tour' />
        </section>
    </div>
  )
}

export default License