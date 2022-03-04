import TextBox from "./TextBox";

const List= ({
    data,
    arr,
    updateArr
}) => {
    let list = data.map((text,index) => (
        <TextBox
            key = {index}
            text = {text}
            arr = {arr}
            updateArr = {updateArr}/>
    ))
    return ( 
        <div
            className = {`list-wrapper ${data.length > 20 && 
                data.length <26? "list-wrapper5_5": ""} ${data.length >=9 && 
                data.length <=12? "list-wrapper3_3": "" }`}>
            {list}
        </div>
     );
}
 
export default List;