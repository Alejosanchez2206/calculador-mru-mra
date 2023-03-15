
import './App.css'
import  Formulario from './componentes/Formulario'
import  Resultado  from './componentes/Resultado'
function App() {


  return (
    <div className="container mx-auto mt-10">
      <div className='mt-12 md:flex'>
        <Formulario
          mensaje={'Formulario'}
        />     
        <Resultado 
          mensaje={'Resultado'}
        />
      </div>
    </div>
  )
}

export default App
