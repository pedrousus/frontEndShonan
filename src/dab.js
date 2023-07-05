
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './App.css';


function ModalEquipo() {


    const [tipoS,setTipoD]= useState("");
    const [IDequipo,setIDequipo]= useState("");
    const [marca, setmarca] = useState("");
    const [modelo, setmodelo] = useState("");
    const [NoSerieEquip, setNoSerieEquip] = useState("");
    const [contraEquipo, setcontraEquipo] = useState("");
    const [componente, setcomponente] = useState("");
    const [modificciones, setmodificciones] = useState("");
    const [estadoFisico, setestadoFisico] = useState("");
    const [incidentes, setincidentes] = useState("");
    const [garantia, setgarantia] = useState("");
    const [fechaCompra, setfechaCompra] = useState("");
    const [activo, setactivo] = useState("");
    const [sistemaoperativo, setsistemaoperativo] = useState("");
    const [MAc, setMAC] = useState("");
    const [hostname, sethostname] = useState("");
    const [aux, setaux] = useState("");
    const [NoSerieAUx, setNoSerieAUx] = useState("");
    const [pantall, setpantall] = useState("");
    const [serialPantalla, setserialPantalla] = useState("");
    const [IDcola, setIDcola] = useState("");
    const [file, setfile] = useState("");

   

    const selectedHandler=e=>{
        setfile(e.target.files[0])
    }

    const handleDateChange = (date) => {
        setfechaCompra(date);
        };
        
        
        const sendHandler = (event) => {
            event.preventDefault();
        
            if (
            tipoS.trim() === "" ||
            marca.trim() === "" ||
            modelo.trim() === "" ||
            NoSerieEquip.trim() === "" ||
            contraEquipo.trim() === ""
            ) {
            alert("Por favor, complete todos los campos.");
            return;
            } else {
            const formdata = new FormData();
            formdata.append("tipoS", tipoS);
            formdata.append("IDequipo", IDequipo);
            formdata.append("marca", marca);
            formdata.append("modelo", modelo);
            formdata.append("NoSerieEquip", NoSerieEquip);
            formdata.append("contraEquipo", contraEquipo);
            formdata.append("componente", componente);
            formdata.append("modificciones", modificciones);
            formdata.append("estadoFisico", estadoFisico);
            formdata.append("incidentes", incidentes);
            formdata.append("garantia", garantia);
            
            if (fechaCompra instanceof Date) {
                const selectedYear = fechaCompra.getFullYear();
                const selectedMonth = fechaCompra.getMonth() + 1; // Los meses en JavaScript comienzan en 0
                const selectedDay = fechaCompra.getDate();
        
                const formattedDate = `${selectedYear}-${selectedMonth
                .toString()
                .padStart(2, "0")}-${selectedDay.toString().padStart(2, "0")}`;
        
                formdata.append("fechaCompra", formattedDate);
            }
            
            formdata.append("activo", activo);
            formdata.append("sistemaoperativo", sistemaoperativo);
            formdata.append("MAc", MAc);
            formdata.append("hostname", hostname);
            formdata.append("NoSerieAUx", NoSerieAUx);
            formdata.append("aux", aux);
            formdata.append("pantall", pantall);
            formdata.append("serialPantalla", serialPantalla);
            formdata.append("IDcola", IDcola);
            formdata.append("image", file);
        
            fetch("http://localhost:5000/posto/equipo", {
                method: "POST",
                body: formdata,
            })
                .then((res) => res.text())
                .then((res) => {
                console.log(res);
        
                alert("Empleado Subido");
        
                document.getElementById("fileinput").value = null;
                setfile(null);
                window.location.reload();
                });
            }
        };
        

    return(
        
    <>
    
        <div className="container">
                <div className="card text-center " id="">
                <form onSubmit={sendHandler} enctype="multipart/form-data">
                    <div className="card-header">Lista preliminar</div>
                    <div className="card-body" id="mon">
                        

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        ID del equipo
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setIDequipo(event.target.value)}
                        className="form-control"
                        placeholder="ID del Equipo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Tipo de Dispositivo:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setTipoD(event.target.value)}
                        className="form-control"
                        placeholder="Tipo de dispositivo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="input-group ">
                            <span className="input-group-text" id="basic-addon1">
                            Marca:
                            </span>
                            <input
                            type="text"
                            onChange={(event) => setmarca(event.target.value)}
                            className="form-control"
                            placeholder="Marca"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="input-group ">
                                <span className="input-group-text" id="basic-addon1">
                                Modelo
                                </span>
                                <input
                                type="text"
                                onChange={(event) => setmodelo(event.target.value)}
                                className="form-control"
                                placeholder="Modelo "
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </div>
                            </div>
                        </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        No. de serie
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setNoSerieEquip(event.target.value)}
                        className="form-control"
                        placeholder="Numero de serie "
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Conraseña del equipo
                        </span>
                        <input
                        type="email"
                        onChange={(event) => setcontraEquipo(event.target.value)}
                        className="form-control"
                        placeholder="Contraseña del equipo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Componentes:
                        </span>
                        <textarea
                        cols={20}
                        rows={5}
                        type="text"
                        onChange={(event) => setcomponente(event.target.value)}
                        className="form-control"
                        placeholder="Componentes"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Modificaciones:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setmodificciones(event.target.value)}
                        className="form-control"
                        placeholder="Modificaciones"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Estado fisico:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setestadoFisico(event.target.value)}
                        className="form-control"
                        placeholder="Estado Fisico"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Detalles o incidentes:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setincidentes(event.target.value)}
                        className="form-control"
                        placeholder="Incidentes o problemas"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>


                <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Garantia:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setgarantia(event.target.value)}
                        className="form-control"
                        placeholder="Garantia"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>
                    <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Fecha de compra:
                        <DatePicker
                            selected={fechaCompra}
                            onChange={handleDateChange}
                            className="form-control m-lg-1"
                            dateFormat="yyyy-MM-dd"
                            placeholderText="Seleccionar fecha"
                            aria-describedby="basic-addon1"
                            />


                        </span>
                    </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Activo:
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setactivo(event.target.value)}
                        className="form-control"
                        placeholder="Activo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>

                    <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Sistema opertivo
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setsistemaoperativo(event.target.value)}
                        className="form-control"
                        placeholder="Sistema Operativo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>
                </div>


                <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        MAC
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setMAC(event.target.value)}
                        className="form-control"
                        placeholder="MAC"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        Hostname
                        </span>
                        <input
                        type="text"
                        onChange={(event) => sethostname(event.target.value)}
                        className="form-control"
                        placeholder="Hostname"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>
                    </div>


                    <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Auxiliares
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setaux(event.target.value)}
                        className="form-control"
                        placeholder="Auxiliares"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                </div>


                    <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        No. Serie de AUX
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setNoSerieAUx(event.target.value)}
                        className="form-control"
                        placeholder="Numero de serie de auxiliar"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>
                    </div>


                    <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="input-group ">
                        <span className="input-group-text" id="basic-addon1">
                        Pantalla
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setpantall(event.target.value)}
                        className="form-control"
                        placeholder="Tipo de pantalla"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>

                    <div className="col-md-6 mb-3">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                        Serial Pantalla
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setserialPantalla(event.target.value)}
                        className="form-control"
                        placeholder="Numero de serie de la pantalla"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    </div>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        ID colaborador
                        </span>
                        <input
                        type="text"
                        onChange={(event) => setIDcola(event.target.value)}
                        className="form-control"
                        placeholder="ID del colaborador actual"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </div>
                    
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                        Imagen:
                        </span>
                        <input
                        id="fileinput"
                        type="file"
                        onChange={selectedHandler}
                        className="form-control"
                        aria-label="Fotografia del equipo"
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
                
                </div>
            </div>

        </>
    );
}

export default ModalEquipo;