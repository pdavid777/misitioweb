import React from 'react';
import imgpres from '../images/coding.png';
import Form from './contact.form';

export default () => 
    <header className="bg-gray-500">

    <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-center items-center">
            <div className="flex-1">
                <h1 className="fond-bold text-purple-700 text-3xl">Hola pastorcito.</h1>
                <p className="text-xl font-light">Desarrollo aplicaciones y sistemas web, y enseño japonés.</p>
            </div>
            <img src={imgpres} alt="Imagen de presentación" style={{height: "300px"}}></img>
        </div>

        <div>
            <Form></Form>
        </div>
    </div>
    </header>