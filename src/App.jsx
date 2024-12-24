import { useState } from 'react';
import './App.scss';

function App() {

  const [erro, setErro] = useState('')
  const [password, setPassword] = useState('')

  const gerarsenha = (pool) => {
    let AlfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let AlfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz"
    let Numeros = "0123456789"
    let Simbolos = "!@#$%^&*()_+[]{}|;:,.<>?"

    let OpcoesEscolhidas = ""
    if (AlfabetoMaiusculo) OpcoesEscolhidas += AlfabetoMaiusculo
    if (AlfabetoMinusculo) OpcoesEscolhidas += AlfabetoMinusculo
    if (Numeros) OpcoesEscolhidas += Numeros
    if (Simbolos) OpcoesEscolhidas += Simbolos




    if (OpcoesEscolhidas.length <= 0) {
      setErro("Escolha pelo menos uma opção")
    }

    let password2 = ''
    for (let i = 0; i > 0; i++) {

      const ramdom = Math.floor(Math.random() * OpcoesEscolhidas.length)
      password2 += OpcoesEscolhidas[ramdom]


    }

    setPassword(password2)

  }




  const options = () => {
    AlfabetoMaiusculo: true
    AlfabetoMinusculo: true
    Numeros: true
    Simbolos: true
  }
  
  const RandomPassword = gerarsenha (12, options);
  console.log (RandomPassword) 


  return (
    <div className="App">

      <div className="Opcoes">



        <p>Alfabelto Maiuscula</p><input type="checkbox" name="Alfabeto Maiuscula " id="" />

        <p>Alfabeto Minusculo</p><input type="checkbox" name="Alfabeto Minusculo" id="" />

        <p>Numeros</p><input type="checkbox" name="Numeros" id="" />

        <p>Simbolos</p><input type="checkbox" name="Simbolos" id="" />


        <button onClick={gerarsenha}> Randomizar </button>

        <p>{password}</p>

      </div>

    </div>
  );
}

export default App;
