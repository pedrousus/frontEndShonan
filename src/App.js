
import './App.css';
import {useState, useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';


import { Button, Modal } from "react-bootstrap";

import ModalEquipo from './dab';
import './styles.css';

// importaciones necesarias


function App() {
    // constantes que se utilizan para el formulario de empleado y consultas
    const [confirmacionVisible, setConfirmacionVisible] = useState(false);

    const [confirmacionVisible2, setConfirmacionVisible2] = useState(false);
  
  const [file, setfile] = useState(); 
  
  const [softwares, setSoftwares] = useState([]);

  const [shewModal, setShewModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [editSoftwareIndex, setEditSoftwareIndex] = useState(null);
  const [editSoftwareData, setEditSoftwareData] = useState(null);


    // update de Soft
  
  const [editedUsuario, setEditedUsuario] = useState('');
  const [editedContra, setEditedContra] = useState('');

  const [codigoacEdi, setcodigoacEdi] = useState("")

  // post de celulares
  const [IDmovilSmex, setIDmovilSmex] = useState('');
  const [marcaCel, setmarcaCel] = useState("")
  const [modeloMovil, setmodeloMovil] = useState("");
  const [IMEIcel, setIMEI] = useState("")
  const [passMovil, setpassMovil] = useState("");
  const [correoMovil, setcorreoMovil] = useState("")
  const [passCorreo, setpassCorreo] = useState("")
  const [componentesCelular, setcomponentesCelular] = useState("")
  const [renovacionCel, setrenovacionCel] = useState("")


// constantes para el POST de colaborador
  const [imagelist, setimagelist] = useState([])
  const [otherlist, setotherlist] = useState([])
  const [updateli,setlistup]=useState(false)
  const [otherli2,setotherli]=useState(false)
  const [nombre,setnombre]= useState("")
  const [area,setarea]= useState("")
  const [cargo,setcargo]= useState("")
  const [idcolabo,setidcolabo]= useState("")
  const [correop,setcorreop]= useState("")
  const [telefonoper,settelefonoper]= useState("")
  const [smexcorreo,setsmexcorreo]= useState("")


  // imagen seleccionada de la foto
  const [selectedImage, setSelectedImage] = useState(null);

  const [celiimage, setceluimage] = useState(null);
  const [equicola, setequicola] = useState(null)

  // constantes para almacenar el GET del colaborador
  

  const [IDColaborador, setIDColaborador] = useState('');
  const [nombrecola, setnombrecola] = useState('');
  const [getarea,setgetarea]= useState('')
  const [getcargo,setgetcargo]= useState('')
  const [getcorreop,setgetcorreo]= useState('')
  const [getteleper,setgetteleper]= useState("")
  const [getSmexcorreo,setgetSmexcorreo]= useState("")

  // constantes para el GET de equipos

  const [selectedImageequipo, setSelectedImageequipo] = useState(null);
  const [getIDequipo, setgetIDequipo] = useState('');
  const [gettipoDi, setgetTipoD] = useState('');
  const [getmarca,setgetmarca]= useState('')
  const [getmodelo,setgetmodelo]= useState('')
  const [getNoSerieEquipo,setgetNOserieE]= useState('')
  const [getcontraEquipo,setgetcontraEquipo]= useState("")
  const [getcomponentes,setgetcomponentes]= useState("")
  const [getmodifi, setgetmodifi] = useState("")
  const [getstadofisico, setgetstadofisico] = useState("")
  const [detallesget, setdetallesget] = useState("")
  const [getgarantia, setgetgarantia] = useState("")
  const [getFechacompra, setgetFechacompra] = useState("")
  const [getactivo, setgetactivo] = useState("")
  const [getSoperativo, setgetSoperativo] = useState("")
  const [getMAC, setgetMAC] = useState("")
  const [gethostname, setgethostname] = useState("")
  const [getAUX, setgetAUX] = useState("")
  const [getNserieAUX, setgetNserieAUX] = useState("")
  const [idcolaequipo, setidcolaequipo] = useState("")
  const [pantalaget, setpantalaget] = useState("")
  const [serialpantallaget, setserialpantallaget] = useState("")
  


  

  // const para el POST de celulares
  const [IDsoft, setIDsoft] = useState('');
  const [nombresof, setIDmovil] = useState('');
  const [usuario, setUsuario] = useState('');
  const [constrasenasof, setContraSoft] = useState('');
  const [codigoacc, setCodiAccess] = useState('');

  // actualizar states

  const handleOpenMod = (index) => {
    setEditSoftwareIndex(index);
    setEditSoftwareData(softwares[index]);
    setShewModal(true);
  };

  const handleCloseModalo = () => {
    setShewModal(false);
  };
  


  const [selectedFunction, setSelectedFunction] = useState(null);


  // inicio de logica para el modal del formulario
  const [showModal, setShowModal] = useState(false);
  const [menumodal, setmenumodal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showeqModal, setShoweqModal] = useState(false);
  const [showcelModal, setshowcelmodal] = useState(false);


  const handleCloseModalox = () => setshowcelmodal(false);
  
  const handleOpenModalCel = () => {
    handleCloseModalox();
    setshowcelmodal(true);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    handleCloseModal();
    setShowModal(true);
  };

  const menumodalcerrar = () => setmenumodal(false);
  const menumodalabrir = () => setmenumodal(true);

  const handleOpenFormModal = () => setShowFormModal(true);

  const handleOpeneqModal = () => setShoweqModal(true);



  
  // cambio de lista
  const [showingImageList, setShowingImageList] = useState(true);

  const toggleList = () => {
    setShowingImageList(!showingImageList);
  };



  const selectedHandler=e=>{
    setfile(e.target.files[0])
  }
  


  // seleccionar nmbre del colaborador
  const selectImageHandler = id => {
    fetch(`http://localhost:5000/images/get/${id}`)
      .then(res => res.json())
      .then(res => {
        setEditMode(false);
        setShowButton(false);
        setSelectedImage(`data:${res.mimetype};base64,${res.data}`);
        setIDColaborador(res.idcolabo);
        setnombrecola(res.nombre); 
        setgetarea(res.area);
        setgetcargo(res.cargo);
        setgetcorreo(res.correop);
        setgetteleper(res.telefonoper);
        setgetSmexcorreo(res.correosmex);

        setSelectedFunction('selectImage');
        selectCelu(res.idcolabo);
        selecteqCola(res.idcolabo) // Llamamos a la función selectCelu y pasamos el idcolabo como argumento
      })
      .catch(err => console.error(err));
  };
  
  const selectCelu = idex => {
    fetch(`http://localhost:5000/images/getxx/${idex}`)
      .then(res => res.json())
      .then(res => {
        if (res.data && res.data.length > 0) {
          const mobiles = res.data.map(mobile => ({
            image: `data:${mobile.mimetype};base64,${mobile.data}`,
            marca: mobile.marca,
            idmovil: mobile.idmovil,
            modelo:mobile.modelo,
            imei:mobile.imei,
            pass:mobile.pass,
            correomo:mobile.correomo,
            passcorreo:mobile.passcorreo,
            compocel:mobile.compocel,
            renovacioncel:mobile.renovacioncel
          }));
          setceluimage(mobiles);
        } else {
          setceluimage([]); // No hay imágenes disponibles
        }
      })
      .catch(err => {
        console.error(err);
        setceluimage([]); // Manejo del error estableciendo un array vacío
      })
      .finally(() => {
         // Vaciar el valor de idex al final de la ejecución
      });
  };

  const selecteqCola = idex => {
    fetch(`http://localhost:5000/images/getxxequi/${idex}`)
      .then(res => res.json())
      .then(res => {
        if (res.data && res.data.length > 0) {
          const equi = res.data.map(equi => ({
            image: `data:${equi.mimetype};base64,${equi.data}`,
            IDequipo:equi.IDequipo,
            tipoDispositivo:equi.tipoDispositivo,
            modelo:equi.modelo,
            marca:equi.marca,
            NoSerieEquipo:equi.NoSerieEquipo
          }));
          setequicola(equi);
        } else {
          setequicola([]); // No hay imágenes disponibles
        }
      })
      .catch(err => {
        console.error(err);
        setequicola([]); // Manejo del error estableciendo un array vacío
      })
      .finally(() => {
         // Vaciar el valor de idex al final de la ejecución
      });
  };
  
  const selectequipo = id => {
    fetch(`http://localhost:5000/images/geto/${id}`)
    .then(res => res.json())
    .then(res => {
      setEditMode(false);
      setShowButton(false);
      setSelectedImageequipo(`data:${res.mimetype};base64,${res.data}`);
      setgetTipoD(res.tipoDispositivo);
      setgetIDequipo(res.IDequipo);
      setgetmarca(res.marca); 
      setgetmodelo(res.modelo);
      setgetNOserieE(res.NoSerieEquipo);
      setgetcontraEquipo(res.ContrasenaEquipo);
      setgetcomponentes(res.componentes);
      setgetmodifi(res.modificaciones);
      setgetstadofisico(res.estadofisico);
      setdetallesget(res.detallesIncidentes);
      setgetgarantia(res.garantia);
      setgetFechacompra(res.fechaCompra);
      setgetactivo(res.activo);
      setgetSoperativo(res.S_Operativo);
      setgetMAC(res.MAC);
      setgethostname(res.hostname);
      setgetAUX(res.AUX);
      setgetNserieAUX(res.N_SerieAux);
      setpantalaget(res.Pantalla);
      setserialpantallaget(res.SerialPantalla);
      setidcolaequipo(res.IDcola)
      

      

      setSelectedFunction('selectEquipo');

      selectsoft(res.IDequipo);
      
    })
    .catch(err => console.error(err));
};

const selectsoft = idex => {
  fetch(`http://localhost:5000/images/getxxoo/${idex}`)
    .then(res => res.json())
    .then(res => {
      if (res.data) {
        const softwares = res.data.map(software => ({
          nombreSoft: software.nombreSoft,
          usuario: software.usuario,
          contrasena: software.contrasena,
          IDsoft:software.IDsoft,
          codigoAcess:software.codigoAcess
          
          
        }));
        setSoftwares(softwares);
      
      } else {
        setSoftwares([]);
      }
    })
    .catch(err => {
      console.error(err);
      setSoftwares([]); // Manejo del error estableciendo un array vacío
    })
    .finally(() => {
       // Vaciar el valor de idex al final de la ejecución
    });
};

  const borrarEmpleado = () => {
    
    const idcolax=IDColaborador;
    fetch(`http://localhost:5000/images/delete/${idcolax}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // La imagen se eliminó exitosamente
          // Aquí puedes realizar cualquier acción adicional necesaria
          window.location.reload(); // Refrescar la pantalla
        } else {
          // Hubo un error al eliminar la imagen
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
      })
      .catch(error => {
        // Hubo un error de red u otro error relacionado con la solicitud
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      });
  };


  const borrarEquipo = () => {
    
    const idcolax=getIDequipo;
    fetch(`http://localhost:5000/images/deleteequip/${idcolax}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // La imagen se eliminó exitosamente
          // Aquí puedes realizar cualquier acción adicional necesaria
          window.location.reload(); // Refrescar la pantalla
        } else {
          alert("Borra todos los softwares relacionados primero")
          setConfirmacionVisible2(false)
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        }
      })
      .catch(error => {
        // Hubo un error de red u otro error relacionado con la solicitud
        // Aquí puedes manejar el error de acuerdo a tus necesidades
      });
  };
  
  


    
  // esta funcion valida los campos y los sube en caso de estar llenados correctamente 
  const sendHandler = (event) => {
    event.preventDefault();
    
    if (idcolabo.trim() === "" || nombre.trim() === "" || area.trim() === "" || cargo.trim() === "" || correop.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    } else {
      const formdata = new FormData();
      formdata.append("idcolabo", idcolabo);
      formdata.append("nombre", nombre);
      formdata.append("area", area);
      formdata.append("cargo", cargo);
      formdata.append("correop", correop);
      formdata.append("telefonoper", telefonoper);
      formdata.append("smexcorreo", smexcorreo);
      formdata.append("image", file);
      
      fetch('http://localhost:5000/images/post', {
        method: 'POST',
        body: formdata
      })
      .then(res => res.text())
      .then(res => {
        console.log(res);
        setlistup(true);
        alert("Empleado Subido");
        setShowModal(false);
        document.getElementById('fileinput').value = null;
        setfile(null);
        setShoweqModal(false)
        setShowModal(false)
        setmenumodal(false)
      })
    }
  }

  const soft = (event) => {
    event.preventDefault();
    
    if (nombresof.trim() === "" || usuario.trim() === "" || constrasenasof.trim() === "" || codigoacc.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    } else {
      const formdata = new FormData();
      formdata.append("IDsoft", IDsoft);
      formdata.append("nombresof", nombresof);
      formdata.append("usuario", usuario);
      formdata.append("constrasenasof", constrasenasof);
      formdata.append("codigoacc", codigoacc);
      formdata.append("getIDequipo", getIDequipo);
      
      fetch('http://localhost:5000/im/soft', {
        method: 'POST',
        body: formdata
      })
      .then(res => res.text())
      .then(res => {
        console.log(res);
        alert("Empleado Subido");
        
        console.log(nombresof,usuario,constrasenasof,codigoacc,getIDequipo)
        setShoweqModal(false)
        setIDsoft(null);
        selectsoft("")
        selectsoft(getIDequipo)
      });
    }
  }


  const celu = (event) => {
    event.preventDefault();
    
    if (IDmovilSmex.trim() === "" || marcaCel.trim() === "" || modeloMovil.trim() === "" || IMEIcel.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    } else {
      const formdata = new FormData();
      formdata.append("IDmovilSmex", IDmovilSmex);
      formdata.append("marcaCel", marcaCel);
      formdata.append("modeloMovil", modeloMovil);
      formdata.append("IMEIcel", IMEIcel);
      formdata.append("passMovil", passMovil);
      formdata.append("correoMovil", correoMovil);
      formdata.append("passCorreo", passCorreo);
      formdata.append("componentesCelular", componentesCelular);
      formdata.append("renovacionCel", renovacionCel);
      formdata.append("IDColaborador", IDColaborador);
      formdata.append("image", file);
      
      fetch('http://localhost:5000/im/celu', {
        method: 'POST',
        body: formdata
      })
      .then(res => res.text())
      .then(res => {
        console.log(res);
        alert("Empleado Subido");
        console.log()
        document.getElementById('fileinput').value = null;
        setfile(null);
        setshowcelmodal(false)
        selectCelu(IDColaborador);
      })
    }
  }
  
  const [editMode, setEditMode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const botonedit = () => {
    setEditMode(!editMode);
    setShowButton(!showButton);
  };


  
  // Realizar la solicitud PUT con manejo de errores
  const update = async (e) => {
    e.preventDefault();
  
    const idcola = IDColaborador;
    const updatedData = {
      getarea: getarea || '',
      getcargo: getcargo || '',
      getcorreop: getcorreop || '',
      getteleper: getteleper || '',
      getSmexcorreo: getSmexcorreo || '',
    };
  
    try {
      const response = await fetch(`http://localhost:5000/images/update/${idcola}`, {
        method: 'PUT', // Adjust the HTTP method accordingly (PUT, PATCH, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        // Update successful, show success message
        console.log('Update successful');
        setEditMode(false);
        setShowButton(false);

        // Or display a success message to the user
        // alert('Update successful');
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      // Or display an error message to the user
      // alert('Update failed');
    }
  };

  const updateequipo = async (e) => {
    e.preventDefault();
  
    const idequip = getIDequipo;
    const updatedData = {
      gettipoDi: gettipoDi || '',
      getmarca: getmarca || '',
      getmodelo: getmodelo || '',
      getNoSerieEquipo: getNoSerieEquipo || '',
      getcontraEquipo: getcontraEquipo || '',
      getmodifi: getmodifi || '',
      getstadofisico:getstadofisico||'',
      detallesget:detallesget||'',
      getgarantia:getgarantia||'',
      getSoperativo:getSoperativo||'',
      getMAC:getMAC||'',
      gethostname:gethostname||"",
      getAUX:getAUX||"",
      getNserieAUX:getNserieAUX||"",
      pantalaget:pantalaget||"",
      serialpantallaget:serialpantallaget||"",
      idcolaequipo:idcolaequipo||""
    };
  
    try {
      const response = await fetch(`http://localhost:5000/images/update2/${idequip}`, {
        method: 'PUT', // Adjust the HTTP method accordingly (PUT, PATCH, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        // Update successful, show success message
        console.log('Update successful');
        setEditMode(false);
        setShowButton(false);

        // Or display a success message to the user
        // alert('Update successful');
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      // Or display an error message to the user
      // alert('Update failed');
    }
  };
  
  const handleUpdateData =async (e) => {

    e.preventDefault();
    const IDsofto = editSoftwareData.IDsoft;
    const updatedData = {
      
      editedUsuario: editedUsuario ||editSoftwareData.usuario,
      editedContra: editedContra || editSoftwareData.contrasena,
      codigoacEdi: codigoacEdi || editSoftwareData.codigoAcess,
      
    };
    try {
      const response = await fetch(`http://localhost:5000/images/update3/${IDsofto}`, {
        method: 'PUT', // Adjust the HTTP method accordingly (PUT, PATCH, POST, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (response.ok) {
        // Update successful, show success message
        console.log('Update successful');
        setEditMode(false);
        setShowButton(false);
        
        // Or display a success message to the user
        // alert('Update successful');
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      // Handle the error appropriately
      console.error(error);
      // Or display an error message to the user
      // alert('Update failed');
    }
    // Realiza la lógica para actualizar los datos utilizando editedUsuario y editedContra
    // Puedes enviar los datos a un servidor, actualizar un estado global, etc.
    console.log('Usuario actualizado:', editedUsuario);
    console.log('Contraseña actualizada:', editedContra);
    console.log('ID', IDsoft);
    selectsoft(getIDequipo);
    // Limpia los valores de los inputs
    setEditedUsuario('');
    setEditedContra('');

    // Cierra el modal
    setShewModal(false);
  };

  

  
  const handleDeleteUser = (index) => {
    const updatedMobiles = [...softwares];
    const mobileToDelete = updatedMobiles[index];
  
    if (!mobileToDelete || !mobileToDelete.IDsoft) {
      console.error('Error al eliminar el móvil: ID no encontrado');
      return;
    }
  
    const id = mobileToDelete.IDsoft;
  
    fetch(`http://localhost:5000/images/deletexx3/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          updatedMobiles.splice(index, 1);
          setceluimage(updatedMobiles);
        } else {
          throw new Error('Error al eliminar el móvil');
        }
      })
      .catch(error => {
        console.error(error);
        // Manejar el error aquí
      });
      selectsoft(getIDequipo);
  };
  
  
  
  const handleDeleteMobile = (index) => {
    const updatedMobiles = [...celiimage];
    const mobileToDelete = updatedMobiles[index];
  
    if (!mobileToDelete || !mobileToDelete.idmovil) {
      console.error('Error al eliminar el móvil: ID no encontrado');
      return;
    }
  
    const id = mobileToDelete.idmovil;
  
    fetch(`http://localhost:5000/images/deletexx2/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          updatedMobiles.splice(index, 1);
          setceluimage(updatedMobiles);
        } else {
          throw new Error('Error al eliminar el móvil');
        }
      })
      .catch(error => {
        console.error(error);
        // Manejar el error aquí
      });
      selectCelu(IDColaborador);
  };
  
  
  
            
            const filteredImageList = imagelist.filter((img) =>
            img.nombre.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const filteredOtherList = otherlist.filter((img) =>
            img.IDequipo.toLowerCase().includes(searchTerm.toLowerCase())
          );

  




            useEffect(() => {
              fetch('http://localhost:5000/images/get')
              .then(res=>res.json())
              .then(res=> setimagelist(res))
              
              .catch(err=>{
                console.error(err)
              })
              setlistup(false)
              fetch('http://localhost:5000/images/geto')
              .then(res=>res.json())
              .then(res=> setotherlist(res))
              
              .catch(err=>{
                console.error(err)
              })
              setotherli(false)
              selectsoft();
            }, [updateli,otherli2],[])
                
            const [theme, setTheme] = useState('light');

            const toggleTheme = () => {
              const newTheme = theme === 'light' ? 'dark' : 'light';
              setTheme(newTheme);
            };
  return (
  
              <> 
              <div className={`body ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
              <div>
  <nav className="navbar" id="navo">
    <div className="row">
      <div className="container col-4">
        <img src="/images/si.jpg" alt="Descripción de la imagen" />
      </div>
      <div className="container col-4 d-flex justify-content-end">
        <button onClick={toggleTheme} className="btn">Cambiar Tema</button>
      </div>
    </div>
  </nav>
</div>




              
              <div className={` container `}>
                <div className='row '>
                <div className='col-4 '>
  <nav className="navbar navbar-expand  mt-5 ">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav flex-column flex-grow-1">
        <div class="input-group mb-3">
          <nav class="navbar">
            <div class="container-fluid">
              <form class="d-flex">
                <input
                  className="form-control me-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success" type="button" onClick={menumodalabrir}>
                  Nuevo
                </button>
              </form>
            </div>
          </nav>

          {/* modal para el celular */}
          <Modal show={menumodal} onHide={menumodalcerrar}>
            <Modal.Header closeButton>
              <Modal.Title>Agregar elemento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-grid gap-2">
                <Button variant="outline-success" onClick={handleShowModal} size="lg">
                  Añadir Colaborador
                </Button>
                <Button variant="outline-success" onClick={handleOpenFormModal} size="lg">
                  Añadir Equipo de computo
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={menumodalcerrar}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <hr />

        {/* esta lista se genera tomando como valor el nombre en la base de datos */}
        <>
          <li className="nav-item flex-grow-1">
            {showingImageList ? (
              <>
                <h3 className='text-center mb-2'>Colaboradores</h3>
                <ul className="image-list">
                  {filteredImageList.map((img) => (
                    <li key={img.id} className="image-item">
                      <button onClick={() => selectImageHandler(img.id)} className="image-button">
                        {img.nombre}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h3 className='text-center mb-2'>Equipos</h3>
                <ul className="other-list">
                  {filteredOtherList.map((img) => (
                    <li key={img.id} className="other-item">
                      <button onClick={() => selectequipo(img.id)} className="other-button">
                        {img.IDequipo}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
          <br />
          <Button variant="" className=' btn-outline-success' onClick={toggleList}>
            Cambiar de lista
          </Button>
        </>
      </ul>
    </div>
  </nav>
</div>

              <br/>
              <>
      <Modal size='lg' show={showFormModal} onHide={() => setShowFormModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalEquipo  /> {/* Reemplaza con el nombre correcto del componente del formulario */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFormModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    {/*  modal para el cel */}
            <>
    <Modal show={showcelModal} onHide={() => setshowcelmodal(false)}>
        <Modal.Header >
          <Modal.Title>Formulario Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card text-center " id="">
                <form onSubmit={celu} enctype="multipart/form-data">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      ID telofono SMEX
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setIDmovilSmex(event.target.value)}
                      className="form-control"
                      placeholder="ID unico para telefono de SMEX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Marca
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setmarcaCel(event.target.value)}
                      className="form-control"
                      placeholder="Marca del telefono SMEX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Modelo
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setmodeloMovil(event.target.value)}
                      className="form-control"
                      placeholder="Modelo del telefono SMEX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      IMEI
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setIMEI(event.target.value)}
                      className="form-control"
                      placeholder="IMEI del telefono SMEX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Contraseña o PIN
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setpassMovil(event.target.value)}
                      className="form-control"
                      placeholder="Contraseña o PIN de seguridad del dispositivo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Correo Asociado
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setcorreoMovil(event.target.value)}
                      className="form-control"
                      placeholder="Correo asociado al dispositivo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Contraseña del correo 
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setpassCorreo(event.target.value)}
                      className="form-control"
                      placeholder="Contraseña del correo asociado"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Componentes del celular
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setcomponentesCelular(event.target.value)}
                      className="form-control"
                      placeholder="Componentes del celular "
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Renovacion del equipo
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setrenovacionCel(event.target.value)}
                      className="form-control"
                      placeholder="Renovacion del equipo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Fotografia:
                    </span>
                    <input
                    id="fileinput"
                      type="file"
                      onChange={selectedHandler}
                      className="form-control"
                      aria-label="Fotografia"
                      accept="image/*"
                    />
                  </div>
                  <div className=" ">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        ID del propietario actual 
                        </span>
                        <input
                        type="text"
                        value={IDColaborador}
                        
                        className="form-control disabled"
                        placeholder="ID del Equipo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled/>
                    </div>
                </div>
                <div className="card-footer text-body-secondary" id="mon2">
                  <button onClick={celu} className="btn btn-success">
                    Registrar
                  </button>
                </div>
                </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshowcelmodal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>

          <div className='container mt-5 col-8' id='fondo'>

            {/* inicio del modal y logica del formulario */}
          <>
                    <Modal  size='lg' show={showModal} onHide={handleCloseModal}>
            <div className="card text-center">
              <form onSubmit={sendHandler} enctype="multipart/form-data">
                <div className="card-header">Lista preliminar</div>
                <div className="card-body" id="mon">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      ID empleado:
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setidcolabo(event.target.value)}
                      className="form-control"
                      placeholder="ID del colaborador"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Nombre empleado:
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setnombre(event.target.value)}
                      className="form-control"
                      placeholder="Nombre completo"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Area
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setarea(event.target.value)}
                      className="form-control"
                      placeholder="Area "
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Cargo
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setcargo(event.target.value)}
                      className="form-control"
                      placeholder="Cargo Actual "
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Correo
                    </span>
                    <input
                      type="email"
                      onChange={(event) => setcorreop(event.target.value)}
                      className="form-control"
                      placeholder="Correo Personal"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Telefono Personal
                    </span>
                    <input
                      type="number"
                      onChange={(event) => settelefonoper(event.target.value)}
                      className="form-control"
                      placeholder="Telefono Personal"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Correo SMex
                    </span>
                    <input
                      type="text"
                      onChange={(event) => setsmexcorreo(event.target.value)}
                      className="form-control"
                      placeholder="Telefono Personal"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                    Fotografia:
                    </span>
                    <input
                    id="fileinput"
                      type="file"
                      onChange={selectedHandler}
                      className="form-control"
                      aria-label="Fotografia"
                      accept="image/*"
                    />
                  </div>
                  
                </div>
                <div className="card-footer text-body-secondary" id="mon2">
                  <button onClick={sendHandler} className="btn btn-success">
                    Registrar
                  </button>
                </div>
              </form>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </div>
          </Modal>

        </>
               {/*  fin del modal */}

        
              {selectedFunction === 'selectImage'  && (
  <div className='container'>
    <div className='row mt-3'>
      <div className='col-5'>
        <img
          className='img-fluid rounded mx-auto d-block'
          src={selectedImage}
          alt="Imagen seleccionada"
          style={{ width: '200px', height: '200px' }}
        />
        <br/>
        <center>
        <button onClick={botonedit} className='btn btn-primary m-lg-2'>
                    Editar
                  </button>
        <button onClick={() => setConfirmacionVisible(true)} className='btn btn-danger'>Borrar</button>
        
        </center>
        {confirmacionVisible && (
        <Modal show={confirmacionVisible} onHide={() => setConfirmacionVisible(false)}>
          <Modal.Header>
          <div className="text-center">
            <center>
                <p className='text-center'>¿Estás seguro de que deseas borrar a este colaborador?</p>
              </center>
              </div>
          </Modal.Header>
          <Modal.Body>
            
        
          <div class="d-grid gap-2">
          <button type="button" className="btn btn-danger" onClick={borrarEmpleado}>
                  Borrar
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setConfirmacionVisible(false)}>
                  Cancelar
                </button>
                
          </div>    
            
          </Modal.Body>
        </Modal>
        
        
      )}
        <tr/><tr/>
      </div>
      <div className='col-7'>
        <div>
          <form onSubmit={update} enctype="multipart/form-data">
        <p>ID Colaborador:   <strong>{IDColaborador}</strong> </p>
        
        <p>Nombre del colaborador:  <strong>{nombrecola}</strong> </p>
        
        <p>Area de trabajo: {!editMode ? <strong>{getarea}</strong> : 
            <input type="text" 
            value={getarea} onChange={e => setgetarea(e.target.value)} />}
        </p>
        <p>Cargo Actual: {!editMode ? <strong>{getcargo}</strong> : 
            <input type="text" 
            value={getcargo} onChange={e => setgetcargo(e.target.value)} />}
        </p>
        <p>Correo Personal: {!editMode ? <strong>{getcorreop}</strong> : 
            <input type="text" 
            value={getcorreop} onChange={e => setgetcorreo(e.target.value)} />}
        </p>
        <p>Telefono Personal: {!editMode ? <strong>{getteleper}</strong> : 
            <input type="text"
            value={getteleper} onChange={e => setgetteleper(e.target.value)} />}
        </p>
        <p>Correo SMex: {!editMode ? <strong>{getSmexcorreo}</strong> : 
            <input type="text"
            value={getSmexcorreo} onChange={e => setgetSmexcorreo(e.target.value)} />}
        </p>
        </form>
      </div>
      </div>
      <br/><br/>
    </div>
    <div>
      <center>
  <br/>
        {showButton && <button className='btn btn-success' onClick={update}>Confirmar los cambios</button>}

        </center>
      </div>
      <center>
      <Button variant="" onClick={handleOpenModalCel}  className=' btn-success mt-5'>
                      Añadir un equipo movil
                        </Button>
      </center>
                        <br/>
  <div className='container'>
  
  {selectCelu && Array.isArray(celiimage) && celiimage.length > 0 ? (
    
  <div>
    <h3 className='text-center'>Celulares SMex</h3>
    {celiimage.map((mobile, index) => (
      
      <div className='row' key={index}>
        <div>
          
        </div>
        <div className='col-6 mt-4'>
          <center>
              <p>ID del telefono: <strong>{mobile.idmovil}</strong></p>
              </center>
          <div className='row'>
              <p className='col-6'>Marca: <strong>{mobile.marca}</strong></p>
              <p className='col-6'>Modelo: <strong>{mobile.modelo}</strong></p>
          </div>
          <div className='row'>
              <p className='col-6'>IMEI: <strong>{mobile.imei}</strong></p>
              <p className='col-6'>PIN o contraseña: <strong>{mobile.pass}</strong></p>
          </div>
          <div className='row'>
              <p className='col-6'>Correo asociado: <strong>{mobile.correomo}</strong></p>
              <p className='col-6'>Contraseña del correo: <strong>{mobile.passcorreo}</strong></p>
          </div>
          <div className='row'>
              <p className='col-6'>Componentes del equipo: <strong>{mobile.compocel}</strong></p>
              <p className='col-6'>Fecha de renovacion: <strong>{mobile.renovacioncel}</strong></p>
          </div>
        
        </div>
        <div className='col-6 mt-4'>
          <img
            className='img-fluid rounded mx-auto d-block'
            src={mobile.image}
            alt="Imagen seleccionada"
            style={{ width: '200px', height: '200px' }}
          />
          <center>
          <button className='btn btn-danger mt-2' onClick={() => handleDeleteMobile(index)}>Eliminar</button>
          </center>
        </div>
      </div>
    ))}
  </div>
) : (
  <h4>Esta persona no dispone de equipo movil actualmente proporcionado por la empresa</h4>
)}
<br/>


  </div>
  <div className='container'>
  {selecteqCola && Array.isArray(equicola) && equicola.length > 0 ? (
  <div>
    <h2>Resumen del equipo de computo que usa actualmente</h2>
    {equicola.map((equi, index) => (
      
      <div className='row mt-5' key={index}>
        
        
        <div className='col-6 mb-4'>
          <img
            className='img-fluid rounded mx-auto d-block'
            src={equi.image}
            alt="Imagen seleccionada"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
        <div className='col-6 mb-4'>
        <p>ID del equipo:  <strong>{equi.IDequipo}</strong></p>
        <p>Tipo de dispositivo: <strong>{equi.tipoDispositivo}</strong></p>
        <p>Marca:  <strong>{equi.marca}</strong></p>
        <p>Modelo:  <strong>{equi.modelo}</strong></p>
        <p>Numero de serie <strong>{equi.NoSerieEquipo}</strong></p>
        </div>
        <br/>
      </div>
      
    ))}
  </div>
  
) : (
  <p>Esta persona no dispone de equipo de computo actualmente proporcionado por la empresa</p>
)}



  </div>
  
  </div>
  
)}
  {selectedFunction === 'selectEquipo' && (
  <div className='container'>
    <div className='row mt-3'>
      <div className='col-5'>
        <img
          className='img-fluid rounded mx-auto d-block'
          src={selectedImageequipo}
          alt="Imagen seleccionada"
          style={{ width: '200px', height: '200px' }}
        />
        <br/>
        <center>
        
        <button onClick={botonedit} className='btn btn-primary m-lg-2'>
                    Editar
                  </button>
          <button onClick={() => setConfirmacionVisible2(true)} className='btn btn-danger'>
            Borrar</button>
        </center>
        {confirmacionVisible2 && (
        <Modal show={confirmacionVisible2} onHide={() => setConfirmacionVisible2(false)}>
          <Modal.Header>
          <div className="">
                <p>¿Estás seguro de que deseas borrar este equipo?</p>
              </div>
          </Modal.Header>
          <Modal.Body>
            
        
          <div class="d-grid gap-2">
          <button type="button" className="btn btn-danger" onClick={borrarEquipo}>
                  Borrar
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setConfirmacionVisible2(false)}>
                  Cancelar
                </button>
                
          </div>    
            
          </Modal.Body>
        </Modal>
        
        
      )}
        <tr/><tr/>
      </div>
      <div className='col-7'>
        <div>
          <form onSubmit={updateequipo} enctype="multipart/form-data">
        <p>ID del equipo   <strong>{getIDequipo}</strong> </p>

        <p>Tipo de dispositivo   <strong>{gettipoDi}</strong> </p>
        
        <p>Marca:  <strong>{getmarca}</strong> </p>
        
        <p>Modelo:  <strong>{getmodelo}</strong> : 
          
        </p>
        <p>No. de seria del quipo:<strong>{getNoSerieEquipo}</strong> : 
        </p>
        <p>Contraseña del equipo: {!editMode ? <strong>{getcontraEquipo}</strong> : 
            <input type="text" 
            value={getcontraEquipo} onChange={e => setgetcontraEquipo(e.target.value)} />}
        </p>
    
        
        </form>
      </div>
      </div>
      <div className='row'>
      <div className='container  mt-4'>
      <form onSubmit={updateequipo} enctype="multipart/form-data">
      <p className='' style={{ wordWrap: 'break-word', maxWidth: '600px', textAlign: 'left' }}>
  Lista de componentes: {!editMode ? <strong>{getcomponentes}</strong> :
    <textarea type="text" 
            cols={80}
            rows={3}
      value={getcomponentes}
      onChange={e => setgetcomponentes(e.target.value)}
    />
  }
</p>
<p>Modificaciones: {!editMode ? <strong>{getmodifi}</strong> : 
            <input type="text" 
            value={getmodifi} onChange={e => setgetmodifi(e.target.value)} />}
        </p>
        <p>Estado Fisico actual: {!editMode ? <strong>{getstadofisico}</strong> : 
            <input type="text" 
            value={getstadofisico} onChange={e => setgetstadofisico (e.target.value)} />}
        </p>
        <p>Detalles o incidentes: {!editMode ? <strong>{detallesget}</strong> : 
            <input type="text" 
            value={detallesget} onChange={e => setdetallesget (e.target.value)} />}
        </p>
        <p>Garantia: {!editMode ? <strong>{getgarantia}</strong> : 
            <input type="text" 
            value={getgarantia} onChange={e => setgetgarantia (e.target.value)} />}
        </p>
        <p>Fecha de compra del equipo: <strong>{getFechacompra}</strong> 
        </p>
        <p>Activo: <strong>{getactivo}</strong> 
        </p>
        <p>Sistema operativo actual: {!editMode ? <strong>{getSoperativo}</strong> : 
            <input type="text" 
            value={getSoperativo} onChange={e => setgetSoperativo (e.target.value)} />}
        </p>
         <p>Direccion MAC: {!editMode ? <strong>{getMAC}</strong> : 
            <input type="text" 
            value={getMAC} onChange={e => setgetMAC (e.target.value)} />}
        </p>
        <p>Hostname actual del equipo: {!editMode ? <strong>{gethostname}</strong> : 
            <input type="text" 
            value={gethostname} onChange={e => setgethostname (e.target.value)} />}
        </p>
        <p>Auxiliares que se usan actualmente con el equipo: {!editMode ? <strong>{getAUX}</strong> : 
            <textarea type="text" 
            cols={80}
            rows={3} 
            value={getAUX} onChange={e => setgetAUX (e.target.value)} />}
        </p>
         <p>Serial de los Auxiliares: {!editMode ? <strong>{getNserieAUX}</strong> : 
            <textarea type="text" 
            cols={80}
            rows={3} 
            value={getNserieAUX} onChange={e => setgetNserieAUX (e.target.value)} />}
        </p>
        <p>Monitor actual o monitores: {!editMode ? <strong>{pantalaget}</strong> : 
            <textarea type="text" 
            cols={80}
            rows={3} 
            value={pantalaget} onChange={e => setpantalaget (e.target.value)} />}
        </p>
        <p>Serial del monitor/es: {!editMode ? <strong>{serialpantallaget}</strong> : 
            <input type="text" 
            value={serialpantallaget} onChange={e => setserialpantallaget (e.target.value)} />}
        </p>
        <p>ID del colaborador actual: {!editMode ? <strong>{idcolaequipo}</strong> : 
            <input type="text" 
            value={idcolaequipo} onChange={e => setidcolaequipo (e.target.value)} />}
        </p>

      </form>
       </div>
          </div>
      
      <br/><br/>
    </div>
    <center>
    <div>
    
        {showButton && <button className='btn btn-success' onClick={updateequipo}>Confirmar los cambios</button>}
      </div>
      </center>
      

                  <>
      <Modal size='lg' show={showeqModal} onHide={() => setShoweqModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <form onSubmit={soft} enctype="multipart/form-data">

            <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        ID del software
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setIDsoft(event.target.value)}
                        className="form-control"
                        placeholder="ID unico del Software"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>

            <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Nombre del Software
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setIDmovil(event.target.value)}
                        className="form-control"
                        placeholder="Nombre del Software"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>

              <div className='row'>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        Usuario
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setUsuario(event.target.value)}
                        className="form-control"
                        placeholder="Usuario para el acceso del software"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        Contraseña
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setContraSoft(event.target.value)}
                        className="form-control"
                        placeholder="Contraseña de acceso para el software"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                
              </div>
              <div className='row'>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        Codigo de acceso
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setCodiAccess(event.target.value)}
                        className="form-control"
                        placeholder="Codigo de acceso en caso de necesitar"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                  />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        ID del equipo
                        </span>
                        <input
                        type="text"
                        value={getIDequipo}
                        
                        className="form-control disabled"
                        placeholder="ID del Equipo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        disabled/>
                    </div>
                </div>
                <button className='btn btn-success'onClick={soft}>Añade el software</button>
              </div>
              
            </form>
          </div> {/* Reemplaza con el nombre correcto del componente del formulario */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShoweqModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <br/>
    <div className='container'>
      <div className='row'>
        <center>
                  <button onClick={handleOpeneqModal} className='btn btn-success'>
                    Añadir Software
                  </button>
        </center>

      </div>

    </div>
    
    
    <div>
    


      
    </div>

    {selectsoft && Array.isArray(softwares) && softwares.length > 0 ? (
  <div className='mt-5'>
    {softwares.map((software, index) => (
      <div className='row' key={index}>
        <div className='col-8 mt-4'>
          <p>Nombre del software: <strong>{software.nombreSoft}</strong></p>
          <p>Usuario: <strong>{software.usuario}</strong></p>
          <p>Contraseña actual: <strong>{software.contrasena}</strong></p>
          <p>Codigo de acceso (en caso de aplicar): <strong>{software.codigoAcess}</strong></p>

          
        </div>
        <div className='col-4 mt-4'>
        <div class="d-flex justify-content-end d-grid gap-2">
        <button className='btn btn-secondary' onClick={() => handleOpenMod(index)}>Editar</button>
          <button className='btn btn-danger' onClick={() => handleDeleteUser(index)}>Eliminar</button>
          
          {/* Otras secciones de visualización de datos relacionados con el software */}
          </div>
        </div>
      </div>
    ))}

    {/* Modal para editar el software */}
    {editSoftwareIndex !== null && editSoftwareData && (
      <Modal show={shewModal} onHide={handleCloseModalo} >
        <Modal.Header closeButton>
          <Modal.Title>Editar Software</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
          <form onSubmit={handleUpdateData} enctype="multipart/form-data">
          <div className='input-group mb-3'>
              <span className="input-group-text" id="basic-addon1">
                    ID del software
                    </span>
          <input
            value={editSoftwareData.IDsoft}
            className='form-control disabled'
            
            disabled/>
          </div>
          <div className='input-group mb-3'>
              <span className="input-group-text" id="basic-addon1">
                    Nuevo Usuario
                    </span>
          <input
            placeholder={editSoftwareData.usuario}
            className='form-control'
            onChange={(event) => setEditedUsuario(event.target.value)}
          />
          </div>
          <div className='input-group mb-3'>
              <span className="input-group-text" id="basic-addon1">
                    Nueva contraseña
                    </span>
          <input
            placeholder={editSoftwareData.contrasena}
            className='form-control'
            onChange={(event) => setEditedContra(event.target.value)}
          />
          </div>
          <div className='input-group mb-3'>
              <span className="input-group-text" id="basic-addon1">
                    Nuevo codigo de acceso 
                    </span>
          <input
            placeholder={editSoftwareData.codigoAcess}
            className='form-control'
            onChange={(event) => setcodigoacEdi(event.target.value)}
          />
          </div>
          
          {/* Agrega aquí los campos de edición dentro del modal */}
          <div class="d-grid gap-2">
          <button className='btn btn-success' onClick={handleUpdateData}>Guardar cambios</button>
          </div>
          </form>
          </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={() => setShewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )}
  </div>
) : (
  <p>No hay softwares disponibles</p>
)}



        
  </div>
  
)}


        
      </div>
      <br/>
      </div>
              </div>
              
              </div>
              <footer id='fet'>
                
              </footer>
              
              </>
      
  );
  
}

export default App;
