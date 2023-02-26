import { useState } from 'react'
import DisplayUniversity from './components/DisplayUniversity/DisplayUniversity'
import MenuList from './components/MenuList/MenuList'
import s from "./style.module.css"

function App() {
  const [universities, setUniversities] = useState("")

  const onMenuListItemClick = (university) => {
    setUniversities(university);
  }

  return (
    <div>
      <h1 style={{ textAlign: "Center"}}>Seleccione la Universidad Pública de Colombia en la que le gustaria estudiar</h1>
      <div className={s.workspace}>
        <MenuList 
          university={universities}
          onItemClick={onMenuListItemClick}
        />
        <DisplayUniversity 
          university={universities}
        />
      </div>
    </div>
  )
}

export default App
