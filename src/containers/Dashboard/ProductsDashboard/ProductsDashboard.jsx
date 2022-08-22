import { useState } from 'react'
import useDarkMode from '../../../hooks/useDarkMode'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'

const ProductsDashboard = () => {
  const [theme] = useDarkMode()
  const [show, setShow] = useState(true);
  return (
    <div className={theme ? 'dashboard-dark' : 'dashboard-light'}>
      <div>
        <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
        <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
      </div>
    </div>
  )
}


export default ProductsDashboard