const DashedPolygon = () => {
    return (  
        <div className='hex-wrapper'>
        <svg viewBox="0 0 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon 
                 fill="#92D050" 
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10,15"
                points="400 8 760 200 760 600 400 792 40 600 40 200"
                />
        </svg>
    </div>
    );
}
 
export default DashedPolygon;