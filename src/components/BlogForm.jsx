import { useState } from "react"

export default function BlogForm() {
	const [newPost, setNewPost] = useState({
		title: "", content: ""
	})

	function sendData(data) {
		const url = `http://localhost:8080/blog/add`
		fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		})

	}

	function handleChange(e) {
		const { name, value } = e.target
		setNewPost(state => ({ ...state, [name]: value }))
	}


	function handleSubmit(e) {
		e.preventDefault()
		sendData(newPost)
	}
	return <>


		<section className="p-6 text-gray-800">
			<form onSubmit={handleSubmit} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50">
				<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
				<div>
					<label htmlFor="name" className="block mb-1 ml-1">Name</label>
					<input id="name" name="title" type="text" placeholder="Your name" onChange={handleChange} required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-600 bg-gray-100" />
				</div>

				<div>
					<label htmlFor="message" className="block mb-1 ml-1">Message</label>
					<textarea id="message" name="content" required type="text" placeholder="Message..." onChange={handleChange} className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-green-600 bg-gray-100"></textarea>
				</div>
				<div>
					<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-600 focus:ring-green-600 hover:ring-green-600 text-gray-50">Send</button>
				</div>
			</form>
		</section>
	</>
}