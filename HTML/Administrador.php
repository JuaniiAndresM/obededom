<?php
session_start();
if(!isset($_SESSION['Usuario'])){
    header('Location: /obededom/Form/Login.php');
}
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="/obededom/media/svg/Logo.svg" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/glider-js@1.7.7/glider.min.css"
    />
    <link rel="stylesheet" href="../CSS/styles.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script
      src="https://kit.fontawesome.com/1e193e3a23.js"
      crossorigin="anonymous"
    ></script>

    <script src="../JS/web.js"></script>
    <script src="../JS/modal.js"></script>
    <script src="../JS/backend.js"></script>
    <script src="../JS/administrador.js"></script>
    <script src="../JS/functionsAdministrador.js"></script>
    <script src="../Form/JS/Usuario.js"></script>

    <title>Obed-Edom | Administrador</title>
  </head>
  <body>
    <div class="modal"></div>
    <header class="header-admin">
      <div class="header-wrapper-admin">
        <button onclick="desplegar()" class="sidebar-button">
          <i class="fas fa-bars"></i>
        </button>

        <div class="header-links">
          <a onclick="seccion('inicio')" class="button"
            ><i class="fas fa-arrow-circle-left"></i> Volver al Inicio</a
          >
        </div>
      </div>
    </header>

    <div class="sidebar-menu">
      <div class="buttons">
        <button onclick="seccion('propiedades')" class="icon">
          <i class="fas fa-home"></i>
          <p>Propiedades</p>
        </button>
        <button onclick="seccion('nomencladores')" class="icon">
          <i class="fas fa-tag"></i>
          <p>Nomencladores</p>
        </button>
        <button onclick="seccion('mensajes')" class="icon">
          <i class="fas fa-envelope"></i>
          <p>Bandeja de Entrada</p>
          <div class="not-mensajes">
            5
          </div>
        </button>
        <button onclick="seccion('soporte')" class="icon">
          <i class="fas fa-headset"></i>
          <p>Soporte</p>
        </button>
      </div>
      <div class="profile">
        <div class="icon">
          <div class="img">
            <img src="/obededom/media/svg/Logo.svg" alt="" />
          </div>
          <div class="profile-info">
            <h2>Obed-Edom</h2>
            <p>Administrador</p>
          </div>
        </div>
        <button onclick="cerrarSesion()" class="icon-exit">
          <i class="fas fa-sign-out-alt"></i>
          <p>Cerrar Sesión</p>
        </button>
      </div>
    </div>

    <section class="admin-panel">
      <div class="content-inicio">
        <div class="inicio-wrapper">
          <img src="/obededom/media/svg/Logo.svg" alt="" />
          <h1>Bienvenid@ al panel de <b>Administrador</b>.</h1>
          <p>
            Aquí podras modificar las propiedades, agregar o eliminar
            nomencladores, y revisar la bandeja de entrada.
          </p>
          <div class="indice">
            <div class="icon">
              <h2><i class="fas fa-home"></i> Propiedades</h2>
              <p>Ver todas las propiedades y editarlas.</p>
            </div>
            <div class="icon">
              <h2><i class="fas fa-tag"></i> Nomencladores</h2>
              <p>Agregar o Eliminar Nomencladores.</p>
            </div>
            <div class="icon">
              <h2><i class="fas fa-envelope"></i> Bandeja de Entrada</h2>
              <p>
                Aquí veras tus ultimas notificaciones (Contacto, Mail, etc).
              </p>
            </div>
            <div class="icon">
              <h2><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</h2>
              <p>Cerrar Sesión del usuario actual.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="content-propiedades">
        <h1 class="title"><i class="fas fa-home"></i> Propiedades</h1>
        <div class="buscador">
          <i class="fas fa-search"></i>
          <input class="buscar" id="buscador" type="text" placeholder="Buscar" />
        </div>
        <div class="filtros">
          <div class="select">
            <p>Estado: </p>
            <select class="filtro" id="filtroEstado" name="activo">
              <option value="-1" selected>Todos</option>
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
          </div>
          <div  class="select">
            <p>Tipo de Propiedad: </p>
            <select class="filtro" id="filtroTipo" name="activo">
              <option value="0" selected>Todos</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
          <div  class="select">
            <p>Departamento: </p>
            <select class="filtro" id="filtroDepartamento" name="activo">
              <option value="0" selected>Todos</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </select>
          </div>
          <div  class="select">
            <p>Localidad: </p>
            <select class="filtro" id="filtroLocalidad" name="activo">
              <option value="0" selected>Seleccione un Departamento</option>
            </select>
          </div>
        </div>
        <div class="button-crear">
          <a href="/obededom/HTML/backend.html"><i class="fas fa-plus-circle"></i> Crear Propiedad</a>
        </div>

        <div class="propiedad-wrapper" id="seccionPropiedades">
        </div>
      </div>

      <div class="content-nomencladores">
        <h1 class="title"><i class="fas fa-tag"></i> Nomencladores</h1>
        <div class="nomencladores-wrapper">

          <div class="nomenclador">
            <h2><i class="fas fa-home"></i> Tipo Propiedad</h2>
            <div class="input">
              <input type="text" id="nuevoTipoPropiedad" placeholder="Tipo de Propiedad">
              <button id="0" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="tipoPropiedad">
            </div>
          </div>
          
          <div class="nomenclador">
            <h2><i class="fas fa-map-marker-alt"></i> Localidad</h2>
            <div class="input">
              <select name="departamento" id="selectDepartamentos">
                <option value="0" selected disabled>Seleccione un departamento</option>
              </select>
              <input type="text" name="" placeholder="Localidad" id="NuevaLocalidad">
              <button id="CrearLocalidad"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="Localidades">
            </div>
          </div>
          
          <div class="nomenclador">
            <h2><i class="fas fa-bed"></i> Dormitorios</h2>
            <div class="input">
              <input type="number" id="nuevoDormitorio" placeholder="Cantidad de Dormitorios">
              <button id="1" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="Dormitorios">
            </div>
          </div>
          
          <div class="nomenclador">
            <h2><i class="fas fa-bath"></i> Baños</h2>
            <div class="input">
              <input type="number" id="nuevoBaño" placeholder="Cantidad de Baños">
              <button id="2" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="Baños">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-warehouse"></i> Garage</h2>
            <div class="input">
              <input type="number"id="nuevoGarage" placeholder="Cantidad de Garages">
              <button id="3" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="Garages">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-check-square"></i> Estado Propiedad</h2>
            <div class="input">
              <input type="text" id="nuevoEstado" placeholder="Estado de la Propiedad">
              <button id="4" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="EstadoPropiedad">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-road"></i> Propiedad Sobre</h2>
            <div class="input">
              <input type="text" id="nuevoSobre" placeholder="Propiedad Sobre">
              <button id="5" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="PropiedadSobre">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-water"></i> Distancia al Mar</h2>
            <div class="input">
              <input type="text" id="nuevaDistanciaMar" placeholder="Distancia al mar">
              <button id="6" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="DistanciaMar">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-building"></i> Plantas</h2>
            <div class="input">
              <input type="number" id="nuevaPlanta" placeholder="Cantidad de Plantas">
              <button id="7" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="CantidadPlantas">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-couch"></i> Comfort</h2>
            <div class="input">
              <input type="text" id="nuevoComfort" placeholder="Tipo de Comfort">
              <button id="8" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="TiposComfort">
            </div>
          </div>

          <div class="nomenclador">
            <h2><i class="fas fa-lock"></i> Seguridad</h2>
            <div class="input">
              <input type="text" id="nuevaSeguridad" placeholder="Tipo de Seguridad">
              <button id="9" class="buttonAgregar"><i class="fas fa-plus"></i></button>
            </div>
            <div class="nomencladores-actuales" id="TiposSeguridad">
            </div>
          </div>

        </div>
      </div>
      <div class="content-mensajes">
        <h1 class="title"><i class="fas fa-envelope"></i> Bandeja de Entrada (5)</h1>

        <div class="boton-eliminar">
          <a href=""><i class="fas fa-trash-alt"></i> Eliminar Todas</a>
        </div>

        <div class="mensajes-wrapper">
          <div class="mensaje">
            <button><i class="fas fa-times"></i></button>
            <i class="fas fa-home"></i>
            <h1>Tienes una nueva consulta sobre:</h1>
            <p>Casa El Pinar 2 plantas...</p>
          </div>
          <div class="mensaje">
            <button><i class="fas fa-times"></i></button>
            <i class="fas fa-home"></i>
            <h1>Tienes una nueva consulta sobre:</h1>
            <p>Alquiler Solymar...</p>
          </div>
          <div class="mensaje">
            <button><i class="fas fa-times"></i></button>
            <i class="far fa-envelope-open"></i>
            <h1>Tienes una nueva consulta sobre:</h1>
            <p>Casa El Pinar 2 plantas...</p>
          </div>
          <div class="mensaje">
            <button><i class="fas fa-times"></i></button>
            <i class="far fa-envelope-open"></i>
            <h1>Tienes una nueva consulta sobre:</h1>
            <p>Casa El Pinar 2 plantas...</p>
          </div>
          <div class="mensaje">
            <button><i class="fas fa-times"></i></button>
            <i class="far fa-envelope-open"></i>
            <h1>Tienes una nueva consulta sobre:</h1>
            <p>Casa El Pinar 2 plantas...</p>
          </div>

        </div>
      </div>

      <div class="content-soporte">
        <h1 class="title"><i class="fas fa-headset"></i> Soporte</h1>
        <p>Sección exclusiva de Soporte y Ayuda</p>

        <div class="soporte-buttons">

          <button onclick="soporte('form')">
            <i class="fas fa-clipboard-list"></i>
            Contacto
          </button>

          <button onclick="soporte('manuales')">
            <i class="fas fa-tools"></i>
            Manuales
          </button>

          <button onclick="soporte('faq')">
            <i class="fas fa-question"></i>
            FAQ
          </button>
          
        </div>

        <div class="soporte-form">
          <form action="" method="post">
            <input type="text" placeholder="Nombre">
            <input type="text" placeholder="Asunto">
            <textarea name="" id="" placeholder="Consulta"></textarea>

            <input type="submit" value=" Enviar">
          </form>
        </div>
      </div>

    </section>
  </body>
</html>
