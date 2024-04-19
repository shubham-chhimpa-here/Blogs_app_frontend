import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";

export default function BlogGrid() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	 function getData() {
		const url = `${import.meta.env.VITE_BASE_URL}blog`
		 fetch(url)
		 .then(res => res.json())
		 .then(res => {
			setPosts(res)
			setLoading(false)
			
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
					{!loading ?  posts.reverse().map((item, i) => {
						return <BlogCard key={i} data={{item, deletePost}} />
					}) : <Loading />}
				</div>
			</div>
		</section>
	</>
}