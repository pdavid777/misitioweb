import React from 'react';

export default (props)=>{
    const course = props.element;
    return (
            <div className="shadow rounded text-center p-8 bg-white mr-4">
                <h4 className="font-bold"><a href={course.url} target="_blank" rel="noopener noreferrer">{course.title}</a></h4>
                <div className="text-center">
                    <span className="inline-block bg-purple-200 p-2 mt-2 radius">Porcentaje completado <span className="text-green-700 font-bold">{course.progress}%</span></span>
                </div>
            </div>
    )
}