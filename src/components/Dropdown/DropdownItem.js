const DropdownItem = ({elem, setState}) => {
    return ( 
        <div
        className = "dropdown-item"
        onClick = {() => setState({
           selected: elem,
           open:false
        })}>
           <p>{elem}</p>
        </div>
     );
}
 
export default DropdownItem;