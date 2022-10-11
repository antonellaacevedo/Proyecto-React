import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {collection, getDocs, query, where} from 'firebase/firestore'
import { database } from "../firebase/config"

export const useProductos = () =>{

    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams ()
    console.log (categoryId)


   
    useEffect (() =>{

       setLoading(true)

       const productosRef = collection(database, 'productos')

       const q = categoryId
          ?  query(productosRef,where('category', '==', categoryId))
          : productosRef

       getDocs(q)
       .then((resp) =>{
        const productosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))

        setproductos(productosDB)
      })

      .finally(() => {
        setLoading(false)
      })
        
    }, [categoryId]) 



    return({
            productos, loading
        })
}