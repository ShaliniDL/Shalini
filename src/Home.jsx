import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://622eda275c86fd315eb65e57.mockapi.io/employees/employees")
            .then(res => {
                console.log(res, "res");
                setUserData(res.data);
            });
    }, []); // Added empty dependency array to run only once

    return (
        <>
            <div>
                
                    {userData.map((user) => (
                        <li key={user.id}> {/* Added a key prop here */}
                            ID: {user.id} - Name: {user.name}
                        </li>
                    ))}
                
            </div>
        </>
    );
}

export default Home;
