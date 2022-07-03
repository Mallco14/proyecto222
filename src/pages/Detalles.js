import React,{ useState, useEffect, createContext, useContext} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/dataProvider";
export const Detalles=()=>{
    const value = useContext(DataContext);
    const [productpais] = value.productpais;
    //DETALLES FILTRADOS POR PAIS
    return(
        <div>
            <h1>Pericote el que lo lea</h1>
            {
                productpais.map(pro =>(
                    <ul key={pro.id}>
                        <li>{pro.nombre}</li>
                    </ul>
                ))
            }
        </div>
    )
}