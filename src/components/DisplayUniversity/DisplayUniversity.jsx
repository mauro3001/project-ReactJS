import s from "./style.module.css"

const DisplayUniversity = (props) => {
  return (
    <div className={s.container}>
        {
            props.university
            ? `Eligió la ${props.university}`
            : "No ha elegido alguna universidad"}
    </div>
  )
}

export default DisplayUniversity