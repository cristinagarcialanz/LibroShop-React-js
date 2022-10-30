import React, { useState, useEffect } from "react";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(e.target);
    //console.dir(e.target.elements.nombre.value);
    //console.dir(e.target.elements.apellido.value);
    console.log({ name, lastName, direccion, telefono, mail });
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

  const handleMouseMove = (e) => {
    //console.log(e.clientX, e.clientY);
};

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  });

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "colum",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <button>Click</button>
      </div>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="nombre"
          placeholder="nombre..."
          onChange={handleChangeName}
          value={name}
        />

        <input
          type="text"
          name="apellido"
          placeholder="apellido..."
          onChange={handleChangeLastName}
          value={lastName}
        />

        <input
          type="text"
          name="direccion"
          placeholder="dirección..."
          onChange={handleChangeDireccion}
          value={direccion}
        />

        <input
          type="text"
          name="telefono"
          placeholder="teléfono..."
          onChange={handleChangeTelefono}
          value={telefono}
        />

        <input
          type="mail"
          name="mail"
          placeholder="mail..."
          onChange={handleChangeMail}
          value={mail}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
