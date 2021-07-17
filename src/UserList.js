import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setData((data) => res.data);
        })
    }, []);
    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <div className="user">
                           
                            <div className="sidebox">
                                <span className="spanstyle1">
                                    <b className='name'>{user.name}</b>
                                </span>
                                <br></br>
                                <span className="spanstyle2">{user.email}</span>
                                <br />
                                <div className="style3">
                                    <span >Phone: {user.phone}</span>
                                    <span >Website: {user.website}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default UserList;