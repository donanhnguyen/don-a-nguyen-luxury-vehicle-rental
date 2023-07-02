import Image from 'next/image'
import shofeurLogo from '../../images/shofeurlogo.jpg'
import 'tailwindcss/tailwind.css';


export default function Nav () {

    return (
        <div>
            <ul className="flex items-center bg-gray-800 w-screen">
                <li>
                    <Image src={shofeurLogo} alt="logo" />
                </li>
            </ul>
            
        </div>
    )

}