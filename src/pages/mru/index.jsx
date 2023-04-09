import { MathJax, MathJaxContext } from "better-react-mathjax";
import { MathComponent } from "mathjax-react";
import { useState } from 'react';
import Formulario from './Formulario';
import Resultado from './Resultado';
import PrintFormulas from "./printformulas";
export default function index() {
    const [resultado, setResultado] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [mensajeFormula, setMensajeFormula] = useState('')
    const [clearButton, setClearButton] = useState(false)
    const [datos, setDatos] = useState({})

    const RealizarOperaciones = (data) => {
        setClearButton(true)
        setDatos(data)
        if (data.distancia === 0) calcularDitancias(data)
        if (data.velocidad === 0) calcularVelocidad(data)
        if (data.tiempo === 0 )  calcularTiempo(data)
    }

    const calcularDitancias = ({ velocidad, tiempo, medidavelocidad }) => {
        const distancia = velocidad * tiempo;
        let medidadDistancia = ''
        if (medidavelocidad === 'km/s') {
            medidadDistancia = 'km'
        } else if (medidavelocidad === 'm/s') {
            medidadDistancia = 'm'
        }
        setResultado(distancia + medidadDistancia);
        setMensaje('SE OBTUVO LA DISTANCIA')
        setMensajeFormula('PROCEDIMIENTO PARA HALLAR LA DISTANCIA')


    }

    const calcularVelocidad = ({ distancia, tiempo, medidadDistancia }) => {
        const velocidad = (distancia / tiempo).toFixed(2);

        let medidaVelocidad = ''
        if (medidadDistancia === 'km') {
            medidaVelocidad = 'km/s';
        } else if (medidadDistancia === 'm') {
            medidaVelocidad = 'm/s';
        }

        setResultado(velocidad + medidaVelocidad);
        setMensaje('SE OBTUVO LA VELOCIDAD')
        setMensajeFormula('PROCEDIMIENTO PARA HALLAR LA VELOCIDAD')
    }

    const calcularTiempo = ( { distancia , velocidad }) => {
        const tiempo = (distancia / velocidad).toFixed(2);
        setResultado(tiempo + 's');
        setMensaje('SE OBTUVO EL TIEMPO')
        setMensajeFormula('PROCEDIMIENTO PARA HALLAR EL TIEMPO')
    }

    const LimpiarOperacion = () => {
        setResultado('')
        setMensaje('')
        setMensajeFormula('')
        setMensaje('')
        setClearButton(false)
        setDatos({})
    }

    return (
        <div className='mt-12 md:flex'>
            <Formulario
                RealizarOperaciones={(data) => RealizarOperaciones(data)}
                LimpiarOperaciones={() => LimpiarOperacion()}
                clearButton={clearButton}
            />
            <Resultado
                mensaje={mensaje}
                mensajeFormula={mensajeFormula}
                resultado={resultado}
            >
                <PrintFormulas
                    datos={datos}
                    resultado={resultado}
                    clearButton={clearButton}
                />
            </Resultado>
        </div>
    )
}
