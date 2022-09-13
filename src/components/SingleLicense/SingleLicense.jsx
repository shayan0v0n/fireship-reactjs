import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../../control/actions';
import './SingleLicense.scss'

const SingleLicense = props => {
    const { licenseData } = props;
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

    const licenseDescs = []
    if (licenseData.desc) {
      for(let i = 0;i <= licenseData.desc.length - 1;i++) {
        licenseDescs.push(licenseData.desc[i])
      }
    }

  return (
    <div className='text-center mt-5 single-license'>
        {currentStorage ? (
        <img src={`/assets/imgs/${licenseData.name}_icon-light.png`} />
        ) : (
        <img src={`/assets/imgs/${licenseData.name}_icon-dark.png`} />
        )}
        <h3 className='my-3'>{licenseData.name}</h3>
        <span><small>${licenseData.price}</small>/{licenseData.timeout}</span>
        <hr style={{borderBottom: '1px dashed white'}} />
        <ul>
            {licenseDescs.map(item => (
                <li>✅{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default SingleLicense