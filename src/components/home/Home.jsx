import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams, useLocation} from "react-router-dom";
import axios from "axios";

function Home() {
    
    const [data, setData] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    var accessToken = searchParams.get('apiKey');

    useEffect(()=>{

        const fetchData = async() => {
            try {
                const response  = await axios.get("http://localhost/A_PRACTICE/API_project/react_crud_php/tasks",{
                    headers : {
                        'Authorization': "Bearer "+accessToken,
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error Fetching Data" , error);
            }
        }
        fetchData();
    },[])
    const handleRemove = async (removeID) => {
        try {
            const apiUrl = `http://localhost/A_PRACTICE/API_project/react_crud_php/tasks/${removeID}`;
            const response = await fetch(apiUrl, {
                method : "DELETE",
            })
            if(response.ok){
                const updatedData = data.filter(item=> item.id !== removeID);
                setData(updatedData);
            }
        } catch (error) {
            console.error("Error while delete Data" , error);
        }
    }

    return (
        <div className="mx-auto w-full max-w-7xl">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr. No.
                            </th>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className=" border-gray-300 rounded"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item, index)=>(

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.id}>
                            <td className="px-6 py-4">
                                {index+1}
                            </td>
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="border-gray-300 rounded" value={item.id}/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {/* Apple MacBook Pro 17" */}
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {/* Silver */}
                                {item.email}
                            </td>
                            <td className="flex items-center px-6 py-4">
                                {/* <a href="/updateuser/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                <Link to={`/updateuser/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                <a className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3" onClick={()=>handleRemove(item.id)} >Remove</a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-sm px-5 py-2.5 items-center rounded inline-flex items-center" >
                        <svg 
                            className="fill-current w-4 h-4 mr-2" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                        >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Export to PDF</span>
                        </button>
                        <br></br>
                        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-sm px-5 py-2.5 items-center rounded inline-flex items-center">
                        <svg 
                            className="fill-current w-4 h-4 mr-2" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20"
                        >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Export to Excel</span>
                        </button>
              
                    </div>
                </div>
            </aside>
        </div>
        
    );
}

export default Home;