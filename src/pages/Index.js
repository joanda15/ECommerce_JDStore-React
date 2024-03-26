import React from "react";
import { Link } from "react-router-dom";

export default function Todo() {
    return (
        <div>
            <h1>Tienda de prendas JD Store</h1>
            {/* Barra de navegación */}
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/imgs/img/logo.png" alt="" width="60" height="60" className="d-inline-block align-text-top" />
                    </a>
                    <a className="navbar-brand" href="#Nosotros">Nosotros</a>
                    <a className="navbar-brand" href="#Promociones">Promociones</a>
                    <a className="navbar-brand" href="#CatalogoImg">Catálogo</a>
                    <a className="navbar-brand" href="#Contactos">Contactos</a>
                    <a className="navbar-brand" href="/Perfil.html">
                        <img src="/imgs/icons/BotonUser.png" alt="" width="60" height="60" className="d-inline-block align-text-top" />
                    </a>
                    <Link to="/Carrito"></Link>
                </div>
            </nav>
            {/* Contenido del body */}

            {/* Imagen presentación */}
            <div className="Nosotros" id="Nosotros">
                <img src="/imgs/img/PresentacionImg.png" alt="" />
            </div>

            {/* Promociones */}
            <div className="Promociones" id="Promociones">
                <div className="textoPromociones">
                    <a href="">Rebajas % Promociones</a>
                </div>
                <img src="/imgs/img/PromocionesImg.png" alt="" />
            </div>

            {/* Catálogo */}
            <div className="TextoTitulo">
                <h1>Catálogo</h1>
            </div>
            <div className="CatalogoImg" id="CatalogoImg">
                <a href="#Shorts">
                    <img src="/imgs/icons/Shorts.png" alt="" />
                </a>
                <a href="#vestidos">
                    <img src="/imgs/icons/Vestidos.png" alt="" />
                </a>
                <a href="#calzado">
                    <img src="/imgs/icons/Calzado.png" alt="" />
                </a>
            </div>

            {/* Contactos */}
            <div className="TextoTitulo">
                <h1>Contactos</h1>
            </div>
            <div className="Contactos" id="Contactos">
                <img src="/imgs/img/logo.png" alt="" />
                <div className="ItemsContactos">
                    <div className="Redes">
                      <a href=""><img src="/imgs/icons/BtnWhatsaap.png" alt="" /></a>
                      <a href=""><img src="/imgs/icons/BtnLocalizacion.png" alt="" /></a>
                      <a href=""><img src="/imgs/icons/BtnInstagram.png" alt="" /></a>
                    </div>
                    <div className="Mensajes">
                        {/* Formulario mensaje */}
                        <form className="Formulario">
                            <div className="mb-3">
                                <label htmlFor="exampleInputNombre1" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="exampleInputNombre1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-light">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Promociones Componente */}
            <div className="ComponentePromociones">
                <div className="BarraVanvegacion">
                    <a href="">
                        <img src="/imgs/img/logo.png" alt="" />
                    </a>
                    <h1>Promociones</h1>
                    <a href="">
                        <img src="/imgs/icons/BotonUser.png" alt="" />
                    </a>
                </div>
            </div>

            {/* Tarjeta prenda */}
            <div className="tarjetaPrenda">
                <div className="tarjetaCuerpo">
                    <img src="/imgs/prendas/Shorts/short1.jfif" alt="" />
                    <div className="Descripcion">
                        <h1>Nombre</h1>
                        <h3>Descripción</h3>
                        <h3>Talla</h3>
                        <h3>Color</h3>
                        <h3>Precio</h3>
                        <h3>Unidades</h3>
                    </div>
                    <div className="valores">
                        <div className="talla">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione</option>
                                <option value="1">S</option>
                                <option value="2">M</option>
                                <option value="3">L</option>
                            </select>
                        </div>

                        <div className="color">
                            {/* <label htmlFor="exampleColorInput" className="form-label"></label> */}
                            <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />
                        </div>

                        <div className="precio">
                            <h3>$100.000</h3>
                        </div>
                        {/* <div className="talla">
                            <button onClick={() => restar()}>-</button>
                            <h3 id="unidades">1</h3>
                            <button onClick={() => sumar()}>+</button>
                        </div> */}
                    </div>
                </div>
                <div className="BonotesTrajeta">
                    <button type="button" className="btn btn-outline-dark">Carrito</button>
                    <button type="button" className="btn btn-outline-dark">Comprar</button>
                </div>
            </div>

            {/* Catálogo Componente */}
            <div className="ComponenteCatalogo">
                <div className="BarraVanvegacion">
                    <a href="">
                        <img src="/imgs/img/logo.png" alt="" />
                    </a>
                    <h1>Catálogo</h1>
                    <a href="">
                        <img src="/imgs/icons/BotonUser.png" alt="" />
                    </a>
                </div>
            </div>
            {/* Tarjeta */}

            {/* Footer */}
            <div className="Footer">
                <img src="/imgs/img/logoDev.png" alt="" />
                <h3>eCommerce jD Store - Software desarrollado por DevFile</h3>
            </div>



        </div>
    );
}
