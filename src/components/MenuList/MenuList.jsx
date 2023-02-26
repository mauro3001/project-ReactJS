import MenuListItem from '../MenuListItem/MenuListItem'
import { UNIVERSITIES } from './constant'
import s from "./style.module.css"

const MenuList = (props) => {
  return (
    <div className={s.container}>
        {
            UNIVERSITIES.map((university, idx) => (
                <MenuListItem
                    key={idx} 
                    isSelected = {props.university === university}
                    onClick = {props.onItemClick}
                    university = {university}
                />

            ))
        }
    </div>
  )
}

export default MenuList