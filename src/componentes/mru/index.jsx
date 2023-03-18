import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
export default function index() {
    return (
        <div className='mt-12 md:flex'>
            <Formulario
                mensaje={'Formulario'}
            />
            <Resultado
                mensaje={'Resultado'}
            />
        </div>
    )
}
