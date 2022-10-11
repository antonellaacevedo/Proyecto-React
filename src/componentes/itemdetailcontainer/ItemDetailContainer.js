import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../itemdetail/ItemDetail";
import {doc, getDoc} from 'firebase/firestore'
import { database } from "../../firebase/config";
import {HashLoader} from 'react-spinners'
import '../itemdetailcontainer/ItemDetailContainer.scss'


export const ItemDetailContainer = () => {


    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    // eslint-disable-next-line
    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(database, 'productos', itemId)

        getDoc(docRef)
        .then((doc) =>{
            setItem({id: doc.id, ...doc.data()})
        })

        .finally(() =>
        setTimeout(()=> setLoading(false), 1000))

    }, [itemId])

   

    return(
        

        <div  className="loader">

            {loading 
            ?<HashLoader
            color='#16A085' loading={loading} size={100}/>
           
            :< ItemDetail  item={item}/> }
        </div>
    )




}