import React from 'react';
import { graphql, Link } from 'gatsby';
import EdNav from './../src/components/education-nav';

export default(props)=>{
    //console.log(props);
    const pageData = props.data.educationJson;
        
    return (
        <div>
            <header className="py-12 border-purple-500 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/">Volver al inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((x,y)=>(
                        <li 
                        className="bg-white shadow mt-4 flex"
                        key={y}
                        >
                            <p class="vertical-text">{pageData.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{x.name}</h3>
                                    {
                                        x.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{x.degree}</span>
                                    }
                                    {
                                        x.datos && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{x.datos}</span>
                                    }
                                    {
                                        x.url && <a href={x.url} className="btn mt-4 inline-block" target="_blank" rel="noreferrer noopener">Ver más</a>
                                    }
                                </div>
                                <div className="inline-block">
                                    <span>{x.score && x.score}</span>
                                </div>
                            </div>
                        </li>
                    )
                  )
                }
            </ul>
            <EdNav />
        </div>
    )
}

export const query  = graphql`
    query($slug: String){
        educationJson(
            slug: {
                eq: $slug
            }
        ){
            title
            description
            slug
            items{
                name
                degree
                score
                datos
            }
        }
    }
`;