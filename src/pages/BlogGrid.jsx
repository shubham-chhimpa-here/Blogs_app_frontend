import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

export default function BlogGrid() {
	const [posts, setPosts] = useState([])

	 function getData() {
		const url = `${import.meta.env.VITE_BASE_URL}blog`
		 fetch(url)
		 .then(res => res.json())
		 .then(res => {
			setPosts(res)
			console.log(res)
		 })
		 .catch(err => {
			console.log(err)
		 })

	}

	function deletePost(id) {
		setPosts(posts => posts.filter(ele=> ele._id != id))
	}

	useEffect(() => {
		getData()
	}, [])
	return <>
		<section className="py-6 sm:py-12 bg-gray-100 text-gray-100">
			<div className="container p-6 mx-auto space-y-8">

				<div className="grid grid-cols-1 gap-x-4 gap-y-8 ">
					{posts.map((item, i) => {
						return <BlogCard key={i} data={{item, deletePost}} />
					})}
				</div>
			</div>
		</section>
	</>
}