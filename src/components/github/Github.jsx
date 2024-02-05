import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Github(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshChoudhary')
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className="text-center m-4 bg-gray-600 text-white-p4 text-3xl">Github followers : {data.followers}
        <img src={data.avatar_url} alt="git picture" />
        </div>
    )
}

export default Github;