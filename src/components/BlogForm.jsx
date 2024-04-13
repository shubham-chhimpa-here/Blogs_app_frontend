import { useState } from "react"
import {marked} from 'marked'

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
			<div className="flex gap-4">

			<form onSubmit={handleSubmit} className="container w-full  p-8 mx-auto  rounded-md shadow flex-1">
				
				<div>
					<input id="name" name="title" type="text" placeholder="Title" onChange={handleChange} required className="block w-full p-2  focus:outline-none   " />
				</div>

				<div>
					<textarea id="message" name="content" required type="text" placeholder="Message..." onChange={handleChange} className="block w-full p-2  autoexpand focus:outline-none  min-h-screen"></textarea>
				</div>
				<div>
					<button type="submit" className="w-full px-4 py-2 mt-6 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-green-600 focus:ring-green-600 hover:ring-green-600 text-gray-50">Send</button>
				</div>
			</form>
			
			<div className=" flex-1  main-article">
			<article className="max-w-screen-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 lg:p-10 main-article">
			<div className="w-full mx-auto space-y-4 text-center">
				{/* <p className="text-xs font-semibold tracki uppercase">#TailwindCSS</p> */}
				<h1 className="text-center text-xl md:text-3xl justify-center lg:text-4xl font-semibold text-gray-800 dark:text-white mb-1 flex"> {newPost.title}</h1>
				
			</div>
			<div className="dark:text-gray-100 mt-6" dangerouslySetInnerHTML={{ __html: marked.parse(newPost.content || "") }} >
				{/* <p>{post.content}</p> */}
			</div>
			
		</article>

			</div>
			</div>

		</section>
	</>
}