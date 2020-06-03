import React from 'react';

export default () =>
    <form className="mt-16 text-center">
        <label htmlForm="contact-content" className="block text-gray-700 text-sm font-bold mb-2">Contáctame y veamos qué podemos hacer</label>
        <div className="flex shadow rounded bg-white border p2">
            <textarea 
            id = "contact-content"
            name= "contact-content" 
            className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus: shadow-outline"></textarea>
            <button className="btn m-2 ml-3">Enviar</button>
        </div>
    </form>