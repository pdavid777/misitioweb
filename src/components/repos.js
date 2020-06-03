import React, { useEffect, useState } from "react";
//import repos from '../data/repos';
import Repo from "./repo";

export default () => {
    const [repos,setRepos] = useState([]);
    const [reposCount,setReposCount] = useState([]);

    useEffect(()=>{
        const data = sessionStorage.getItem("repos");
        let myRepos;

        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos=myRepos.slice(1,13);
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch('https://api.github.com/users/codigofacilito/repos');
            myRepos = await response.json();
            setReposCount(myRepos.length);

            myRepos=myRepos.slice(1,13);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));

            setRepos(myRepos);
        }
        fetchRepos();
    },[]);
   return (
   <div className="max-w-4xl mx-auto mt-12">
    <header className="text-center">
        <h2 className="text-3xl font-bold">Trabajos en GitHub</h2>
        <p>Colaboración y contribución en este lugar</p>
    </header>
    <ul className="repos-list">
        {
            repos.map((repo)=><Repo repo={repo} key={repo.id} />)
        }
    </ul>
    <div className="mt-8 text-center">
        <a href="https://github" className="btn" target="_blank" rel="noopener noreferrer">
            Ver más en github ({reposCount})
        </a>
    </div>
   </div>)
}