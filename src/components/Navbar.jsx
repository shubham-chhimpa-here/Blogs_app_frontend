import { useState } from "react"
import { Link } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";

export default function Navbar({ setTheme, theme }) {

	const [toggle, setToggle] = useState(false);
	return <>
		<header className="p-4 dark:bg-gray-800 bg-white dark:text-gray-100 sticky top-0">
			<div className="container flex justify-between h-16 mx-auto">
				<Link aria-label="Back to homepage" to={'/'} className="flex items-center p-2 font-bold text-xl">
					<span>Sa</span>
					<span>Ya</span>
				</Link>
				<ul className="items-stretch hidden space-x-3 md:flex">

					{/* <li className="flex items-center px-4 -mb-1  dark:border-transparent">
						<Link to='/write'>write</Link>
					</li>
					<li className="flex items-center px-4 -mb-1  dark:border-transparent">
						<PrivateRoute />
					</li> */}
					<li className="flex items-center px-4 -mb-1  dark:border-transparent">
						<Link to='/'>Home</Link>
					</li>
					<li className="flex items-center px-4 -mb-1  dark:border-transparent">
						<Link to='/blog'>blog</Link>
					</li>


					{/* <button onClick={() => { setTheme(theme == "dark" ? "light" : "dark") }}>🕸</button> */}
				</ul>
				<div className="navparent md:hidden relative">
					<button
						onClick={() => {
							setToggle(toggle => !toggle)
						}}
						className="flex justify-end p-4 ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>

					<div className={`navtoggle ${toggle ? "block" : "hidden"} bg-white text-black fixed inset-0 z-50 rounded-2xl`}>
						<ul className=" space-y-3 p-4"
							onClick={() => {
								setToggle(toggle => !toggle)
							}}
						>

							{/* <li className="flex items-center px-4 -mb-1  dark:border-transparent">
								<Link to='/write'>write</Link>
							</li>
							<li className="flex items-center px-4 -mb-1  dark:border-transparent">
							<PrivateRoute />
							</li> */}
							<li className="flex items-center px-4 -mb-1  dark:border-transparent">
								<Link to='/'>Home</Link>
							</li>
							<li className="flex items-center px-4 -mb-1  dark:border-transparent">
								<Link to='/blog'>blog</Link>
							</li>

							{/* <button onClick={() => { setTheme(theme == "dark" ? "light" : "dark") }}>🕸</button> */}
						</ul>
					</div>
				</div>
			</div>
		</header>
	</>
}