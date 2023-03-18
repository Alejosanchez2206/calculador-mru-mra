import React from 'react'

export default function Formulario({ mensaje }) {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 rounded-lg">
            <h2 className="font-black text-3xl text-center uppercase">Ingresa los datos</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 ">
                <div className="mb-5">
                    <label
                        htmlFor="Distancia"
                        className="block text-gray-700 uppercase font-bold text-left">
                        Distancia
                    </label>

                    <input
                        id="Distancia"
                        type="Number"
                        placeholder="Distancia"
                        className="border-2 sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full"
                    /*  value={nombre}
                     onChange={(e) => setNombre(e.target.value)} */
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full"
                    >
                        <option value="km">km</option>
                        <option value="m" selected>m</option>
                        <option value="cm">cm</option>

                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vo"
                        className="block text-gray-700 uppercase font-bold text-left">
                        Velocidad inicial
                    </label>
                    <input
                        id="vo"
                        type="Number"
                        placeholder="Velocidad inicial"
                        className="sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full"
                    /*  value={nombre}
                     onChange={(e) => setNombre(e.target.value)} */
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full"
                    >
                        <option value="km/s">km/s</option>
                        <option value="m/s" selected>m/s</option>

                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="vf"
                        className="block text-gray-700 uppercase font-bold text-left">
                        Velocidad final
                    </label>
                    <input
                        id="vf"
                        type="Number"
                        placeholder="Velocidad final"
                        className="sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full"
                    /*  value={nombre}
                     onChange={(e) => setNombre(e.target.value)} */
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full"
                    >
                        <option value="km/s">km/s</option>
                        <option value="m/s" selected>m/s</option>

                    </select>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="tiempo"
                        className="block text-gray-700 uppercase font-bold text-left">
                        Tiempo
                    </label>
                    <input
                        id="tiempo"
                        type="Number"
                        placeholder="Tiempo"
                        className="sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full"
                    /*  value={nombre}
                     onChange={(e) => setNombre(e.target.value)} */
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full"
                    >
                        <option value="s">s</option>
                        <option value="m" selected>m</option>
                        <option value="h" selected>h</option>
                    </select>

                </div>
                <div className="mb-5">
                    <label
                        htmlFor="aceleracion"
                        className="block text-gray-700 uppercase font-bold text-left">
                        Aceleracion
                    </label>
                    <input
                        id="aceleracion"
                        type="Number"
                        placeholder="Aceleracion"
                        className="sm:w-4/5 p-2 mt-2 mr-3 rounded-md max-sm:w-full"
                    /*  value={nombre}
                     onChange={(e) => setNombre(e.target.value)} */
                    />
                    <select
                        className="border-2 sm:w-2/12 p-2 mt-2 rounded-md  max-sm:w-full"
                    >
                        <option value="m/s^2">m/s^2</option>

                    </select>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value={'CALCULAR'}
                />
            </form>
        </div>
    )
}
