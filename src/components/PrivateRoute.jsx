import { useState } from "react"
import { Link } from "react-router-dom"

export default function PrivateRoute() {
    const [state, setState] = useState(false)
    const [show, setShow] = useState(true)

    const handleClick = () => {
setShow(show => !show)
    }

    if(state) {
        return <>
        <Link to='/login'>Login</Link>
        </>
    }
    return <>
        <div className="flex space-x-5 cursor-pointer relative" >
            <img alt="" onClick={handleClick} className="w-12 h-12 rounded-full ring-2 ring-offset-4 bg-gray-500 ring-green-600 ring-offset-gray-100" src="https://source.unsplash.com/40x40/?portrait?1" />
           <ul className={`divide-y p-4 absolute top-full right-0 bg-white border rounded text-gray-900 ${show && 'hidden'}`}>
            <li>name</li>
            <li>
                <button onClick={() => setState(true)}>logout</button>
            </li>
           </ul>
        </div>
    </>
}