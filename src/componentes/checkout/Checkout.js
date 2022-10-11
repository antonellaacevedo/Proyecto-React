import { useState } from "react"
import { Link } from "react-router-dom"
import {useCartContext} from '../../context/CartContext'
import { addDoc, collection, getDocs, writeBatch,where,documentId, query} from 'firebase/firestore'
import { database } from "../../firebase/config"


export const Checkout = () => {


    const {cart, precioTotal, finDeCompra} = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre:'',
        email:'',
        direccion:''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }


    const handleSubmit =  async (e) =>{
        e.preventDefault()

        const orden = {
             comprador:values,
             items:cart,
             total: precioTotal()
        }

        const batch= writeBatch(database)
        const ordenesRef = collection(database, 'ordenes')
        const productosRef =collection(database, 'productos')

        const q= query(productosRef,where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            finDeCompra(doc.id)
                        })
                })
            } else {
        
                alert("Hay items sin stock")
                console.log(outOfStock)
        }

    


    }

    if (orderId){
        return (
        <div className="ordendecompra">
            <h2>Compra exitosa!</h2>
            <p>Tu número de compra es: ${orderId}</p>
            <Link className="vermas" to="/">Ver más productos</Link>
        </div>
        )
    }

    if(orderId){
        return(
        cart.length === 0)
    }


    return(
        <div className="checkout">
            <h2>Formulario de pago</h2>

            <div className="containerform">

            <form className="form" onSubmit={handleSubmit}>

                <h4>¡Completá tus datos!</h4>
                <input name="nombre" onChange={handleInputChange} value={values.nombre} type={'text'} placeholder="Tu nombre"/>


                <input name="email" onChange={handleInputChange} value={values.email} type={'text'} placeholder="Tu email" />


                <input name="direccion" onChange={handleInputChange} value={values.direccion} type={'text'} placeholder="Tu direccion"/>


                <button type="submit"> ENVIAR</button>
            </form>

            </div>
        </div>
    )
}