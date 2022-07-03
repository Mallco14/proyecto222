import React,{ useState, useEffect, createContext, useContext} from "react";
import { DataContext } from "../Context/dataProvider";

export const Detallescate = () =>{
    const value = useContext(DataContext);
    const [productocat] = value.productocat;
    //DETALLES CATEGORIA
    return(
        <div>
            {
                productocat.map(pcat=>(
                    <ul key={pcat.id}>
                        <li>{pcat.nombre}</li>    
                    </ul>
                ))
            }
        </div>
    )
}