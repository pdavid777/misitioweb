import React from 'react';

export default (props)=> {
    const certificate = props.element;
    return (
        <div className="shadow rounded text-center p-8 bg-white mr-4">
            <h4 className="font-bold">{certificate.title}</h4>
            <div className="text-center">
                <span className="inline-block bg-purple-200 p-2 mt-2 radius">Calificación <span className="text-green-700 font-bold">{certificate.score}</span></span>
            </div>
        </div>
    )

}
    
