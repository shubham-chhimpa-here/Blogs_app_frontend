import { useState } from "react"
import { Link } from "react-router-dom"

export default function BlogCard({ data }) {
	const { item, deletePost } = data;
	const { title, content, _id, views, createdAt } = item
	const [admin, setAdmin] = useState(false)

	let x = createdAt.split(' ')
	let y = x[1] + ' ' + x[2] + ', ' + x[3]


	function handleDelete(x) {
		const url = `http://localhost:8080/blog/${x}`
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				console.log(res)
				deletePost(x)
			})
			.catch(err => {
				console.log(err)
			})
	}
	return <>

		<div className="bg-gray-100 text-gray-800">
			<div className="container max-w-4xl px-10 py-6  rounded-lg shadow-sm bg-white">
				<div className="flex items-center justify-between">
					<span className="text-sm text-gray-600">{y}</span>
					<span className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">{views} views</span>
				</div>
				<div className="mt-3">
					<Link to={`/blog/${_id}`} className="text-2xl font-bold hover:underline" >{title}</Link>

					<p className="mt-2">{content.substring(0, 300)}...</p>
				</div>
				<div className="flex items-center justify-between mt-4">
					<Link className="hover:underline dark:text-violet-400" to={`/blog/${_id}`}>Read more</Link>

				</div>
				{admin &&
					<>
						<div className=" mt-6">
							<hr />
							<div className="flex items-center gap-4 pt-4">

								<button className="px-2 py-1 font-bold rounded bg-blue-600 text-gray-50">Edit</button>
								<button className="px-2 py-1 font-bold rounded bg-red-600 text-gray-50" onClick={() => {
									handleDelete(_id)
								}}>Delete</button>
							</div>
						</div>
					</>
				}
			</div>
		</div>
	</>
}