import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css'
import api from './services/api'



function App() {

  const [input, setInput] = useState("")

  async function handleSearch(){
    // 01310930/json/

    if(input === ""){
      alert("Preencha algum cep!")
      return
    }

    try{
      const response = await api.get(`${input}/json`)
      console.log(response.data)
    }catch{
      alert("Ops erro ao buscar")
    }

  }

  return (
    <div className="container">
      <h1 className="title">
        Buscador CEP
      </h1>
  
    <div className="containerInput">
      <input type="text"
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e)=> setInput(e.target.value) }
      />

      <button className="buttonSearch">
        <FiSearch size={25} color="fff"
        onClick={handleSearch}
        />
      </button>
    </div>

    <main className='main'>
      <h2>CEP: 78747784</h2>
      

      <span>Rua Teste algum</span>
      <span>Complemento; algum complemento</span>
      <span>Vila Rosa</span>
      <span>Campo Grande - MS</span>
    </main>


    </div>
  );
}

export default App;
