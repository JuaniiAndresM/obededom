<?php
session_start();
if(!isset($_SESSION['Usuario'])){
    header('Location: /obededom/Login');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="/obededom/media/svg/Logo.svg" type="image/x-icon" />

    <title>Obed-Edom | Nueva Propiedad</title>

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>    
    <script src="https://kit.fontawesome.com/1e193e3a23.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
    <script src="/obededom/JS/backend.js"></script>
    <script src="/obededom/JS/administrador.js"></script>
    <script src="/obededom/JS/functionsBackend.js"></script>
    <script src="/obededom/JS/modal.js"></script>


    <link rel="stylesheet" href="/obededom/CSS/styles.css">
</head>
<body>
    <div class="modal"></div>

    <header>
        <div class="header-wrapper">
            <div class="header-icon">
                <img src="/obededom/media/svg/Logo.svg" alt="">
            </div>
            <div class="header-links">
                <a href="Administrador" class="button"><i class="fas fa-arrow-circle-left"></i> Volver al Inicio</a>
            </div>
        </div>
    </header>

    <div class="propiedad-wrapper">

        <div class="propiedad-left">



            <div class="panel-section">
                <h1><i class="fas fa-home"></i> Alta Propiedades:</h1>
                <hr>

                <div class="input-wrappers">
                    
                    <div class="panel-izquierdo">
                        <div class="input">
                            <p>Titulo de la Propiedad</p>
                            <input type="text" class="reset" name="titulo" id="tituloPropiedad">
                        </div>
                        <div class="input">
                            <p>Tipo de Operación</p>
                            <select name="tipooperacion" id="selectOperaciones">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                            </select>
                        </div>
                        <div class="input">
                            <p>Tipo de Precio</p>
                            <select name="tipoPrecio" id="selectTipoPrecio">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                                <option value="1">Pesos Uruguayos - $</option>
                                <option value="2">Dolares - U$S</option>
                            </select>
                        </div>
                    </div>

                    <div class="panel-medio">
                        <div class="input">
                            <p>Precio de Venta</p>
                            <input type="number" class="reset" name="precio" id="precioDolares">
                            <div class="checkbox" id="checkbox-precio">
                                <input type="checkbox" name="" id="mostrarPrecio" checked>Mostrar precio de venta
                            </div>
                        </div>
                        <div class="input">
                            <p>Gastos Comunes</p>
                            <input type="number" class="reset" name="gastosComunes" id="gastosComunes">
                        </div>
                        
                    </div>

                    <div class="panel-derecho">
                        <div class="input">
                            <p>¿Acepta Permuta?</p>
                            <div class="checkbox-wrapper">
                                <div class="checkbox">
                                    <input type="radio" name="permuta" id="premutasi" value="1"><p>Si</p>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="permuta" id="premutano" value="0" checked><p>No</p>
                                </div>
                            </div>
                        </div>
                        <div class="input">
                            <p>¿Financia?</p>
                            <div class="checkbox-wrapper">
                                <div class="checkbox">
                                    <input type="radio" name="financia" id="financiasi" value="1"><p>Si</p>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="financia" id="financiano" checked value="0"><p>No</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div class="panel-section">
                <h1><i class="fas fa-info-circle"></i> Datos Generales:</h1>
                <hr>

                <div class="input-wrappers">


                    <div class="panel-izquierdo">
                        <div class="input">
                            <p>Tipo de Propiedad</p>
                            <select name="tipopropiedad" id="selectTipoPropiedad">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                            </select>
                        </div>
                    </div>

                    <div class="section-medio">
                        <div class="input">
                            <p>Departamento</p>
                            <select name="departamento" id="selectDepartamentos">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                            </select>
                        </div>
                        <div class="input">
                            <p>Localidad / Barrio</p>
                            <select name="departamento" id="selectLocalidades">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                            </select>
                        </div>
                    </div>

                    <div class="panel-derecho">
                        <div class="input">
                            <p>Dirección de la Propiedad</p>
                            <input type="text" class="reset" name="direccion" id="direccion">
                        </div>
                    </div>

                </div>
            </div>



            <div class="panel-section">
                <h1><i class="fas fa-clipboard-list"></i> Detalle de la Propiedad:</h1>
                <hr>

                <div class="input-wrappers">
                    
                    <div class="panel-izquierdo">
                        <div class="input">
                            <p>Año de Construcción</p>
                            <input type="number" class="reset" name="añoconstruccion" id="fechaConstruccion" min="1000">
                        </div>
                        <div class="input">
                            <p>Dormitorios</p>
                            <select name="dormitorios" id="selectDormitorios">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                            </select>
                        </div>
                        <div class="input">
                            <p>Baños</p>
                            <select name="baños" id="selectBaños">
                            </select>
                        </div>
                        <div class="input">
                            <p>Garage</p>
                            <select name="garage" id="selectGarages">
                            </select>
                        </div>
                        <div class="input">
                            <p>¿Vista al Mar?</p>
                            <div class="checkbox-wrapper">
                                <div class="checkbox">
                                    <input type="radio" name="vistamar" id="vistamarsi" value="1"><p>Si</p>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="vistamar" id="vistamarno" value="0" checked><p>No</p>
                                </div>
                            </div>
                        </div>
                        <div class="input">
                            <p>Distancia al Mar</p>
                            <select name="distanciamar" id="selectDistanciamar">
                            </select>
                        </div>
                    </div>

                    <div class="panel-medio">
                        <div class="input">
                            <p>Metros Edificados</p>
                            <input type="number" class="reset" name="mts_edificados" id="metrosEdificados">
                        </div>
                        <div class="input">
                            <p>Metros de la Terraza</p>
                            <input type="number" class="reset" name="mts_terraza" id="metrosTerraza">
                        </div>
                        <div class="input">
                            <p>Metros del Terreno</p>
                            <input type="number" class="reset" name="mts_terreno" id="metrosTerreno">
                        </div>
                        <div class="input">
                            <p>Sobre</p>
                            <select name="sobre" id="selectSobre">
                            </select>
                        </div>
                        <div class="input">
                            <p>Estado</p>
                            <select name="estado" id="selectEstado">
                            </select>
                        </div>
                        <div class="input">
                            <p>Disposición</p>
                            <select name="selectDisposicion" id="selectDisposicion">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                                <option value="Al Frente">Al Frente</option>
                                <option value="Inferior">Interior</option>
                                <option value="Lateral">Lateral</option>
                                <option value="Contrafrente">Contrafrente</option>
                            </select>
                        </div>
                    </div>
                    

                    <div class="panel-derecho">
                        <div class="input">
                            <p>Orientación</p>
                            <select name="orientacion" id="selectOrientacion">
                                <option value="0" id="selected" selected disabled>Seleccione una Opción</option>
                                <option value="N">N</option>
                                <option value="S">S</option>
                                <option value="E">E</option>
                                <option value="O">O</option>
                            </select>
                        </div>
                        <div class="input">
                            <p>¿Apto para oficina?</p>
                            <div class="checkbox-wrapper">
                                <div class="checkbox">
                                    <input type="radio" name="aptooficina" id="oficinasi" value="1"><p>Si</p>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="aptooficina" id="oficinano" value="0" checked><p>No</p>
                                </div>
                            </div>
                        </div>
                        <div class="input">
                            <p>¿Vivienda Social?</p>
                            <div class="checkbox-wrapper">
                                <div class="checkbox">
                                    <input type="radio" name="viviendasocial" id="viviendasi" value="1"><p>Si</p>
                                </div>
                                <div class="checkbox">
                                    <input type="radio" name="viviendasocial" id="viviendano" value="0" checked><p>No</p>
                                </div>
                            </div>
                        </div>
                        <div class="input">
                            <p>Cantidad de Plantas</p>
                            <select name="plantas" id="selectPlantas">
                            </select>
                        </div>
                    </div>
                </div>
                <div class="checkboxcomfort">
                    <input type="checkbox" name="checkboxcomfort" id="checkboxcomfort"> No aplican datos de comfort y seguridad para esta propiedad.
                </div>

                <div class="section-comfort-seguridad" id="section-comfort-seguridad">
                    <h1><i class="fas fa-couch"></i> Comfort</h1>
                    <hr>
                    <div class="comfort" id="comfort">
                    </div>
                    <h1><i class="fas fa-lock"></i> Seguridad</h1>
                    <hr>
                    <div class="seguridad" id="seguridad">
                    </div>
                </div>
            </div>
            
            
        </div>
        <div class="propiedad-right">
            <h1><i class="fas fa-scroll"></i> Garantías</h1>
            <textarea name="garantias" id="garantias"></textarea>

            <h1><i class="fas fa-home"></i> Descripción de la Propiedad</h1>
            <textarea name="descripcion" id="descripcion"></textarea>

            <h1><i class="fas fa-images"></i> Gestor de Imágenes</h1>
            <button class="gestor-img" id="file-input">
                <h3>Haz click aquí para subir imagenes.</h3>
                <p>(Tamaño máximo de 10MB)</p>
                <p><span id="cantidadImagenes">0</span>/15</p>
                <i class="fas fa-plus-circle"></i>
            </button>
            <input type="file" name="upload-photo" id="upload-photo" max-size="10" accept="image/png, image/jpeg" multiple>

            <div class="galeria" id="galeria">
            </div>

            <h1><i class="fas fa-file-pdf"></i> Gestor de Archivos</h1>
            <button class="gestor-img" id="file-input-pdf">
                <h3>Haz click aquí para subir un pdf.</h3>
                <i class="fas fa-plus-circle"></i>
            </button>
            <input type="file" name="upload-pdf" accept="application/pdf" id="upload-pdf">

            <div class="galeria pdf" id="previewPDF">

                <embed src="" width="100%" height="100%" id="pdf"/>
                <button id="eliminarPDF"><i class="fas fa-times"></i></button>

            </div>

            <h1><i class="fas fa-plus"></i> Extras</h1>
            <input type="text" name="extra" class="extra" id="extra" placeholder="Ej: Link Youtube, etc.">

            <div class="buttons">
                <button id="subirpropiedad"><i class="fas fa-cart-plus"></i> Subir Propiedad</button>
                <!--<button id="subirborrador"><i class="fas fa-eraser"></i> Guardar como Borrador</button>-->
                <button id="cancelar"><i class="fas fa-ban"></i> Cancelar</button>
            </div>
        </div>
    </div>

    <script src="/obededom/Plugins/ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace('garantias');
        CKEDITOR.replace('descripcion');
    </script>


</body>
</html>