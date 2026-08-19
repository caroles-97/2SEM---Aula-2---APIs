import './App.css'

// todo componente começa com letra maiuscula

// const Subtitulo = () => {
//   return <h2>Subtitulo</h2>  //criei um modelo
  
// }

// função que recebe um parametro chamado props (o texto vai estar dentro de props)
const Subtitulo = (props) => {
  return <>
  <h2>{props.texto}</h2> 
  {/*     //criei um modelo */}
  <a href={props.link}>{props.link}</a>
  </>
}
// trazer o Subtitulo dentro do APP


const App = () => {
  return (
    <>
    <h1>Hello React!</h1>
      {/* // <Subtitulo /> */}
      {/* // chamando o Subtitulo. Executa a função const Subtitulo */}
      <Subtitulo texto="Subtitulo 1" link="google.com"/>  
      <Subtitulo texto="Subtitulo 2" link="uol.com.br"/>  
      {/* chamando o Subtitulo e reutilizar com conteúdo diferente. Chamei o componente, passei atributo à ele. */}    
    </>
  )
}

export default App
