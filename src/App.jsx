import CuerpoPosteo from './CuerpoPosteo.jsx';
import Encabezado from './Encabezado.jsx';
import PieDePosteo from './PieDePosteo.jsx';
import Asistente from './Asistente.jsx';
import './App.css'



function App() {

  const asistentes = [
    { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '‍' },
    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' },
    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '‍' }];



  return (
    <div>
      {/* 2. Lo usamos como si fuera una etiqueta HTML */}
      <Encabezado />
      <CuerpoPosteo />

      <br></br>

      {asistentes.map((asistente, index) => (
        <Asistente
          key={index}
          nombre={asistente.nombre}
          tarea={asistente.tarea}
          emoji={asistente.emoji}
        />
      ))}

      <br></br>
      <PieDePosteo />

    </div>
  )
}

export default App
