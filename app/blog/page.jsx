"use client";
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './blog.module.css'; // Importar el archivo CSS como módulo
import "@/styles/admin.css";
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import Image from 'next/image';
import Gallery from '@/components/Gallery';
import Communications from '@/components/Communications';
import { AvatarImage } from '@/components/ui/avatar';


const Dashboard = () => {
    const [activeCrud, setActiveCrud] = useState(null);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showApoderadosSubMenu, setShowApoderadosSubMenu] = useState(false);
    const [userType, setUserType] = useState(null);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [correo, setCorreo] = useState('');
    const [avatarIcon, setAvatarIcon] = useState('');

    useEffect(() => {
        const tipoApo = localStorage.getItem('tipo_apo');
        const nombreApo = localStorage.getItem('nombre_apo');
        const apellidoApo = localStorage.getItem('apellido_apo');
        if (!tipoApo) {
            alert('No se encontró el tipo de usuario. Por favor, inicie sesión.');
            window.location.href = '/login';
        } else {
            setUserType(tipoApo);
            setUserName(nombreApo);
            setUserLastName(apellidoApo);

            // Generar un número aleatorio y seleccionar el icono
            const icons = ['/images/profile01.png', '/images/profile02.png', '/images/profile03.png'];
            const randomIndex = Math.floor(Math.random() * icons.length);
            setAvatarIcon(icons[randomIndex]);
        }
    }, []);

    const handleMenuItemClick = (menuItem) => {
        setActiveCrud(menuItem);
    };

    const handleSubMenuClick = () => {
        setShowSubMenu(!showSubMenu);
    };

    const handleApoderadosSubMenuClick = () => {
        setShowApoderadosSubMenu(!showApoderadosSubMenu);
    };

    const getInitials = (name, lastName) => {
        const nameInitial = name ? name.charAt(0).toUpperCase() : '';
        const lastNameInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
        return `${nameInitial}${lastNameInitial}`;
    };

    const capitalizeFirstLetter = (string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    if (!userType) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtiene el tipo de usuario
    }


    return (
        <main className="flex min-h-screen w-full flex-row">
        {/* // <div className={styles.dashboard}> */}
            <div className="admin-sidebar">
                {/* <div className={styles.sidebar}> */}
                <div>
                    <div className="logo">
                        <Image
                            src="/icons/admin/logo.svg"
                            alt="Logo"
                            width={33}
                            height={33}
                        />
                        <h1>Colegio Alicante</h1>
                    </div>
                    

                    {/* User Menu */}
                    <div className="user">
                        <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={avatarIcon} alt="User Avatar" />
                            <AvatarFallback className="bg-amber-100">
                                {/* {getInitials(session?.user?.name || "IN")} */}
                                {getInitials(userName, userLastName) || "IN"}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col max-md:hidden">
                            <p className="font-semibold text-dark-200">
                                {capitalizeFirstLetter(userName)} {capitalizeFirstLetter(userLastName)}
                            </p>
                            <p className="text-xs text-light-500">
                                {/* {session?.user?.email} */}
                                {userType === 'admin' ? 'Administrador' : 'Apoderado'}
                            </p>
                        </div>
                    </div> 

                    <div className="mt-10 flex flex-col gap-5">
                    {(userType === 'admin' || userType === 'apoderado') && (
                            <>
                                <div className={styles.menuItem} onClick={handleApoderadosSubMenuClick}>Apoderados</div>
                                {showApoderadosSubMenu && (
                                <div className={styles.subMenu}>
                                    <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('verApoderados')}>Ver Apoderados</div>
                                    {userType === 'admin' && (
                                    <>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('agregarApoderado')}>Agregar Apoderado</div>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('editarApoderado')}>Actualizar Apoderado</div>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('eliminarApoderado')}>Eliminar Apoderado</div>
                                    </>
                                    )}
                                </div>
                                )}
                            </>
                            )}
                        <div className={styles.menuItem} onClick={() => handleMenuItemClick('asistencia')}>Reuniones</div>
                        <div className={styles.menuItem} onClick={handleSubMenuClick}>Pagos</div>
                        {showSubMenu && (
                            <div className={styles.subMenu}>
                                <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('verPagos')}>Ver Pagos</div>
                                {userType === 'admin' && (
                                    <>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('agregarPago')}>Agregar Pago</div>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('editarPago')}>Actualizar Pago</div>
                                        <div className={styles.subMenuItem} onClick={() => handleMenuItemClick('eliminarPago')}>Eliminar Pago</div>
                                    </>
                                )}
                            </div>
                        )}
                        <div className={styles.menuItem} onClick={() => handleMenuItemClick('comunicaciones')}>Mis Comunicaciones</div>
                        {/* <div className={styles.menuItem} onClick={() => handleMenuItemClick('encuestas')}>Mis encuestas</div> */}
                        <div className={styles.menuItem} onClick={() => handleMenuItemClick('galerias')}>Galerías</div>

                    </div>
                </div>

            </div>


            <div className='admin-container'>
            {/* <div className={styles.mainContent}> */}
                <header className="admin-header">
                    <div>
                        <h2 className="text-2xl font-semibold text-dark-400">
                        {/* {session?.user?.name} */}
                        </h2>
                        <p className="text-base text-slate-500">
                        Administra todos tus usuarios, reuniones y pagos aquí
                        </p>
                    </div>
                </header>


                {/* <h2>Contenido Principal</h2> */}
                {activeCrud === 'verApoderados' && <CrudApoderados action="ver" />}
                {activeCrud === 'agregarApoderado' && <CrudApoderados action="agregar" />}
                {activeCrud === 'editarApoderado' && <CrudApoderados action="editar" />}
                {activeCrud === 'eliminarApoderado' && <CrudApoderados action="eliminar" />}
                {activeCrud === 'asistencia' && <CrudAsistencia />}
                {activeCrud === 'verPagos' && <CrudPagos action="ver" />}
                {activeCrud === 'agregarPago' && <CrudPagos action="agregar" />}
                {activeCrud === 'editarPago' && <CrudPagos action="editar" />}
                {activeCrud === 'eliminarPago' && <CrudPagos action="eliminar" />}
                {activeCrud === 'comunicaciones' && <CrudComunicaciones />}
                {/* {activeCrud === 'encuestas' && <CrudEncuestas action="ver" />} */}
                {activeCrud === 'galerias' && <CrudGalerias />}
            </div>
            
        </main>
    );
};

