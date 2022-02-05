const MenuItems = ({
    arr,
    updateActive
}) => {
    const list = arr.map((elem, index) =>(
        <span
            onClick = {() => updateActive(elem.title)}
            key = {index}
        >{elem.title}</span>
    ))
    return ( 
        <div
            className = "menu-items">
            {list}
        </div>
     );
}
 
export default MenuItems;