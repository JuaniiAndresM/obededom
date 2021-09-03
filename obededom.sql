-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: obededom
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tabla_departamentos`
--

DROP TABLE IF EXISTS `tabla_departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_departamentos` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_departamentos`
--

LOCK TABLES `tabla_departamentos` WRITE;
/*!40000 ALTER TABLE `tabla_departamentos` DISABLE KEYS */;
INSERT INTO `tabla_departamentos` VALUES (1,'Artigas'),(2,'Canelones'),(3,'Cerro Largo'),(4,'Colonia'),(5,'Durazno'),(6,'Flores'),(7,'Florida'),(8,'Lavalleja'),(9,'Maldonado'),(10,'Montevideo'),(11,'Paysandú'),(12,'Río Negro'),(13,'Rivera'),(14,'Rocha'),(15,'Salto'),(16,'San José'),(17,'Soriano'),(18,'Tacuarembó'),(19,'Treinta y Tres');
/*!40000 ALTER TABLE `tabla_departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_dormitorios`
--

DROP TABLE IF EXISTS `tabla_dormitorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_dormitorios` (
  `id_dormitorios` int NOT NULL AUTO_INCREMENT,
  `cantidad_dormitorios` int DEFAULT NULL,
  PRIMARY KEY (`id_dormitorios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_dormitorios`
--

LOCK TABLES `tabla_dormitorios` WRITE;
/*!40000 ALTER TABLE `tabla_dormitorios` DISABLE KEYS */;
/*!40000 ALTER TABLE `tabla_dormitorios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_estados`
--

DROP TABLE IF EXISTS `tabla_estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_estados` (
  `id_estados` int NOT NULL AUTO_INCREMENT,
  `tipo_estados` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_estados`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_estados`
--

LOCK TABLES `tabla_estados` WRITE;
/*!40000 ALTER TABLE `tabla_estados` DISABLE KEYS */;
INSERT INTO `tabla_estados` VALUES (1,'Sin Definir'),(2,'Reciclada'),(3,'A Reciclar'),(4,'Requiere Mantenimiento'),(5,'Buen Estado'),(6,'Excelente Estado'),(7,'A Estrenar'),(8,'En Construcción'),(9,'En Pozo');
/*!40000 ALTER TABLE `tabla_estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_localidades`
--

DROP TABLE IF EXISTS `tabla_localidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_localidades` (
  `id_barrios` int NOT NULL AUTO_INCREMENT,
  `id_departamento` int NOT NULL,
  `nombre_localidad` varchar(100) NOT NULL,
  PRIMARY KEY (`id_barrios`,`nombre_localidad`),
  KEY `ID_Departamento_idx` (`id_departamento`),
  CONSTRAINT `ID_Departamento` FOREIGN KEY (`id_departamento`) REFERENCES `tabla_departamentos` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=802 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_localidades`
--

LOCK TABLES `tabla_localidades` WRITE;
/*!40000 ALTER TABLE `tabla_localidades` DISABLE KEYS */;
INSERT INTO `tabla_localidades` VALUES (76,1,'Artigas'),(77,1,'Baltasar Brum'),(78,1,'Bella Unión'),(79,1,'Bernabé Rivera'),(80,1,'Cainsa'),(81,1,'Cainza Campo 3'),(82,1,'Calnu'),(83,1,'Camaño'),(84,1,'Catalán Grande'),(85,1,'Catalán Volcan'),(86,1,'Cerrito'),(87,1,'Cerro Ejido'),(88,1,'Cerro San Eugenio'),(89,1,'Cerro Signorelli'),(90,1,'Chiflero'),(91,1,'Colonia Aparicio Saravia'),(92,1,'Colonia España'),(93,1,'Colonia Estrella'),(94,1,'Colonia José Artigas'),(95,1,'Colonia Palma'),(96,1,'Colonia Pintado'),(97,1,'Colonia Viñar'),(98,1,'Coronado'),(99,1,'Cota 205'),(100,1,'Cuareim'),(101,1,'Cuaró'),(102,1,'Estiba'),(103,1,'Fagundez'),(104,1,'Franquia'),(105,1,'Guyubira'),(106,1,'Javier de Viana'),(107,1,'La Bolsa'),(108,1,'Las Piedras'),(109,1,'Lenguazo'),(110,1,'Limite Contestado'),(111,1,'Menezes'),(112,1,'Mones Quintela'),(113,1,'Otras'),(114,1,'Paguero'),(115,1,'Palma Sola'),(116,1,'Paraje Diego Lamas'),(117,1,'Paredon'),(118,1,'Paso de la Cruz'),(119,1,'Paso de Leon'),(120,1,'Paso de Ramos'),(121,1,'Paso Farías'),(122,1,'Patitas'),(123,1,'Piedra Pintada'),(124,1,'Pintadito'),(125,1,'Pintado'),(126,1,'Pintado Grande'),(127,1,'Pje. Paso Campamento'),(128,1,'Portones de Hierro y Campodonico'),(129,1,'Pueblo Sequeira'),(130,1,'Rincon de Pacheco'),(131,1,'Sarandi de Cuaro'),(132,1,'Sarandi de Yacuy'),(133,1,'Tamandua'),(134,1,'Taruman'),(135,1,'Tomás Gomensoro'),(136,1,'Topador'),(137,1,'Zanja Aruera'),(138,2,'Acapulco'),(139,2,'Aeropuerto Internacional de Carrasco'),(140,2,'Aguas Corrientes'),(141,2,'Araminda'),(142,2,'Arenal'),(143,2,'Atlántida'),(144,2,'B.H.U'),(145,2,'Balneario Argentino'),(146,2,'Barra de la Pedrera'),(147,2,'Barra del Tala'),(148,2,'Barra de Carrasco'),(149,2,'Barrancas Coloradas'),(150,2,'Barrio Benzo'),(151,2,'Barrio Copola'),(152,2,'Barrio del Libertador'),(153,2,'Barrio la Lucha'),(154,2,'Barrio los Panoramas'),(155,2,'Barrio Obrero'),(156,2,'Barrio Pretti'),(157,2,'Barrio Remanso'),(158,2,'Barrio Santa Rita'),(159,2,'Barrio Traverso'),(160,2,'Barrio Villa Murcia'),(161,2,'Barros Blancos'),(162,2,'Bañado de Medina'),(163,2,'Bello Horizonte'),(164,2,'Biarritz'),(165,2,'Blanco'),(166,2,'Bolivar'),(167,2,'Camino de la Cadena'),(168,2,'Camino Dodera'),(169,2,'Camino Lloveras'),(170,2,'Campo Militar'),(171,2,'Canelon Chico'),(172,2,'Canelon Chico al Centro'),(173,2,'Canelon Chico de Progreso'),(174,2,'Canelon Grande'),(175,2,'Canelon Grande de Pacheco'),(176,2,'Canelon Grande Norte'),(177,2,'Canelones'),(178,2,'Capilla de Cella'),(179,2,'Carmel'),(180,2,'Carrasco del Sauce'),(181,2,'Casarino'),(182,2,'Cañada Cardozo'),(183,2,'Cañada de Montaño'),(184,2,'Cañada Grande'),(186,2,'Cañada Prudencio'),(187,2,'Cerrillos'),(188,2,'Cerrillos al Oeste'),(189,2,'Cerrillos al Sur'),(190,2,'City Golf'),(191,2,'Ciudad de la Costa'),(192,2,'Cochengo'),(193,2,'Colinas de Carrasco'),(194,2,'Colinas de Solymar'),(195,2,'Colonia Treinta y Tres Orientales'),(196,2,'Colorado Chico'),(197,2,'Colorado y Brujas'),(198,2,'Costa Azul'),(199,2,'Costa de Pando'),(200,2,'Costa de Pando Olmos'),(201,2,'Costa de Pando San Bautista'),(202,2,'Costa de Pando San Jacinto'),(203,2,'Costa del Pantanoso'),(204,2,'Costa del Sauce'),(205,2,'Costa del Tala Este'),(206,2,'Costa del Tala Norte'),(207,2,'Costa y Guillamon'),(208,2,'Costas de Pedernal'),(209,2,'Costas de Santa Lucía'),(210,2,'Costas de Solis'),(211,2,'Costas del Colorado'),(212,2,'Costas del Colorado Este'),(213,2,'Costas del Tala'),(214,2,'Cruz de los Caminos'),(215,2,'Cuchilla Alta'),(216,2,'Cuchilla Alta y el Galeon'),(217,2,'Cuchilla Cabo de Hornos'),(218,2,'Cuchilla de Machin'),(219,2,'Cuchilla de Rocha'),(220,2,'Cuchilla de Sierra'),(221,2,'Cuchilla de Zeballos'),(222,2,'Cuchilla Verde'),(223,2,'Cueva del Tigre'),(224,2,'Cumbres de Carrasco'),(225,2,'Echevarría'),(226,2,'El Bosque'),(227,2,'El Bosque de Solymar'),(228,2,'El Colorado'),(229,2,'El Colorado de Migues'),(230,2,'El Colorado San Bautista'),(231,2,'El Cuadro'),(232,2,'El Dorado'),(233,2,'El Galeon'),(234,2,'El Pinar'),(235,2,'Empalme Dogliotti'),(236,2,'Empalme Nicolich'),(237,2,'Empalme Olmos'),(238,2,'Empalme Sauce'),(239,2,'Esquina Gonzalez'),(240,2,'Est. Atlántida'),(241,2,'Estación Migues'),(242,2,'Estación Piedras de Afilar'),(243,2,'Estación Tapia'),(244,2,'Estación Pedrera'),(245,2,'Estación la Floresta'),(246,2,'Estanque de Pando'),(247,2,'Feliciano'),(248,2,'Fortín de Santa Rosa'),(249,2,'Fracc Sobre Ruta 74'),(250,2,'Fracc. Cno. Andaluz y R.84'),(251,2,'Fracc. Progreso'),(252,2,'General Líber Seregni'),(253,2,'Guazuvirá Nuevo'),(254,2,'Guazú-Virá'),(255,2,'Haras del Lago'),(256,2,'Instituto Adventista'),(257,2,'Jardines de Pando'),(258,2,'Jaureguiberry'),(259,2,'Joaquín Suárez'),(260,2,'Juan Antonio Artigas'),(261,2,'Juanicó'),(262,2,'La Asunción'),(263,2,'La Chinchilla'),(264,2,'La Floresta'),(265,2,'La Montañesa'),(266,2,'La Palmita'),(267,2,'La Paloma'),(268,2,'La Paz'),(269,2,'La Tahona'),(270,2,'La Totora'),(271,2,'La Tuna'),(272,2,'Lago Jardín del Bosque'),(273,2,'Lagomar'),(274,2,'Las Brujas'),(275,2,'Las Higueritas'),(276,2,'Las Piedras'),(277,2,'Las Ranas'),(278,2,'Las Toscas'),(279,2,'Las Vegas'),(280,2,'Las Vegas'),(281,2,'Las Violetas'),(282,2,'Lomas de Carrasco'),(283,2,'Lomas de Toledo'),(284,2,'Lomas de Solymar'),(285,2,'Los Ceibos'),(286,2,'Los Cerrillos'),(287,2,'Los Hornos'),(288,2,'Los Titanes'),(289,2,'Macana'),(290,2,'Margat'),(291,2,'Marindia'),(292,2,'Mata Siete'),(293,2,'Mataojo'),(294,2,'Melgarejo'),(295,2,'Melilla'),(296,2,'Migues'),(297,2,'Montes'),(298,2,'Montes de Solymar'),(299,2,'Murialdo'),(300,2,'Médanos de Solymar'),(301,2,'Nataly'),(302,2,'Neptunia'),(303,2,'Nutrias'),(304,2,'Olmos'),(305,2,'Otras'),(306,2,'Pando'),(307,2,'Pantanoso'),(308,2,'Pantanoso del Sauce'),(309,2,'Parada Cabrera'),(310,2,'Parador Tajes'),(311,2,'Parque Carrasco'),(312,2,'Parque Miramar'),(313,2,'Parque de Solymar'),(314,2,'Parque del Plata'),(315,2,'Paso Arbelo'),(316,2,'Paso de Cuello'),(317,2,'Paso de la Cadena'),(318,2,'Paso de la Paloma'),(319,2,'Paso de la Salamanca'),(320,2,'Paso de las Toscas'),(321,2,'Paso de los Alamos'),(322,2,'Paso de los Difuntos'),(323,2,'Paso de los Francos'),(324,2,'Paso De Pache'),(325,2,'Paso del Bote'),(326,2,'Paso del Colorado'),(327,2,'Paso del Medio'),(328,2,'Paso del Sordo'),(329,2,'Paso Espinosa'),(330,2,'paso Palomeque'),(331,2,'Paso Rivero de Vejigas'),(332,2,'Paso de Carrasco'),(333,2,'Pedernal'),(334,2,'Pedernal Chico'),(335,2,'Pedernal Grande'),(336,2,'Piedra del Toro'),(337,2,'Piedra Sola'),(338,2,'Piedras de Afilar'),(339,2,'Piedritas'),(340,2,'Piedritas de Suarez'),(341,2,'Pinamar'),(342,2,'Pinamar y Pinepark'),(343,2,'Pinares de Solymar'),(344,2,'Pine Park'),(345,2,'Ponce Mata Siete'),(346,2,'Poquitos'),(347,2,'Progreso'),(348,2,'Pueblo Castellanos'),(349,2,'Pueblo Suizo'),(350,2,'Puente de Brujas'),(351,2,'Puntas de Brujas'),(352,2,'Puntas de Canelon Chico'),(353,2,'Puntas de Cañada Cardozo'),(354,2,'Puntas de Cañada Grande'),(355,2,'Puntas de Cochengo'),(356,2,'Puntas de las Violetas'),(357,2,'Puntas de Mata Siete'),(358,2,'Puntas de Pantanoso'),(359,2,'Puntas de Pantanoso Este'),(360,2,'Puntas de Pedrera'),(361,2,'Puntas de Toledo'),(362,2,'Puntas de Vejigas'),(363,2,'Puntas del Arenal'),(364,2,'Quinta los Horneros'),(365,2,'Quintas del Bosque'),(366,2,'Rancherios de Ponce'),(367,2,'Rincon de Carrasco'),(368,2,'Rincon de Pando'),(369,2,'Rincon de Portezuelo'),(370,2,'Rincon de Velazquez'),(371,2,'Rincon de Vidal'),(372,2,'Rincon del Colorado'),(373,2,'Rincon del Conde'),(374,2,'Rincon del Gigante'),(375,2,'Salinas'),(376,2,'San Andres'),(377,2,'San Antonio'),(378,2,'San Bautista'),(379,2,'San Cristóbal'),(380,2,'San Jacinto'),(381,2,'San José de Carrasco'),(382,2,'San Luis'),(383,2,'San Pedro'),(384,2,'San Ramón'),(385,2,'Santa Ana'),(386,2,'Santa Lucía'),(387,2,'Santa Lucía del Este'),(388,2,'Santa Rosa'),(389,2,'Santa Teresita'),(390,2,'Santos Lugares'),(391,2,'Sarandí de Migues'),(392,2,'Sauce'),(393,2,'Sauce de Solis'),(394,2,'Sauce Solo'),(395,2,'Sauce Solo de Migues'),(396,2,'Sauce Solo de Montes'),(397,2,'Seis Hermanos'),(398,2,'Shangrilá'),(399,2,'Sierra del Mar'),(400,2,'Soca'),(401,2,'Sofía Santos'),(402,2,'Solis Chico de Migues'),(403,2,'Solymar'),(404,2,'Solís Chico'),(405,2,'Sosa Diaz'),(406,2,'Suárez'),(407,2,'Tala'),(408,2,'Talita'),(409,2,'Toledo'),(410,2,'Totoral'),(411,2,'Vejigas'),(412,2,'Vejigas de San Ramon'),(413,2,'Vejigas de Tala'),(414,2,'Viejo Molino San Bernardo'),(415,2,'Villa Aeroparque'),(416,2,'Villa Arejo'),(417,2,'Villa Argentina'),(418,2,'Villa Crespo'),(419,2,'Villa El Tato'),(420,2,'Villa Encantada'),(421,2,'Villa Felicidad'),(422,2,'Villa Foresti'),(423,2,'Villa Fortuna'),(424,2,'Villa Hadita'),(425,2,'Villa Huertos de Toledo'),(426,2,'Villa Juana'),(427,2,'Villa Juanita'),(428,2,'Villa Los Alpes'),(429,2,'Villa Marina'),(430,2,'Villa Molfino'),(431,2,'Villa Nueva'),(432,2,'Villa Paz S.A.'),(433,2,'Villa Prados de Toledo'),(434,2,'Villa San Cono'),(435,2,'Villa San Felipe'),(436,2,'Villa San José'),(437,2,'Villa Valverde'),(438,2,'Vista Linda'),(439,3,'Aceguá'),(440,3,'Aguirre'),(441,3,'Amarillo'),(442,3,'Arachania'),(443,3,'Arbolito'),(444,3,'Arevalo'),(445,3,'Aroyo malo'),(446,3,'Arrozal Cesarone'),(447,3,'Arrozal Rosales'),(448,3,'Asperezas'),(449,3,'Barra del Sauce'),(450,3,'Barra de Tacuarí'),(451,3,'Barrio la Vinchuca'),(452,3,'Barrio Lopez Benitez'),(453,3,'Bañado de las Pajas'),(454,3,'Bañado de Medina'),(455,3,'Berachi'),(456,3,'Buena Vista'),(457,3,'Calera de Recalde'),(458,3,'Campamento'),(459,3,'Casa de las Cronicas'),(460,3,'Caserio de las Cañas'),(461,3,'Cañada Brava'),(462,3,'Cañada de Santos'),(463,3,'Cañada Grande'),(464,3,'Cañada Sarandí'),(465,3,'Cañitas'),(466,3,'Cementerio'),(467,3,'Centurion'),(468,3,'Cerro de las Cuentas'),(469,3,'Chacras de Melo'),(470,3,'Coimbra'),(471,3,'Colonia Ceres'),(472,3,'Colonia María Teresa'),(473,3,'Colonia Orozco'),(474,3,'Conventos'),(475,3,'Corral de Piedra'),(476,3,'Cruz de Piedra'),(477,3,'Cuchilla Cambota'),(478,3,'Cuchilla de Melo'),(479,3,'Cuchilla del Carmen'),(480,3,'Cuchilla del Paraiso'),(481,3,'Cuchilla Peralta'),(482,3,'Duraznero'),(483,3,'Escuela de Agronomía'),(484,3,'Esperanza'),(485,3,'Falda de Sierra de los Ríos'),(486,3,'Fraile Muerto'),(487,3,'Ganen'),(488,3,'Garao'),(489,3,'Granja de Aceguá'),(490,3,'Granja Pallero'),(491,3,'Guazunambi'),(492,3,'Hipodromo'),(493,3,'Infiernillo'),(494,3,'Isodoro Noblia'),(495,3,'La Coronilla'),(496,3,'La Gloria'),(497,3,'La Micaela'),(498,3,'La Mina'),(499,3,'La Pedrera'),(500,3,'Lago Merín'),(501,3,'Laguna del Junco'),(502,3,'Las Limas'),(503,3,'Los Cerros'),(504,3,'Mangrullo'),(505,3,'Mazangano'),(506,3,'Melo'),(507,3,'Minuano de Aceguá'),(508,3,'Misterio'),(509,3,'Montecito'),(510,3,'Nando'),(511,3,'Otras'),(512,3,'Panteon'),(513,3,'Paso de la Cruz'),(514,3,'Paso de las Tropas '),(515,3,'Paso de las Yeguas'),(516,3,'Paso de los Carros'),(517,3,'Paso Melo'),(518,3,'Paso Pereira'),(519,3,'Peñarol'),(520,3,'Picada de Maya'),(521,3,'Picada de Salome'),(522,3,'Piedra Alta'),(523,3,'Piñeiro'),(524,3,'Placido Rosas'),(525,3,'Poblado Uruguay'),(526,3,'Presidente Doctor Getulio Vargas'),(527,3,'Puente Negro'),(528,3,'Puntas de Amarillo'),(529,3,'Puntas de la Mina'),(530,3,'Puntas de Molles'),(531,3,'Puntas de Palleros'),(532,3,'Puntas de Tacuari'),(533,3,'Puntas del Sauce'),(534,3,'Quebracho'),(535,3,'Ramon Trigo'),(536,3,'Rincon de Contreras'),(537,3,'Rincon de la Urbana'),(538,3,'Rincon de los Coroneles'),(539,3,'Rincon de los Olivera'),(540,3,'Rincon de Paiva'),(541,3,'Rincon de Py'),(542,3,'Rincon de Suárez'),(543,3,'Rincon de Tacuarí'),(544,3,'Rodriguez'),(545,3,'Rio Branco'),(546,3,'Saldañas'),(547,3,'San Diego'),(548,3,'San Servando'),(549,3,'Sanchez'),(550,3,'Santa Teresa'),(551,3,'Sarandi de Acegua'),(552,3,'Sarandi de Barcelo'),(553,3,'Sarandi de Yaguaron'),(554,3,'Sauce de Conventos'),(555,3,'Soto Goro'),(556,3,'Toledo'),(557,3,'Tres Boliches'),(558,3,'Tres Islas'),(559,3,'Tupambaé'),(560,3,'Uruguay'),(561,3,'Villa Viñoles'),(562,3,'Wenceslao Silvera'),(563,3,'Ñangapire'),(564,4,'Agraciada'),(565,4,'Arrivillaga'),(566,4,'Artilleros'),(567,4,'Barker'),(568,4,'Barker Norte'),(569,4,'Barrancas Coloradas'),(570,4,'Barrio Mendaña'),(571,4,'Barrio Olimpico'),(572,4,'Belgrano Norte'),(573,4,'Belgrano Sur'),(574,4,'Blanca Arena'),(575,4,'Boca del Rosario Oeste'),(576,4,'Boca del Rosario'),(577,4,'Bonjour'),(578,4,'Brisas del Plata'),(579,4,'Buena Hora'),(580,4,'Campamento Artigas'),(581,4,'Campana'),(582,4,'Carmelo'),(583,4,'Caserio el Cerro'),(584,4,'Cerro Carmelo'),(585,4,'Cerro de las Armas'),(586,4,'Cerros de San Juan'),(587,4,'Cerros Negros'),(588,4,'Chico Torino'),(589,4,'Colonia Arrue'),(590,4,'Colonia Cosmopolita'),(591,4,'Colonia Española'),(592,4,'Colonia Estrella'),(593,4,'Colonia Miguelete'),(594,4,'Colonia Peirano'),(595,4,'Colonia Quevedo'),(596,4,'Colonia Sarandí'),(597,4,'Colonia Talice'),(598,4,'Colonia Valdense'),(599,4,'Colonia del Sacramento'),(600,4,'Conchillas'),(601,4,'Concordia'),(602,4,'Costa de Colla al Este'),(603,4,'Costa de Rosario'),(604,4,'Costa de Tarariras'),(605,4,'Costa de Vacas'),(606,4,'Costa del Navarro'),(607,4,'Costas de Juan Gonzalez'),(608,4,'Costas de Polonia'),(609,4,'Costas de San Juan'),(610,4,'Cufre'),(611,4,'Curupi'),(612,4,'El Bañado'),(613,4,'El Caño'),(614,4,'El Cerro'),(615,4,'El Chileno'),(616,4,'El Cuadro'),(617,4,'El Ensueño'),(618,4,'El Faro'),(619,4,'El General'),(620,4,'El Quinton'),(621,4,'El Semillero'),(622,4,'Estacion Experimental la Estanzuela'),(623,4,'Estancia Anchorena'),(624,4,'Florencio Sánchez'),(625,4,'Gil'),(626,4,'Juan Carlos Caseros'),(627,4,'Juan Gonzalez'),(628,4,'Juan Jackson'),(629,4,'Juan Lacaze'),(630,4,'La Estanzuela'),(631,4,'La Horqueta'),(632,4,'La Paz'),(633,4,'La Sierra'),(634,4,'Laguna de los Patos'),(635,4,'Las Chispas'),(636,4,'Las Flores'),(637,4,'Lomas de Carmelo'),(638,4,'Los Pinos'),(639,4,'Manantiales'),(640,4,'Martin Chico'),(641,4,'Martin Chico de Conchillas'),(642,4,'Media Agua'),(643,4,'Miguelete de Conchillas'),(645,4,'Minas de Narancio'),(646,4,'Minuano y Sauce'),(647,4,'Molles de Miguelete'),(648,4,'Nueva Helvecia'),(649,4,'Nueva Palmira'),(650,4,'Ombues de Lavalle'),(651,4,'Otras'),(652,4,'Paraje Minuano'),(653,4,'Paso Antolin'),(654,4,'Paso Birriel'),(655,4,'Paso de la Quinta'),(656,4,'Paso Hospital'),(657,4,'Paso Hospital Manantiales'),(658,4,'Paso Morlan'),(659,4,'Paso Quicho'),(660,4,'Pastoreo'),(661,4,'Picada de Benitez'),(662,4,'Piedra Chata'),(663,4,'Piedra de los Indios'),(664,4,'Piedras Blancas'),(665,4,'Playa Azul'),(666,4,'Playa Britópolis'),(667,4,'Playa Fomento'),(668,4,'Playa Parant'),(669,4,'Polancos'),(670,4,'Puerto Concordia'),(671,4,'Puerto Ingles'),(672,4,'Puerto Platero'),(673,4,'Puerto Rosario'),(674,4,'Punta Francesa'),(675,4,'Puntas de Juan Gonzalez'),(676,4,'Puntas de Melo'),(677,4,'Puntas de San Juan'),(678,4,'Puntas de San Pedro'),(679,4,'Puntas de Riachuelo'),(680,4,'Puntas del Rosario'),(681,4,'Puntas del Sauce'),(682,4,'Quinton'),(683,4,'Radial Hernandez'),(684,4,'Radial Rosario'),(685,4,'Real de Vera'),(686,4,'Reducto'),(687,4,'Resguardo Cufre'),(688,4,'Riachuelo'),(689,4,'Rincon del Rey'),(690,4,'Rosario'),(691,4,'Rosario y Colla'),(692,4,'San Juan'),(693,4,'San Luis'),(694,4,'San Luis de Tarariras'),(695,4,'San Luis Sanchez'),(696,4,'San Pedro'),(697,4,'San Pedro de Arriba'),(698,4,'San Pedro Norte'),(699,4,'San Roque'),(700,4,'Santa Ana'),(701,4,'Santa Regina'),(703,4,'Santa Rosa'),(704,4,'Sarandi Campana'),(705,4,'Tarariras'),(706,4,'Terminal'),(707,4,'Tomas Bell'),(708,4,'Tres Esquinas'),(709,4,'Valdenese'),(710,4,'Viboras'),(711,4,'Viboras y Vacas'),(712,4,'Villa Pancha'),(713,4,'Zagarazazu'),(714,4,'Zunin'),(715,5,'Abella'),(716,5,'Aguas Buenas'),(717,5,'Arroyo de los Perros'),(718,5,'Barrancas Coloradas'),(719,5,'Barrio Duran'),(720,5,'Batovi'),(721,5,'Baygorria'),(722,5,'Blanquillo'),(723,5,'Blanquillo al Oeste'),(724,5,'Caballero'),(725,5,'Capilla de Farruco'),(726,5,'Carlos Reyles'),(727,5,'Ceibal'),(728,5,'Cerrezuelo'),(729,5,'Cerro Chato'),(730,5,'Cerro Convento'),(731,5,'Chacras de Durazno'),(732,5,'Chileno'),(733,5,'Chileno Chico'),(734,5,'Chileno Grade (Aguero)'),(735,5,'Costa de Cuadra'),(736,5,'Cuchilla de Ramirez'),(737,5,'Cuchilla del Rincon'),(738,5,'De Dios'),(739,5,'Durazno'),(740,5,'Elias Regules'),(741,5,'Estacion Chileno'),(742,5,'Feliciano'),(743,5,'Fonseca'),(744,5,'Higueras de Carpinteria'),(745,5,'La Alegría'),(746,5,'La Mazamorra'),(747,5,'La Paloma'),(748,5,'Las Acacias'),(749,5,'Las Cañas'),(750,5,'Las Palmas'),(751,5,'Las Tunas'),(752,5,'Los Agregados'),(753,5,'Los Tapes'),(754,5,'Maestre Campo'),(755,5,'Malbajar Este'),(756,5,'Malbajar Oeste'),(757,5,'Maria Cejas'),(758,5,'Mariscala'),(759,5,'Mariscala del Carmen'),(760,5,'Molles Chico'),(761,5,'Molles de Quinteros'),(762,5,'Mouriño'),(763,5,'Municipio de Durazno'),(764,5,'Ombues de Oribe'),(765,5,'Otras'),(766,5,'Palmar de Porrua'),(767,5,'Parada Sur'),(768,5,'Parada Sur'),(769,5,'Parish'),(770,5,'Paso de Aguirre'),(771,5,'Paso de Castro'),(772,5,'Paso del Medio las Palmas'),(773,5,'Paso Ramirez'),(774,5,'Paso Real de Carpinteria'),(775,5,'Paso Tejera'),(776,5,'Pueblo Centenario'),(777,5,'Pueblo de Alvarez'),(778,5,'Puglia'),(779,5,'Puntas de Carpinteria'),(780,5,'Puntas de Herrera'),(781,5,'Puntas de Malbajar'),(782,5,'Rincon de Cuadra'),(783,5,'Rincon de los Tapes'),(784,5,'Rolon'),(785,5,'Rossell y Ruis'),(786,5,'Salinas'),(787,5,'Salinas Chico'),(788,5,'San Jorge'),(789,5,'San Jose de las Cañas'),(790,5,'Sandu Chico'),(791,5,'Santa Bernardina'),(792,5,'Sarandi de la China'),(793,5,'Sarandi de Rio Negro'),(794,5,'Sarandi del Yi'),(795,5,'Sauce de Herrera'),(796,5,'Sauce del Yi'),(797,5,'Tala de Mariscala'),(798,5,'Tejera'),(799,5,'Verdun'),(800,5,'Villa del Carmen'),(801,5,'Villasboas');
/*!40000 ALTER TABLE `tabla_localidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_tipooperacion`
--

DROP TABLE IF EXISTS `tabla_tipooperacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_tipooperacion` (
  `id_tipooperacion` int NOT NULL AUTO_INCREMENT,
  `Tipo_Operacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_tipooperacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_tipooperacion`
--

LOCK TABLES `tabla_tipooperacion` WRITE;
/*!40000 ALTER TABLE `tabla_tipooperacion` DISABLE KEYS */;
INSERT INTO `tabla_tipooperacion` VALUES (1,'Venta'),(2,'Alquiler'),(3,'Alquiler Temporal');
/*!40000 ALTER TABLE `tabla_tipooperacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tabla_tipopropiedad`
--

DROP TABLE IF EXISTS `tabla_tipopropiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_tipopropiedad` (
  `id_tipopropiedad` int NOT NULL AUTO_INCREMENT,
  `Tipo_Propiedad` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_tipopropiedad`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabla_tipopropiedad`
--

LOCK TABLES `tabla_tipopropiedad` WRITE;
/*!40000 ALTER TABLE `tabla_tipopropiedad` DISABLE KEYS */;
INSERT INTO `tabla_tipopropiedad` VALUES (1,'Casa'),(2,'Apartamento'),(3,'Terrenos'),(4,'Locales Comerciales'),(5,'Oficinas'),(6,'Chacras y Campos'),(7,'Garage o Cochera'),(8,'Negocio Empresarial'),(9,'Edificio'),(10,'Hotel'),(11,'Local Instruial y/o Galpon');
/*!40000 ALTER TABLE `tabla_tipopropiedad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-02 23:20:43
