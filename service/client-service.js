//backticks ``
const crearNuevoCliente = (nombre,email)=>{
  const linea = document.createElement("tr")
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  return linea;
};
const table = document.querySelector("[data-table]")


//Abrir http (metodo, url)
//CRUD
//CREATE  ->  METODOS HTTP
//Create  ->  POST
//Read    ->  GET
//Update  ->  PUT/PATCH
//Delete  ->  DELETE
const thenAgrega = (info) =>{
  const informacion = info;
  informacion.forEach((usuarios)=>{
    const nuevoCliente = crearNuevoCliente (usuarios.nombre,usuarios.email);
    table.appendChild(nuevoCliente);
  })
};

const listaClientes = ()=>{
  const promise = new Promise((resolve,reject)=>{
    const http = new XMLHttpRequest();
    http.open("GET","https://my-json-server.typicode.com/jysusog/pet-co-pruebas/db");
    http.send();
    http.onload = ()=>{
    const response = JSON.parse(http.response);
    if(http.status >= 400){
      reject(response)
    }else{
      resolve(response)
    }
    };
  });
  return promise;
};

listaClientes()
  .then((info)=>thenAgrega(info))
  .catch((error)=>alert("Ocurrio un error"));




  //then
  //(info)=>{
  //  info.forEach((usuarios) =>{
  //    const nuevoCliente = crearNuevoCliente(usuarios.nombre,usuarios.email);
  //    table.appendChild(nuevoCliente);
  //  });
  //  }




