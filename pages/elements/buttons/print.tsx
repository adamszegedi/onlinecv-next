import {FaPrint} from 'react-icons/fa'

const print = () => {window.print()};

const PrintButton = () => {
  return <div className='flex flex-row items-center w-fit absolute top-0 right-0 vanish'>
      
      <button onClick={print}><FaPrint className='inline'/> Print</button>
  </div>
}

export default PrintButton;