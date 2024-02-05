import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signin(){

    const navigate = useNavigate();
    const [data, setData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e) =>{
        const{name, value} = e.target;
        setData((prevData)=>({
            ...prevData,
            [name] : value,
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = "http://localhost/A_PRACTICE/API_project/react_crud_php/register.php";
            const response = await fetch(apiUrl, {
                method : "POST",
                headers : {
                    'Content-type' : 'application-json',
                },
                body : JSON.stringify(data)
            })
            if (response.ok) {
                alert("data successfully sent");
                setData({
                    name : "",
                    email : "",
                    password : ""
                })
                navigate('/login');
            }else{
                console.error("Error sending data to api");
                throw new Error(`Http error! status ${response.status}`);
            }

        } catch (error) {
            console.error(error);
        }


        
    }

    document.title = 'Signin';
    const primaryBackgroundColor = '#007bff';
    return (
        <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/about" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    Flowbite    
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up to your account
                    </h2>
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" value={data.name} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" value={data.emil} onChange={handleChange}/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={data.password} onChange={handleChange}/>
                        </div>
                        <button style={{backgroundColor:primaryBackgroundColor}} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
                        <div>Already Account have an Account ? <a href="/login" > Login Here </a></div>
                        
                    </form>
                </div>
            </div>
            </section>
        </>
    )
}

export default Signin;