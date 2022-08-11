import useDarkMode from '../../hooks/useDarkMode';
import './SingleLicense.scss'

const SingleLicense = props => {
    const { licenseData } = props;
    const [theme] = useDarkMode() 

    const licenseDescs = []
    if (licenseData.desc) {
      for(let i = 0;i <= licenseData.desc.length - 1;i++) {
        licenseDescs.push(licenseData.desc[i])
      }
    }

  return (
    <div className='text-center mt-5 single-license'>
        {theme ? (
        <img src={`./assets/imgs/${licenseData.name}_icon-light.png`} />
        ) : (
        <img src={`./assets/imgs/${licenseData.name}_icon-dark.png`} />
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