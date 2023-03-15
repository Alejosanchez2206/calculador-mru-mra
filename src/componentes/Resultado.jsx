import { MathComponent } from "mathjax-react";

export default function Resultado({ mensaje }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen ">
      <h2 className="font-black text-3xl text-center sm:mt-2">RESULTADO</h2>
      <div className='bg-slate-50 mt-6 text-left rounded-lg shadow-indigo-500/50'>
        <label
          className="block text-gray-700 uppercase font-bold"
        >
          Se calculo el tiempo
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3"
        >
          <MathComponent tex={String.raw`1 Seg`}/>
        </label>
        <label
          className="block text-gray-700 uppercase font-bold"
        >
          Y se obtuvo la aceleracion
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3" 
          >
          
          <MathComponent tex={String.raw`0 m/s^2`}/>
        </label>
        <label
          className="block text-gray-700 uppercase font-bold mt-5"
        >
          PROCEDIMIENTO PARA HALLAR EL TIEMPO
        </label>
        <MathComponent tex={String.raw`Tiempo =\frac{2 * Distancia}{Velocidadinicial + Velocidadfinal} = \frac{2 * 1}{ 1 + 1} = 1 Seg`} />
        <label
          className="block text-gray-700 uppercase font-bold mt-5"
        >
          PROCEDIMIENTO PARA HALLAR LA ACELERACIÓN
        </label>
        <MathComponent tex={String.raw`Aceleracion =\frac{Velocidadinicial - Velocidadfinal}{Tiempo} = \frac{1-1}{1} = 0 m/s^2`} />
      </div>
    </div>
  )
}
