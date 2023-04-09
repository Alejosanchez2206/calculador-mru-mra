import { MathComponent } from "mathjax-react";
import cambiarcomillas from "../../utily/cambiarcomillas";

export default function Resultado(
  {
    mensaje,
    mensajeFormula,
    resultado,
    formula,
    children
  }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen  dark:bg-gray-900">
      <h2 className="font-black text-3xl text-center max-sm:mt-10">RESULTADO</h2>
      <div className='bg-slate-50 mt-6 text-left rounded-lg shadow-indigo-500/50  dark:bg-gray-900'>
        <label
          className="block text-gray-700 uppercase font-bold dark:text-white"
        >
          {mensaje}
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3  dark:text-white"
        >
          <MathComponent
            tex={String.raw`${resultado}`}
          />
        </label>
        <label
          className="block text-gray-700 uppercase font-bold mt-5  dark:text-white"
        >
          {mensajeFormula}
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3  dark:text-white"
        >
          {children}
        </label>
      </div>
    </div>
  )
}
