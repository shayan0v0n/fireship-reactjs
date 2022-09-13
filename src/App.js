import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Lessions from './containers/Lessions/Lessions';
import Courses from './containers/Courses/Courses';
import Tags from './containers/Tags/Tags';
import License from './containers/License/License';
import SingleLesson from './containers/SingleLesson/SingleLesson';
import SingleCourse from './containers/SingleCourse/SingleCourse';
import SingleTag from './containers/SingleTag/SingleTag';
import Dashboard from './containers/Dashboard/Dashboard';
import CartDashboard from './containers/Dashboard/CartDashboard/CartDashboard';
import ProfileDashboard from './containers/Dashboard/ProfileDashboard/ProfileDashboard';
import ProductsDashboard from './containers/Dashboard/ProductsDashboard/ProductsDashboard';
import NotFound from './containers/NotFound/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { darkModeAction } from './control/actions';
import './styles/app.scss'

const App = props => {
  const currentStorage = JSON.parse(localStorage.getItem('theme'))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(darkModeAction(currentStorage))
  }, [])

  const darkModeData = useSelector(state => state.darkMode)

  let currentMode = false
  if (darkModeData) {
    currentMode = darkModeData.mode
  }
  
  return (
    <div className={currentMode ? 'main-dark' : 'main-light'}>
        <Header />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/lessons' element={ <Lessions /> } />
          <Route path='/lessons/:path' element={ <SingleLesson /> } />
          <Route path='/courses' element={ <Courses /> } />
          <Route path='/courses/:path' element={ <SingleCourse /> } />
          <Route path='/tags' element={ <Tags /> } />
          <Route path='/tags/:path' element={ <SingleTag /> } />
          <Route path='/license' element={ <License /> } />
          <Route path='/dashboard/*' element={ <Dashboard /> } />
          <Route path='/dashboard/cartDashboard' element={ <CartDashboard /> } />
          <Route path='/dashboard/profileDashboard' element={ <ProfileDashboard /> } />
          <Route path='/dashboard/productsDashboard' element={ <ProductsDashboard /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </main>
        <Footer />
    </div>
  )
}

export default App