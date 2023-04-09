import { MathComponent } from "mathjax-react";

export default function printformulas({ datos, resultado, clearButton }) {
    if (clearButton === false) return <label>Por favor, ingrese los datos</label>;
    if (datos.distancia === 0) return (
        <>
            <MathComponent
                tex={String.raw`D = V x T = ${datos.velocidad} x ${datos.tiempo} = ${resultado}`}
            />
        </>
    )
    if (datos.velocidad === 0) return (
        <>
            <MathComponent
                tex={String.raw`V = \frac{D}{T} = \frac{${datos.distancia}}{${datos.tiempo}} = ${resultado}`}
            />
        </>
    )
    if (datos.tiempo === 0) return (
        <>
            <MathComponent
                tex={String.raw`T = \frac{D}{V} = \frac{${datos.distancia}}{${datos.velocidad}} = ${resultado}`}
            />
        </>
    )
}
