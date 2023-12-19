import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './componente/Botao'
import Decremento from './componente/Decremento'

function App() {


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Atividade React - Tutoria</h1>
      <div className="card">
      <Contador />
      <Decremento />
        
      
      </div>
      <p className="read-the-docs">
        Exemplo do uso do Hook UseState e criação de componentes
      </p>
    </>
  )
}

export default App
