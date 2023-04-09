import { MathJax, MathJaxContext } from "better-react-mathjax";
import { MathComponent } from "mathjax-react";

export default function Resultado({ mensaje }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen  dark:bg-gray-900">
      <h2 className="font-black text-3xl text-center max-sm:mt-10">RESULTADO</h2>
      <div className='bg-slate-50 mt-6 text-left rounded-lg shadow-indigo-500/50  dark:bg-gray-900'>
        <label
          className="block text-gray-700 uppercase font-bold dark:text-white"
        >
          Se calculo el tiempo
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3  dark:text-white"
        >
          <MathComponent
            tex={String.raw`1s`}
          />
        </label>
        <label
          className="block text-gray-700 uppercase font-bold  dark:text-white"
        >
          Y se obtuvo la aceleracion
        </label>
        <label
          className="block text-blue-700 uppercase font-bold text-xl ml-3  dark:text-white"
        >
          <MathComponent
            tex={String.raw`1s`}
          />
        </label>
        <label
          className="block text-gray-700 uppercase font-bold mt-5  dark:text-white"
        >
          PROCEDIMIENTO PARA HALLAR EL TIEMPO
        </label>
        <MathJaxContext>

          <MathJax>{" V = \\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>
        <label
          className="block text-gray-700 uppercase font-bold mt-5  dark:text-white"
        >
          PROCEDIMIENTO PARA HALLAR LA ACELERACIÓN
        </label>
        <MathJaxContext>

          <MathJax>{" V = \\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>
      </div>
    </div>
  )
}
