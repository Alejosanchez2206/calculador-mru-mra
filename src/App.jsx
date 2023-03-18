
import './App.css'
import Mru from './componentes/mru'
import DarkMode from './componentes/DarkMode'

function App() {
  return (
    <div className="container mx-auto  dark:text-gray-100 dark:bg-slate-900 duration-100">
      <DarkMode/>
      <Mru />
    </div>
  )
}

export default App
