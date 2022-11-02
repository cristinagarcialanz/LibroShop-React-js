import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [mailRepeat, setMailRepeat] = useState("");

  const { cart, totalCart, deleteAll } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const order = {
      buyer: { name, lastName, direccion, telefono, mail, mailRepeat },
      items: cart,
      total: totalCart(),
      date: serverTimestamp(),
    };
    // serverTimestamp() es la fecha de la base de datos, no de la computadora(new date)

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((res) => {
        setOrderId(res.id);
        deleteAll();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeDireccion = (e) => {
    setDireccion(e.target.value);
  };

  const handleChangeTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeMailRepeat = (e) => {
    setMailRepeat(e.target.value);
  };

  if (orderId) {
    return (
      <div>
        <h1>Gracias por su compra...</h1>
        <h2>Su número de seguimiento es: {orderId}</h2>
        <h3>Datos: </h3>
        <h3>Productos: </h3>
        <h3>Monto Total: </h3>

        <Link to={`/todos`}>
          <h2 className="mensaje">
            <em>Ir a la Galería de Productos</em>
          </h2>
        </Link>
      </div>
    );
  }

  return (
    <div className="contenedor">
      <h2>Información:</h2>
      <h3>Completa los datos para generar la orden de compra</h3>

      <div className="formulario">
        <form onSubmit={handleSubmit} action="">
          <p>Nombre</p>
          <input
            type="text"
            name="nombre"
            placeholder=" nombre..."
            onChange={handleChangeName}
            value={name}
          />
          <p>Apellido</p>
          <input
            type="text"
            name="apellido"
            placeholder=" apellido..."
            onChange={handleChangeLastName}
            value={lastName}
          />
          <p>Dirección</p>
          <input
            type="text"
            name="direccion"
            placeholder=" dirección..."
            onChange={handleChangeDireccion}
            value={direccion}
          />
          <p>Teléfono</p>
          <input
            type="text"
            name="telefono"
            placeholder=" teléfono..."
            onChange={handleChangeTelefono}
            value={telefono}
          />
          <p>Correo Electrónico</p>
          <input
            type="mail"
            name="mail"
            placeholder=" mail..."
            onChange={handleChangeMail}
            value={mail}
          />
          <p>Repite tu Correo Electrónico</p>
          <input
            type="mailRepeat"
            name="mailRepeat"
            placeholder=" mailRepeat..."
            onChange={handleChangeMailRepeat}
            value={mail}
          />
          <br />
          <div className="checkbox">
            <input type="checkbox" /> <p>Acepto los terminos</p>
          </div>
          <br />
          <button>{loading ? "Enviando" : "Enviar"}</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
