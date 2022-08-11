import './CheckoutLicense.scss'
import useDarkMode from '../../hooks/useDarkMode'

const CheckoutLicense = () => {
  const [ theme ] = useDarkMode()
  
    return (
    <div className={theme ? 'checkout-license-dark' : 'checkout-license-light'}>
        <div>
            <span>You are purchasing Fireship.io PRO Monthly Membership 🔥</span>
            <hr style={{borderBottom: '1px dashed white'}} />
            <div className='text-start checkout-license__form'>
                <span>Credit Or Debit Card</span>
                <div>
                    <input type="text" placeholder='Card Number (Fake)' />
                </div>
                <button>PAY $25.00</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutLicense