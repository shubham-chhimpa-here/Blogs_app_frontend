import BlogCard from "../components/BlogCard";

export default function BlogGrid() {
	const array = [1, 2, 3, 4, 5]
	return <>
		<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
			<div className="container p-6 mx-auto space-y-8">

				<div className="grid grid-cols-1 gap-x-4 gap-y-8">
					{array.map((item, i) => {
						return <BlogCard key={i} item={item} />
					})}
				</div>
			</div>
		</section>
	</>
}