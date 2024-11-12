import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./MainComponent.css";
import { useQuery } from "react-query";

const MainComponent = () => {
    const [page , setPage] = useState(1);
    
    const fetchData = async ({queryKey}) => {
        // console.log(queryKey);
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
        // console.log(response.data);
        
        return response.data.results;
    }

    const {data , isLoading , isError} = useQuery( ["characters" , page], fetchData);

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(isError) {
        return <div>Error fetching data</div>
    }


    return (
        <div className="container">
            <h1>Rick and Morty Characters</h1>
            <div className="pagination">
                {
                    data.map((charachter) => (
                        <CardComponent key={charachter.id} data={charachter} />
                    ))
                }
            </div>
            <div className="button-container">
                <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={page === data.indexOf.pages}>Next</button>
            </div>
        </div>
    )
};

export default MainComponent;
