import { useRouter } from "next/router";
import { useState } from "react";
import Validation from "../Validation";

const Signup = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        image: ""
    });
    const router = useRouter();
    const type = router.query.type;

    function handleInput(event) {
        const newObj = { ...values, [event.target.name]: event.target.value };
        setValues(newObj);
    }

      function handleValidation(event) {
        event.preventDefault();
        // console.log(errors);
        setErrors(Validation(values));
        // console.log(errors.flag);
        if(errors.flag === "yes")
        {
            router.push('../test');
        }

    }

    return (
        <div className=" overflow-hidden min-h-screen bg-gray-50 flex flex-col justify-center py-8 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-1 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Become A {type} Now!
                </h2>
            </div>

            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
                    <form method="post" enctype="multipart/form-data" onSubmit={handleValidation}>
                        <div>
                            <label for="email" className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" onChange={handleInput} placeholder="John Doe" type="text" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                            {errors.name && <p className="text-sm text-red-700 font-bold">{errors.name}</p>}
                        </div>

                        <div className="mt-3">
                            <label for="image" className="block text-sm font-medium leading-5 text-gray-700">Image</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input id="image" name="image" onChange={handleInput} placeholder="john" type="file" className="flex-1 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 " />
                            </div>
                            {errors.image && <p className="text-sm text-red-700 font-bold">{errors.image}</p>}
                        </div>

                        <div className="mt-3">
                            <label for="email" className="block text-sm font-medium leading-5  text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="email" name="email" onChange={handleInput} placeholder="user@example.com" type="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                "/>
                                <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                            {errors.email && <p className="text-sm text-red-700 font-bold">{errors.email}</p>}
                        </div>

                        <div className="mt-3">
                            <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password" onChange={handleInput} type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                            {errors.password && <p className="text-sm text-red-700 font-bold">{errors.password}</p>}
                        </div>

                        <div className="mt-3">
                            <label for="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                                Confirm Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password_confirmation" name="confirmpassword" onChange={handleInput} type="password" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                            {errors.confirmpassword && <p className="text-sm text-red-700 font-bold">{errors.confirmpassword}</p>}
                        </div>

                        <div className="mt-3">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#20bc74] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Create account
                                </button>
                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Signup;