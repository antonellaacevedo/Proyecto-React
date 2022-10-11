
import '../itemcount/Itemcount.scss'
export const ItemCount = ({ max, counter, setCounter, onnAdd}) => {
    
    
    const handleSumar = () => {
        if (counter < max) {
        setCounter( counter + 1)
    };
        
    }
    
    const handleRestar = () => {
        if (counter > 1) {
        setCounter (counter - 1)
    };
    
    }


    return (
           
        <div className="clasecontador">

            <button  onClick={handleRestar} className="contador">-</button>

            <span>{counter}</span>

            <button onClick={handleSumar} className="contador">+</button>

            <button onClick={onnAdd} className="añadiralcarrito">Añadir al carrito</button>
            
        </div>
 

    )
    

}

export default ItemCount

