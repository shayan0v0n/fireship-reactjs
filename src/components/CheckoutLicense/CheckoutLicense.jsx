import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../../control/actions';
import './CheckoutLicense.scss'

const CheckoutLicense = () => {
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
    <div className={currentMode ? 'checkout-license-dark' : 'checkout-license-light'}>
        <div>
            <span>You are purchasing Fireship.io PRO Monthly Membership 🔥</span>
            <hr style={{borderBottom: '1px dashed white'}} />
            <div className='text-start checkout-license__form'>
                <span>Credit Or Debit Card</span>
                <div>
                    <input type="text" placeholder='Card Number (Fake)' />
                </div>
                <button>PAY</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutLicense