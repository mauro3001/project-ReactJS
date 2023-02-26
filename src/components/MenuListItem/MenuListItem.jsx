import { useState } from 'react'
import s from "./style.module.css"

const MenuListItem = (props) => {
    const [isHovered, setIsHover] = useState(false);

    const activate = () => {
        setIsHover(true);
    }

    const desactivate = () => {
        setIsHover(false);
    }

    const getBackgroundColor = () => {
        if (isHovered){
            return "#a5e9ff";
        } else {
            if (props.isSelected){
                return "#26baea";
            } else {
                return "#eff0ef";
            }
        }
    };

    const onItemClick = () => {
        props.onClick(props.university);
    }


    return (
        <div
            className={s.container}
            onClick={onItemClick}
            onMouseEnter={activate}
            onMouseLeave={desactivate}
            style={{ backgroundColor: getBackgroundColor() }}
        >
            {props.university}
        </div>
    )
}

export default MenuListItem