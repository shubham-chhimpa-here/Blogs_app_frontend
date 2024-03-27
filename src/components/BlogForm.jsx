export default function BlogForm() {
    return <>
   <div className="flex flex-col max-w-xl p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 m-auto">
	
	<form  className="space-y-12">
    <div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-green-600 dark:text-gray-50">Save</button>
			</div>
			
		</div>
		<div className="space-y-4">
			<div>
				
				<input type="text" name="email" id="email" placeholder="title" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<textarea  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 min-h-64"></textarea>
                    </div>
					</div>
		</div>
	
	</form>
</div>
    </>
}