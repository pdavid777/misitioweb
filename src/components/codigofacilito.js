import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Posts from './posts';
import Certificate from './certificate';
import Course from './course';

export default () => {
    const data = useStaticQuery(graphql`{
            codigofacilitoJson {
              data {
                certificates {
                  title
                  score
                  code
                }
                courses {
                  title
                  progress
                  url
                }
              }
            }
    }`)
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <Posts data={data.codigofacilitoJson.data.certificates} 
                    title="Mis certificados online (Códigofacilito)"
                    card={Certificate} />

                    <Posts data={data.codigofacilitoJson.data.courses
                                                        .filter(x=>x.progress>80)
                                                        .sort((a,b)=>{
                                                            if (a.progress>b.progress) return 1; 
                                                            if (a.progress<b.progress) return -1; 
                                                            return 0
                                                        })
                                }
                    title="Cursos tomados en Códigofacilito"
                    card={Course}
                    />


                    
                    
                </div>
            </div>
        </section>
    )
}
    