const CrudApoderados = ({ action }) => {
    const [data, setData] = useState([]);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({
        id_apoderado: '',
        nombre_apo: '',
        apellido_apo: '',
        telefono_apo: '',
        correo_apo: '',
        contrasena_apo: '',
        direccion_apo: '',
        tipo_apo: 'apoderado',
        estado_apo: 'activo'
    });
    const [successMessage, setSuccessMessage] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token'); // Obtén el token de localStorage
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Incluye el token en los encabezados
                        'no-cache': 'no-cache', // Agrega una cabecera no-cache para evitar la caché del navegador
                    },
                });
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                const result = await response.json();
                if (Array.isArray(result)) {
                    setData(result.sort((a, b) => b.id_apoderado - a.id_apoderado)); // Ordenar por id_apoderado descendente
                } else {
                    console.error('Error: La respuesta de la API no es un array');
                }
            } catch (error) {
                console.error('Error al obtener los apoderados : 1', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (item) => {
        console.log('Editar este item:', item);
        setEditItem(item);
        setFormData({
            id_apoderado: item.id_apoderado,
            nombre_apo: item.nombre_apo,
            apellido_apo: item.apellido_apo,
            telefono_apo: item.telefono_apo,
            correo_apo: item.correo_apo,
            contrasena_apo: '', // Deja la contraseña vacía para que el usuario la ingrese si desea cambiarla
            direccion_apo: item.direccion_apo,
            tipo_apo: item.tipo_apo,
            estado_apo: item.estado_apo
        });
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token'); // Obtén el token de localStorage
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,// Incluye el token en los encabezados
                    'content-type': 'application/json', // Establece el tipo de contenido a JSON
                },
            });
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            setData(data.filter((item) => item.id_apoderado !== id));
        } catch (error) {
            console.error('Error al eliminar el apoderado:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Obtén el token de localStorage
            if (editItem) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${editItem.id_apoderado}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Incluye el token en los encabezados
                    },
                    body: JSON.stringify(formData),
                });
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                const result = await response.json();
                setData(data.map((item) => (item.id_apoderado === editItem.id_apoderado ? result : item)))
                setEditItem(null);
            } else {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`, // Incluye el token en los encabezados
                    },
                    body: JSON.stringify({ users: [formData] }), // Enviar los datos del apoderado en un array
                });
    
                if (!response.ok) {
                    const errorDetails = await response.json();
                    console.error('Error en la creación del apoderado:', errorDetails);
                    alert(`Error: ${errorDetails.message || 'No se pudo crear el apoderado.'}`);
                    return;
                }
    
            const result = await response.json();
            setData(data.map((item) => (item.id_apoderado === editItem.id_apoderado ? result : item)));
            setEditItem(null);
            setFormData({
                id_apoderado: '',
                nombre_apo: '',
                apellido_apo: '',
                telefono_apo: '',
                correo_apo: '',
                contrasena_apo: '',
                direccion_apo: '',
                tipo_apo: 'apoderado',
                estado_apo: 'activo'
                });
                setSuccessMessage('Apoderado actualizado correctamente');
                setTimeout(() => setSuccessMessage(''), 3000); 
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };
    return (
        <div className={styles.crudContainer}>
            <h3>Tabla de Apoderados</h3>
            {action === 'ver' && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>RUT</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                            <th>Dirección</th>
                            <th>Tipo</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.map((item) => (
                            <tr key={item.id_apoderado}>
                                <td>{item.id_apoderado}</td>
                                <td>{item.nombre_apo}</td>
                                <td>{item.apellido_apo}</td>
                                <td>{item.telefono_apo}</td>
                                <td>{item.correo_apo}</td>
                                <td>{item.direccion_apo}</td>
                                <td>{item.tipo_apo}</td>
                                <td>{item.estado_apo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {action === 'agregar' && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>RUT:</label>
                        <input
                            type="text"
                            name="id_apoderado"
                            value={formData.id_apoderado}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre_apo"
                            value={formData.nombre_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <input
                            type="text"
                            name="apellido_apo"
                            value={formData.apellido_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            name="telefono_apo"
                            value={formData.telefono_apo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Correo:</label>
                        <input
                            type="email"
                            name="correo_apo"
                            value={formData.correo_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="contrasena_apo"
                            value={formData.contrasena_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Dirección:</label>
                        <input
                            type="text"
                            name="direccion_apo"
                            value={formData.direccion_apo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Tipo:</label>
                        <select
                            name="tipo_apo"
                            value={formData.tipo_apo}
                            onChange={handleInputChange}
                        >
                            <option value="admin">Admin</option>
                            <option value="apoderado">Apoderado</option>
                        </select>
                    </div>
                    <div>
                        <label>Estado:</label>
                        <select
                            name="estado_apo"
                            value={formData.estado_apo}
                            onChange={handleInputChange}
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>
                    <button type="submit">{editItem ? 'Actualizar' : 'Agregar'}</button>
                </form>
            )}
            {action === 'editar' && (
                <div>
                    <h4>Selecciona un apoderado para editar</h4>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>RUT</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                                <th>Correo</th>
                                <th>Dirección</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map((item) => (
                                <tr key={item.id_apoderado}>
                                <td>{item.id_apoderado}</td>
                                <td>{item.nombre_apo}</td>
                                <td>{item.apellido_apo}</td>
                                <td>{item.telefono_apo}</td>
                                <td>{item.correo_apo}</td>
                                <td>{item.direccion_apo}</td>
                                <td>{item.tipo_apo}</td>
                                <td>{item.estado_apo}</td>
                                <td>
                                    <button onClick={() => handleEdit(item)}>Editar</button>
                                </td>
                                
                            </tr>
                            ))}
                        </tbody>
                        
                    </table>
                    {editItem && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>RUT:</label>
                        <input
                            type="text"
                            name="id_apoderado"
                            value={formData.id_apoderado}
                            onChange={handleInputChange}
                            required
                            disabled // Deshabilitar el campo RUT para evitar cambios
                        />
                    </div>
                    <div>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre_apo"
                            value={formData.nombre_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Apellido:</label>
                        <input
                            type="text"
                            name="apellido_apo"
                            value={formData.apellido_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            name="telefono_apo"
                            value={formData.telefono_apo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Correo:</label>
                        <input
                            type="email"
                            name="correo_apo"
                            value={formData.correo_apo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            name="contrasena_apo"
                            value={formData.contrasena_apo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Dirección:</label>
                        <input
                            type="text"
                            name="direccion_apo"
                            value={formData.direccion_apo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Tipo:</label>
                        <select
                            name="tipo_apo"
                            value={formData.tipo_apo}
                            onChange={handleInputChange}
                        >
                            <option value="admin">Admin</option>
                            <option value="apoderado">Apoderado</option>
                        </select>
                    </div>
                    <div>
                        <label>Estado:</label>
                        <select
                            name="estado_apo"
                            value={formData.estado_apo}
                            onChange={handleInputChange}
                        >
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                        </select>
                    </div>
                    <button type="submit">Actualizar</button>
                    {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                </form> 
            )}
                    
                </div>
            )}
            {action === 'eliminar' && (
                <div>
                    <h4>Selecciona un apoderado para eliminar</h4>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                                <th>Correo</th>
                                <th>Dirección</th>
                                <th>Tipo</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(data) && data.map((item) => (
                                <tr key={item.id_apoderado}>
                                    <td>{item.id_apoderado}</td>
                                    <td>{item.nombre_apo}</td>
                                    <td>{item.apellido_apo}</td>
                                    <td>{item.telefono_apo}</td>
                                    <td>{item.correo_apo}</td>
                                    <td>{item.direccion_apo}</td>
                                    <td>{item.tipo_apo}</td>
                                    <td>{item.estado_apo}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item.id_apoderado)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
//----//

const CrudPagos = ({ action }) => {
    const [data, setData] = useState([]);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({
        id_pago: '',
        fecha_pago: '',
        monto: '',
        estado_pago: ''
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pagos`);
            const result = await response.json();
            setData(result.sort((a, b) => b.id_pago - a.id_pago)); // Ordenar por id_pago descendente
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${day}-${month}-${year}`;
    };

    const formatRut = (rut) => {
        const rutString = String(rut); // Convertir a cadena de texto
        const rutClean = rutString.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
        let result = rutClean.slice(-4, -1) + '-' + rutClean.substr(rutClean.length - 1);
        for (let i = 4; i < rutClean.length; i += 3) {
            result = rutClean.slice(-3 - i, -i) + '.' + result;
        }
        return result;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const intFields = ["monto", "id_apoderado"];
        setFormData({ ...formData, [name]: intFields.includes(name) ? parseInt(value, 10) : value });
    };

    const handleEdit = (item) => {
        setEditItem(item);
        setFormData({
            id_pago: item.id_pago,
            fecha_pago: item.fecha_pago,
            monto: item.monto,
            estado_pago: item.estado_pago,
            id_apoderado: item.id_apoderado,
        });
    };

    const handleDelete = async (id) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pagos/${id}`, {
            method: 'DELETE',
        });
        setData(data.filter((item) => item.id_pago !== id));
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDate = formData.fecha_pago.split('-').join('/');
        const formattedFormData = { ...formData, fecha_pago: formattedDate };
        try {
            if (editItem) {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pagos/${editItem.id_pago}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formattedFormData),
                });
                const result = await response.json();
                setData(data.map((item) => (item.id_pago === editItem.id_pago ? result : item)).sort((a, b) => b.id_pago - a.id_pago));
                setEditItem(null);
            } else {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pagos`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Connection': 'keep-alive',
                    },
                    body: JSON.stringify(formattedFormData),
                });

                if (!response.ok) {
                    const errorDetails = await response.json();
                    console.error('Error en la creación del pago:', errorDetails);
                    alert(`Error: ${errorDetails.message || 'No se pudo crear el pago.'}`);
                    return;
                }

                const result = await response.json();
                console.log('Pago creado con éxito:', result);
                setData([...data, result].sort((a, b) => b.id_pago - a.id_pago));
                setFormData({ id_pago: '' ,fecha_pago: '', monto: '', estado_pago: '', id_apoderado: '' });
                alert('Pago creado con éxito');
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className={styles.crudContainer}>
            <h3>Tabla de Pagos</h3>
            {action === 'ver' && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Monto</th>
                            <th>Estado Pago</th>
                            <th>Rut Apoderado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id_pago}>
                                <td>{item.id_pago}</td>
                                <td>{formatDate(item.fecha_pago)}</td>
                                <td>{item.monto.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</td>

                                <td>{item.estado_pago}</td>
                                <td>{formatRut(item.id_apoderado)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {action === 'agregar' && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Fecha:</label>
                        <input
                            type="date"
                            name="fecha_pago"
                            value={formData.fecha_pago}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Monto:</label>
                        <input
                            type="number"
                            name="monto"
                            value={formData.monto}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Estado Pago:</label>
                        <input
                            type="text"
                            name="estado_pago"
                            value={formData.estado_pago}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Rut Apoderado:</label>
                        <input
                            type="text"
                            name="id_apoderado"
                            value={formData.id_apoderado}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">{editItem ? 'Actualizar' : 'Agregar'}</button>
                </form>
            )}
            {action === 'editar' && (
                 <div className={styles.crudContainer}>
                 <h3>Tabla de Pagos</h3>
                 <table className={styles.table}>
                     <thead>
                         <tr>
                             <th>N°</th>
                             <th>Fecha Pago</th>
                             <th>Monto Pago</th>
                             <th>Estado Pago</th>
                             <th>Acciones</th>
                         </tr>
                     </thead>
                     <tbody>
                         {Array.isArray(data) && data.map((item) => (
                             <tr key={item.id_pago}>
                                 <td>{item.id_pago}</td>
                                 <td>{item.fecha_pago}</td>
                                 <td>{item.monto}</td>
                                 <td>{item.estado_pago}</td>
                                 <td>
                                     <button onClick={() => handleEdit(item)}>Editar</button>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
                 {editItem && (
                     <div className={styles.formContainer}>
                         <form onSubmit={handleSubmit}>
                             <div>
                                 <label>ID Pago:</label>
                                 <input
                                     type="text"
                                     name="id_pago"
                                     value={formData.id_pago}
                                     onChange={handleInputChange}
                                     required
                                     disabled // Deshabilitar el campo ID para evitar cambios
                                 />
                             </div>
                             <div>
                                 <label>Fecha Pago:</label>
                                 <input
                                     type="date"
                                     name="fecha_pago"
                                     value={formData.fecha_pago}
                                     onChange={handleInputChange}
                                     required
                                 />
                             </div>
                             <div>
                                 <label>Monto Pago:</label>
                                 <input
                                     type="number"
                                     name="monto"
                                     value={formData.monto}
                                     onChange={handleInputChange}
                                     required
                                 />
                             </div>
                             <div>
                                 <label>Estado Pago:</label>
                                 <input
                                     type="text"
                                     name="estado_pago"
                                     value={formData.estado_pago}
                                     onChange={handleInputChange}
                                     required
                                 />
                             </div>
                             <button type="submit">Actualizar</button>
                             {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
                         </form>
                     </div>
                 )}
             </div>
            )}
            {action === 'eliminar' && (
                <div>
                    <h4>Selecciona un pago para eliminar</h4>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Monto</th>
                                <th>Estado Pago</th>
                                <th>Rut Apoderado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id_pago}>
                                    <td>{item.id_pago}</td>
                                    <td>{formatDate(item.fecha_pago)}</td>
                                    <td>{item.monto}</td>
                                    <td>{item.estado_pago}</td>
                                    <td>{formatRut(item.id_apoderado)}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item.id_pago)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

const CrudSeguimiento = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);



    return (
        <div className={styles.crudContainer}>
            <h3>Tabla de Apoderados</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id_apoderado}>
                            <td>{item.id_apoderado}</td>
                            <td>{item.nombre_apo}</td>
                            <td>{item.fecha}</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const CrudAsistencia = ({ action }) => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        id_reunion: '',
        fecha_reu: '',
        hora_reu: '',
        lugar_reu: '',
        tema_reu: ''
    });
    const [editItem, setEditItem] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reuniones`);
            const result = await response.json();
            setData(result);
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (item) => {
        setEditItem(item);
        setFormData({
            id_reunion: item.id_reunion,
            fecha_reu: item.fecha_reu,
            hora_reu: item.hora_reu,
            lugar_reu: item.lugar_reu,
            tema_reu: item.tema_reu
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editItem ? 'PUT' : 'POST';
        const url = editItem ? `${process.env.NEXT_PUBLIC_API_URL}/reuniones/${editItem.id_reunion}` : `${process.env.NEXT_PUBLIC_API_URL}/reuniones`;
        const response = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        if (editItem) {
            setData(data.map((item) => (item.id_reunion === editItem.id_reunion ? result : item)));
        } else {
            setData([...data, result]);
        }
        setEditItem(null);
        setFormData({
            id_reunion: '',
            fecha_reu: '',
            hora_reu: '',
            lugar_reu: '',
            tema_reu: ''
        });
    };

    const handleDelete = async (id) => {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reuniones/${id}`, {
            method: 'DELETE'
        });
        setData(data.filter((item) => item.id_reunion !== id));
    };

    return (
        <div className={styles.crudContainer}>
            <h3>Tabla de Reuniones</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th> N° Reunión</th>
                        <th>Fecha Reunión</th>
                        <th>Hora</th>
                        <th>Lugar Reunión</th>
                        <th>Tema</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id_reunion}>
                            <td>{item.id_reunion}</td>
                            <td>{item.fecha_reu}</td>
                            <td>{item.hora_reu}</td>
                            <td>{item.lugar_reu}</td>
                            <td>{item.tema_reu}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Editar</button>
                                <div></div>
                                <div></div>
                                <button onClick={() => handleDelete(item.id_reunion)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fecha Reunión:</label>
                    <input
                        type="date"
                        name="fecha_reu"
                        value={formData.fecha_reu}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Hora:</label>
                    <input
                        type="time"
                        name="hora_reu"
                        value={formData.hora_reu}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Lugar Reunión:</label>
                    <input
                        type="text"
                        name="lugar_reu"
                        value={formData.lugar_reu}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Tema:</label>
                    <input
                        type="text"
                        name="tema_reu"
                        value={formData.tema_reu}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">{editItem ? 'Actualizar' : 'Agregar'}</button>
            </form>
        </div>
    );
};


const CrudComunicaciones = () => {

    return (
        <Communications />
    );

    // const boletines = [
    //     {
    //         titulo: "Boletín Informativo 1",
    //         contenido: "Este es el contenido del boletín informativo 1. Aquí puedes poner cualquier información relevante."
    //     },
    //     {
    //         titulo: "Boletín Informativo 2",
    //         contenido: "Este es el contenido del boletín informativo 2. Aquí puedes poner cualquier información relevante."
    //     },
    //     {
    //         titulo: "Boletín Informativo 3",
    //         contenido: "Este es el contenido del boletín informativo 3. Aquí puedes poner cualquier información relevante."
    //     }
    // ];
    // return (
    //     <div className={styles.crudContainer}>
    //         <h3>Comunicaciones</h3>
    //         <div className={styles.boletines}>
    //             {boletines.map((boletin, index) => (
    //                 <div key={index} className={styles.boletin}>
    //                     <h4>{boletin.titulo}</h4>
    //                     <p>{boletin.contenido}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
};

const CrudEncuestas = ({ action }) => {
    return (
        <div className={styles.crudContainer}>
            <h3>CRUD de Encuestas</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pregunta</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.pregunta}</td>
                            <td>{item.fecha}</td>
                            <td>
                                <button>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );   
};

const CrudGalerias = () => {

    return (
        <div>
            <Gallery />
        </div>
    );
};

export default Dashboard;