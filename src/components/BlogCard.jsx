import { Link } from "react-router-dom"

export default function BlogCard({item}) {
	const {title, content, _id, views, createdAt} = item

	let x = createdAt.split(' ')
	let y = x[1] +' '+ x[2] +', ' + x[3]	
    return <>

<div className="bg-gray-100 text-gray-800">
	<div className="container max-w-4xl px-10 py-6  rounded-lg shadow-sm bg-white">
		<div className="flex items-center justify-between">
			{/* <span className="text-sm text-gray-600">Jun 1, 2020</span> */}
			{/* <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-green-600 text-gray-50">Javascript</a> */}
		</div>
		<div className="mt-3">
			<a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{title}</a>
			<p className="mt-2">{content.substring(0,300)}...</p>
		</div>
		<div className="flex items-center justify-between mt-4">
		<Link className="hover:underline dark:text-violet-400" to={`/blog/${_id}`}>Read more</Link>
			<div className="flex items-center text-gray-600 gap-2 ">
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
					<span className="hover:underline text-gray-600">Leroy Jenkins</span>
				</a>
				<span>.{views} views</span>
				<span>.{y}</span>
			</div>
		</div>
	</div>
</div>
    </>
}