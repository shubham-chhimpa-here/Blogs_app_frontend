import { Link } from "react-router-dom";

export default function Signup() {
    return <>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 m-auto">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Register</h1>
                <p className="text-sm dark:text-gray-400">Create your free account</p>
            </div>
            <form novalidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label for="username" className="block mb-2 text-sm">Username</label>
                        <input type="text" name="username" id="username" placeholder="leroy jenkins" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Register</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-400">Already have an account ?
                        <Link to='/login' className=" hover:underline dark:text-violet-400 ml-1">Login</Link>.
                    </p>
                </div>
            </form>
        </div>
    </>
}