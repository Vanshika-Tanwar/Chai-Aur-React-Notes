import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);
    
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Github DP" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};
