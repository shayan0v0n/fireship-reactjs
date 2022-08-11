import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Lessions from './containers/Lessions/Lessions';
import Courses from './containers/Courses/Courses';
import Tags from './containers/Tags/Tags';
import useDarkMode from './hooks/useDarkMode';
import License from './containers/License/License';
import './styles/app.scss'

const App = props => {
  const [theme] = useDarkMode()
  return (
    <div className={theme ? 'main-dark' : 'main-light'}>
        <Header />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/lessions' element={ <Lessions /> } />
          <Route path='/courses' element={ <Courses /> } />
          <Route path='/tags' element={ <Tags /> } />
          <Route path='/license' element={ <License /> } />
        </Routes>
      </main>
        <Footer />
    </div>
  )
}

export default App