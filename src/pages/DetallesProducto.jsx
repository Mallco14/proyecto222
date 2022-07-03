import React, { useState, useEffect, createContext, useContext } from "react";
import { DataContext } from "../Context/dataProvider";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetallesProducto = () => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito
  const [detallesproductos, setDetallesproductos] = useState({
    id: '',
    nombre: '',
    categoria_id: '',
    pais_id: '',
    precio: '',
    stock: '',
    marca: '',
    talla: '',
    genero: '',
    img_delante: '',
    img_atras: '',
    cantidad: '',
    descripcion: '',
    pub_date: ''
  })
  //PRODUCTO POR ID
  const { id } = useParams();

  useEffect(() => {
    getDetallesProductos();
  }, [detallesproductos])
  const getDetallesProductos = () => {
    axios.get('http://localhost:8081/api/products/' + id + '/').then(response => {
      const detProd = response.data
      setDetallesproductos(detProd)
    })
  }

  return (

    <div className="container border">
      <div class="card mb-3 border p-2">
        <div class="row g-0">
          <div class="col-md-7">
            <img src={detallesproductos.img_delante} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-5">
            <div class="card-body">
              <h3 class="card-title">{detallesproductos.nombre}</h3>
              <br></br>
              <h4 class="card-title">S/.{detallesproductos.precio}</h4>
              <br></br>
              <h5 class="card-text">Marca: {detallesproductos.marca}</h5>
              <br></br>

              <h5 class="card-text">{detallesproductos.descripcion}</h5>
              <br></br>
              <div>
                <button className='btn btn-success' onClick={() => addCarrito(detallesproductos.id)}>Agregar al carrito <i class="bi bi-arrow-right"></i></button>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  )

}