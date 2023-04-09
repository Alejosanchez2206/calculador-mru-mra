import React, { useState } from 'react'

export default function Formulario({ RealizarOperaciones, clearButton, LimpiarOperaciones }) {

    const [distancia, setDistancia] = useState(0)
    const [medidasDistancia, setMedidasDistancia] = useState('km')
    const [velocidad, setVelocidad] = useState(0)
    const [medidadVelocidad, setMedidadVelocidad] = useState('km/s')
    const [tiempo, setTiempo] = useState(0)
    const [medidaTiempo, setMedidaTiempo] = useState('s')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (clearButton) {
            LimpiarOperaciones()
            setDistancia(0)
            setVelocidad(0)
            setTiempo(0)
        } else {

            let ObjData = {
                'distancia': distancia,
                'medidadDistancia': medidasDistancia,
                'velocidad': velocidad,
                'medidavelocidad': medidadVelocidad,
                'tiempo': tiempo,
                'medidatiempo': medidaTiempo
            }
            RealizarOperaciones(ObjData)
        }

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 md:mr-8 lg:mr-6 rounded-lg">
            <h2 className="font-black text-3xl text-center uppercase">Ingresa los datos</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 dark:bg-gray-900">
                <div className="mb-5">
                    <label
                        htmlFor="Distancia"
                        className="block text-gray-700 uppercase font-bold text-left dark:text-white">
                        Distancia
                    </label>

                    <input
                        id="Distancia"
                        type="Number"
                        placeholder="Distancia"
                        className="border-2 sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full dark:bg-slate-900  dark:text-white"
                        value={distancia}
                        onChange={(e) => setDistancia(Number(e.target.value))}
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full dark:bg-slate-900  dark:text-white"
                        value={medidasDistancia}
                        onChange={(e) => setMedidasDistancia(e.target.value)}
                    >
                        <option value="km">km</option>
                        <option value="m" selected>m</option>
                        <option value="cm">cm</option>

                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vo"
                        className="block text-gray-700 uppercase font-bold text-left  dark:text-white">
                        Velocidad
                    </label>
                    <input
                        id="vo"
                        type="Number"
                        placeholder="Velocidad"
                        className="border-2 sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full  dark:bg-slate-900  dark:text-white"
                        value={velocidad}
                        onChange={(e) => setVelocidad(Number(e.target.value))}
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full  dark:bg-slate-900  dark:text-white"
                        value={medidadVelocidad}
                        onChange={(e) => setMedidadVelocidad(e.target.value)}
                    >
                        <option value="km/s">km/s</option>
                        <option value="m/s" selected>m/s</option>

                    </select>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="tiempo"
                        className="block text-gray-700 uppercase font-bold text-left  dark:text-white">
                        Tiempo
                    </label>
                    <input
                        id="tiempo"
                        type="Number"
                        placeholder="Tiempo"
                        className="border-2 sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full  dark:bg-slate-900  dark:text-white"
                        value={tiempo}
                        onChange={(e) => setTiempo(Number(e.target.value))}
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full  dark:bg-slate-900  dark:text-white"
                        value={medidaTiempo}
                        onChange={(e) => setMedidaTiempo(e.target.value)}
                    >
                        <option value="s">s</option>
                        <option value="m" selected>m</option>
                        <option value="h" selected>h</option>
                    </select>

                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value={clearButton ? 'LIMPIAR CAMPOS ' : 'CALCULAR'}
                />
            </form>
        </div>
    )
}
