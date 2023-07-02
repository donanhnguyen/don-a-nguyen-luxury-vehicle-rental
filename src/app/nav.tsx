import Image from 'next/image'
import shofeurLogo from '../../images/shofeurlogo.jpg'


export default function Nav () {

    return (
        <div>
             <ul className="flex items-center bg-gray-800 w-screen">
                <li><Image src={shofeurLogo} alt='logo'></Image></li>
            </ul>
            
        </div>
    )

}