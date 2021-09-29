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
-- Table structure for table `banio`
--

DROP TABLE IF EXISTS `banio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banio` (
  `id_baños` int NOT NULL AUTO_INCREMENT,
  `cantidad_baños` int NOT NULL,
  PRIMARY KEY (`id_baños`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banio`
--

LOCK TABLES `banio` WRITE;
/*!40000 ALTER TABLE `banio` DISABLE KEYS */;
INSERT INTO `banio` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `banio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comfort`
--

DROP TABLE IF EXISTS `comfort`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comfort` (
  `id_Comfort` int NOT NULL AUTO_INCREMENT,
  `tipo_comfort` varchar(60) NOT NULL,
  `comfortcol` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Comfort`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comfort`
--

LOCK TABLES `comfort` WRITE;
/*!40000 ALTER TABLE `comfort` DISABLE KEYS */;
INSERT INTO `comfort` VALUES (1,'Acceso a Internet',''),(2,'Aire Acondicionado',''),(3,'Calefacción',''),(4,'Amueblada',''),(5,'Chimenea',''),(6,'Gimnasio',''),(7,'Jacuzzi',''),(8,'Piscina',''),(9,'Gas por Cañería',''),(10,'Sauna',''),(11,'Living Comedor','');
/*!40000 ALTER TABLE `comfort` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comfort_propiedad`
--

DROP TABLE IF EXISTS `comfort_propiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comfort_propiedad` (
  `id_tabla_comfort` int NOT NULL AUTO_INCREMENT,
  `id_propiedad` int NOT NULL,
  `id_comfort` int NOT NULL,
  PRIMARY KEY (`id_tabla_comfort`),
  KEY `id_propiedad3_idx` (`id_propiedad`),
  KEY `id_comfort_idx` (`id_comfort`),
  CONSTRAINT `id_comfort` FOREIGN KEY (`id_comfort`) REFERENCES `comfort` (`id_Comfort`),
  CONSTRAINT `id_propiedad3` FOREIGN KEY (`id_propiedad`) REFERENCES `propiedades` (`id_propiedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comfort_propiedad`
--

LOCK TABLES `comfort_propiedad` WRITE;
/*!40000 ALTER TABLE `comfort_propiedad` DISABLE KEYS */;
/*!40000 ALTER TABLE `comfort_propiedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamentos` (
  `id_departamento` int NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(100) NOT NULL,
  PRIMARY KEY (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamentos`
--

LOCK TABLES `departamentos` WRITE;
/*!40000 ALTER TABLE `departamentos` DISABLE KEYS */;
INSERT INTO `departamentos` VALUES (1,'Artigas'),(2,'Canelones'),(3,'Cerro Largo'),(4,'Colonia'),(5,'Durazno'),(6,'Flores'),(7,'Florida'),(8,'Lavalleja'),(9,'Maldonado'),(10,'Montevideo'),(11,'Paysandú'),(12,'Río Negro'),(13,'Rivera'),(14,'Rocha'),(15,'Salto'),(16,'San José'),(17,'Soriano'),(18,'Tacuarembó'),(19,'Treinta y Tres');
/*!40000 ALTER TABLE `departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `distancia_mar`
--

DROP TABLE IF EXISTS `distancia_mar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `distancia_mar` (
  `id_distancia_mar` int NOT NULL AUTO_INCREMENT,
  `distancia_mar` varchar(45) NOT NULL,
  PRIMARY KEY (`id_distancia_mar`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distancia_mar`
--

LOCK TABLES `distancia_mar` WRITE;
/*!40000 ALTER TABLE `distancia_mar` DISABLE KEYS */;
INSERT INTO `distancia_mar` VALUES (1,'No Aplica'),(2,'1km'),(3,'10km'),(4,'20km'),(5,'50km');
/*!40000 ALTER TABLE `distancia_mar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dormitorios`
--

DROP TABLE IF EXISTS `dormitorios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dormitorios` (
  `id_dormitorios` int NOT NULL AUTO_INCREMENT,
  `cantidad_dormitorios` int NOT NULL,
  PRIMARY KEY (`id_dormitorios`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dormitorios`
--

LOCK TABLES `dormitorios` WRITE;
/*!40000 ALTER TABLE `dormitorios` DISABLE KEYS */;
INSERT INTO `dormitorios` VALUES (1,1),(2,2),(3,3),(4,4),(5,5);
/*!40000 ALTER TABLE `dormitorios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estados` (
  `id_estados` int NOT NULL AUTO_INCREMENT,
  `tipo_estados` varchar(100) NOT NULL,
  PRIMARY KEY (`id_estados`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'Sin Definir'),(2,'Reciclada'),(3,'A Reciclar'),(4,'Requiere Mantenimiento'),(5,'Buen Estado'),(6,'Excelente Estado'),(7,'A Estrenar'),(8,'En Construcción'),(9,'En Pozo');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `garage`
--

DROP TABLE IF EXISTS `garage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `garage` (
  `id_garage` int NOT NULL AUTO_INCREMENT,
  `cantidad_garage` int NOT NULL,
  PRIMARY KEY (`id_garage`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `garage`
--

LOCK TABLES `garage` WRITE;
/*!40000 ALTER TABLE `garage` DISABLE KEYS */;
INSERT INTO `garage` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `garage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id_propiedad` int NOT NULL,
  `imagen` varchar(200) NOT NULL,
  PRIMARY KEY (`id_propiedad`),
  CONSTRAINT `id_propiedad` FOREIGN KEY (`id_propiedad`) REFERENCES `propiedades` (`id_propiedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidades`
--

DROP TABLE IF EXISTS `localidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localidades` (
  `id_barrios` int NOT NULL AUTO_INCREMENT,
  `id_departamento` int NOT NULL,
  `nombre_localidad` varchar(100) NOT NULL,
  PRIMARY KEY (`id_barrios`,`nombre_localidad`),
  KEY `ID_Departamento_idx` (`id_departamento`),
  CONSTRAINT `ID_Departamento` FOREIGN KEY (`id_departamento`) REFERENCES `departamentos` (`id_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=1655 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidades`
--

LOCK TABLES `localidades` WRITE;
/*!40000 ALTER TABLE `localidades` DISABLE KEYS */;
INSERT INTO `localidades` VALUES (76,1,'Artigas'),(77,1,'Baltasar Brum'),(78,1,'Bella Unión'),(79,1,'Bernabé Rivera'),(80,1,'Cainsa'),(81,1,'Cainza Campo 3'),(82,1,'Calnu'),(83,1,'Camaño'),(84,1,'Catalán Grande'),(85,1,'Catalán Volcan'),(86,1,'Cerrito'),(87,1,'Cerro Ejido'),(88,1,'Cerro San Eugenio'),(89,1,'Cerro Signorelli'),(90,1,'Chiflero'),(91,1,'Colonia Aparicio Saravia'),(92,1,'Colonia España'),(93,1,'Colonia Estrella'),(94,1,'Colonia José Artigas'),(95,1,'Colonia Palma'),(96,1,'Colonia Pintado'),(97,1,'Colonia Viñar'),(98,1,'Coronado'),(99,1,'Cota 205'),(100,1,'Cuareim'),(101,1,'Cuaró'),(102,1,'Estiba'),(103,1,'Fagundez'),(104,1,'Franquia'),(105,1,'Guyubira'),(106,1,'Javier de Viana'),(107,1,'La Bolsa'),(108,1,'Las Piedras'),(109,1,'Lenguazo'),(110,1,'Limite Contestado'),(111,1,'Menezes'),(112,1,'Mones Quintela'),(113,1,'Otras'),(114,1,'Paguero'),(115,1,'Palma Sola'),(116,1,'Paraje Diego Lamas'),(117,1,'Paredon'),(118,1,'Paso de la Cruz'),(119,1,'Paso de Leon'),(120,1,'Paso de Ramos'),(121,1,'Paso Farías'),(122,1,'Patitas'),(123,1,'Piedra Pintada'),(124,1,'Pintadito'),(125,1,'Pintado'),(126,1,'Pintado Grande'),(127,1,'Pje. Paso Campamento'),(128,1,'Portones de Hierro y Campodonico'),(129,1,'Pueblo Sequeira'),(130,1,'Rincon de Pacheco'),(131,1,'Sarandi de Cuaro'),(132,1,'Sarandi de Yacuy'),(133,1,'Tamandua'),(134,1,'Taruman'),(135,1,'Tomás Gomensoro'),(136,1,'Topador'),(137,1,'Zanja Aruera'),(138,2,'Acapulco'),(139,2,'Aeropuerto Internacional de Carrasco'),(140,2,'Aguas Corrientes'),(141,2,'Araminda'),(142,2,'Arenal'),(143,2,'Atlántida'),(144,2,'B.H.U'),(145,2,'Balneario Argentino'),(146,2,'Barra de la Pedrera'),(147,2,'Barra del Tala'),(148,2,'Barra de Carrasco'),(149,2,'Barrancas Coloradas'),(150,2,'Barrio Benzo'),(151,2,'Barrio Copola'),(152,2,'Barrio del Libertador'),(153,2,'Barrio la Lucha'),(154,2,'Barrio los Panoramas'),(155,2,'Barrio Obrero'),(156,2,'Barrio Pretti'),(157,2,'Barrio Remanso'),(158,2,'Barrio Santa Rita'),(159,2,'Barrio Traverso'),(160,2,'Barrio Villa Murcia'),(161,2,'Barros Blancos'),(162,2,'Bañado de Medina'),(163,2,'Bello Horizonte'),(164,2,'Biarritz'),(165,2,'Blanco'),(166,2,'Bolivar'),(167,2,'Camino de la Cadena'),(168,2,'Camino Dodera'),(169,2,'Camino Lloveras'),(170,2,'Campo Militar'),(171,2,'Canelon Chico'),(172,2,'Canelon Chico al Centro'),(173,2,'Canelon Chico de Progreso'),(174,2,'Canelon Grande'),(175,2,'Canelon Grande de Pacheco'),(176,2,'Canelon Grande Norte'),(177,2,'Canelones'),(178,2,'Capilla de Cella'),(179,2,'Carmel'),(180,2,'Carrasco del Sauce'),(181,2,'Casarino'),(182,2,'Cañada Cardozo'),(183,2,'Cañada de Montaño'),(184,2,'Cañada Grande'),(186,2,'Cañada Prudencio'),(187,2,'Cerrillos'),(188,2,'Cerrillos al Oeste'),(189,2,'Cerrillos al Sur'),(190,2,'City Golf'),(191,2,'Ciudad de la Costa'),(192,2,'Cochengo'),(193,2,'Colinas de Carrasco'),(194,2,'Colinas de Solymar'),(195,2,'Colonia Treinta y Tres Orientales'),(196,2,'Colorado Chico'),(197,2,'Colorado y Brujas'),(198,2,'Costa Azul'),(199,2,'Costa de Pando'),(200,2,'Costa de Pando Olmos'),(201,2,'Costa de Pando San Bautista'),(202,2,'Costa de Pando San Jacinto'),(203,2,'Costa del Pantanoso'),(204,2,'Costa del Sauce'),(205,2,'Costa del Tala Este'),(206,2,'Costa del Tala Norte'),(207,2,'Costa y Guillamon'),(208,2,'Costas de Pedernal'),(209,2,'Costas de Santa Lucía'),(210,2,'Costas de Solis'),(211,2,'Costas del Colorado'),(212,2,'Costas del Colorado Este'),(213,2,'Costas del Tala'),(214,2,'Cruz de los Caminos'),(215,2,'Cuchilla Alta'),(216,2,'Cuchilla Alta y el Galeon'),(217,2,'Cuchilla Cabo de Hornos'),(218,2,'Cuchilla de Machin'),(219,2,'Cuchilla de Rocha'),(220,2,'Cuchilla de Sierra'),(221,2,'Cuchilla de Zeballos'),(222,2,'Cuchilla Verde'),(223,2,'Cueva del Tigre'),(224,2,'Cumbres de Carrasco'),(225,2,'Echevarría'),(226,2,'El Bosque'),(227,2,'El Bosque de Solymar'),(228,2,'El Colorado'),(229,2,'El Colorado de Migues'),(230,2,'El Colorado San Bautista'),(231,2,'El Cuadro'),(232,2,'El Dorado'),(233,2,'El Galeon'),(234,2,'El Pinar'),(235,2,'Empalme Dogliotti'),(236,2,'Empalme Nicolich'),(237,2,'Empalme Olmos'),(238,2,'Empalme Sauce'),(239,2,'Esquina Gonzalez'),(240,2,'Est. Atlántida'),(241,2,'Estación Migues'),(242,2,'Estación Piedras de Afilar'),(243,2,'Estación Tapia'),(244,2,'Estación Pedrera'),(245,2,'Estación la Floresta'),(246,2,'Estanque de Pando'),(247,2,'Feliciano'),(248,2,'Fortín de Santa Rosa'),(249,2,'Fracc Sobre Ruta 74'),(250,2,'Fracc. Cno. Andaluz y R.84'),(251,2,'Fracc. Progreso'),(252,2,'General Líber Seregni'),(253,2,'Guazuvirá Nuevo'),(254,2,'Guazú-Virá'),(255,2,'Haras del Lago'),(256,2,'Instituto Adventista'),(257,2,'Jardines de Pando'),(258,2,'Jaureguiberry'),(259,2,'Joaquín Suárez'),(260,2,'Juan Antonio Artigas'),(261,2,'Juanicó'),(262,2,'La Asunción'),(263,2,'La Chinchilla'),(264,2,'La Floresta'),(265,2,'La Montañesa'),(266,2,'La Palmita'),(267,2,'La Paloma'),(268,2,'La Paz'),(269,2,'La Tahona'),(270,2,'La Totora'),(271,2,'La Tuna'),(272,2,'Lago Jardín del Bosque'),(273,2,'Lagomar'),(274,2,'Las Brujas'),(275,2,'Las Higueritas'),(276,2,'Las Piedras'),(277,2,'Las Ranas'),(278,2,'Las Toscas'),(279,2,'Las Vegas'),(280,2,'Las Vegas'),(281,2,'Las Violetas'),(282,2,'Lomas de Carrasco'),(283,2,'Lomas de Toledo'),(284,2,'Lomas de Solymar'),(285,2,'Los Ceibos'),(286,2,'Los Cerrillos'),(287,2,'Los Hornos'),(288,2,'Los Titanes'),(289,2,'Macana'),(290,2,'Margat'),(291,2,'Marindia'),(292,2,'Mata Siete'),(293,2,'Mataojo'),(294,2,'Melgarejo'),(295,2,'Melilla'),(296,2,'Migues'),(297,2,'Montes'),(298,2,'Montes de Solymar'),(299,2,'Murialdo'),(300,2,'Médanos de Solymar'),(301,2,'Nataly'),(302,2,'Neptunia'),(303,2,'Nutrias'),(304,2,'Olmos'),(305,2,'Otras'),(306,2,'Pando'),(307,2,'Pantanoso'),(308,2,'Pantanoso del Sauce'),(309,2,'Parada Cabrera'),(310,2,'Parador Tajes'),(311,2,'Parque Carrasco'),(312,2,'Parque Miramar'),(313,2,'Parque de Solymar'),(314,2,'Parque del Plata'),(315,2,'Paso Arbelo'),(316,2,'Paso de Cuello'),(317,2,'Paso de la Cadena'),(318,2,'Paso de la Paloma'),(319,2,'Paso de la Salamanca'),(320,2,'Paso de las Toscas'),(321,2,'Paso de los Alamos'),(322,2,'Paso de los Difuntos'),(323,2,'Paso de los Francos'),(324,2,'Paso De Pache'),(325,2,'Paso del Bote'),(326,2,'Paso del Colorado'),(327,2,'Paso del Medio'),(328,2,'Paso del Sordo'),(329,2,'Paso Espinosa'),(330,2,'paso Palomeque'),(331,2,'Paso Rivero de Vejigas'),(332,2,'Paso de Carrasco'),(333,2,'Pedernal'),(334,2,'Pedernal Chico'),(335,2,'Pedernal Grande'),(336,2,'Piedra del Toro'),(337,2,'Piedra Sola'),(338,2,'Piedras de Afilar'),(339,2,'Piedritas'),(340,2,'Piedritas de Suarez'),(341,2,'Pinamar'),(342,2,'Pinamar y Pinepark'),(343,2,'Pinares de Solymar'),(344,2,'Pine Park'),(345,2,'Ponce Mata Siete'),(346,2,'Poquitos'),(347,2,'Progreso'),(348,2,'Pueblo Castellanos'),(349,2,'Pueblo Suizo'),(350,2,'Puente de Brujas'),(351,2,'Puntas de Brujas'),(352,2,'Puntas de Canelon Chico'),(353,2,'Puntas de Cañada Cardozo'),(354,2,'Puntas de Cañada Grande'),(355,2,'Puntas de Cochengo'),(356,2,'Puntas de las Violetas'),(357,2,'Puntas de Mata Siete'),(358,2,'Puntas de Pantanoso'),(359,2,'Puntas de Pantanoso Este'),(360,2,'Puntas de Pedrera'),(361,2,'Puntas de Toledo'),(362,2,'Puntas de Vejigas'),(363,2,'Puntas del Arenal'),(364,2,'Quinta los Horneros'),(365,2,'Quintas del Bosque'),(366,2,'Rancherios de Ponce'),(367,2,'Rincon de Carrasco'),(368,2,'Rincon de Pando'),(369,2,'Rincon de Portezuelo'),(370,2,'Rincon de Velazquez'),(371,2,'Rincon de Vidal'),(372,2,'Rincon del Colorado'),(373,2,'Rincon del Conde'),(374,2,'Rincon del Gigante'),(375,2,'Salinas'),(376,2,'San Andres'),(377,2,'San Antonio'),(378,2,'San Bautista'),(379,2,'San Cristóbal'),(380,2,'San Jacinto'),(381,2,'San José de Carrasco'),(382,2,'San Luis'),(383,2,'San Pedro'),(384,2,'San Ramón'),(385,2,'Santa Ana'),(386,2,'Santa Lucía'),(387,2,'Santa Lucía del Este'),(388,2,'Santa Rosa'),(389,2,'Santa Teresita'),(390,2,'Santos Lugares'),(391,2,'Sarandí de Migues'),(392,2,'Sauce'),(393,2,'Sauce de Solis'),(394,2,'Sauce Solo'),(395,2,'Sauce Solo de Migues'),(396,2,'Sauce Solo de Montes'),(397,2,'Seis Hermanos'),(398,2,'Shangrilá'),(399,2,'Sierra del Mar'),(400,2,'Soca'),(401,2,'Sofía Santos'),(402,2,'Solis Chico de Migues'),(403,2,'Solymar'),(404,2,'Solís Chico'),(405,2,'Sosa Diaz'),(406,2,'Suárez'),(407,2,'Tala'),(408,2,'Talita'),(409,2,'Toledo'),(410,2,'Totoral'),(411,2,'Vejigas'),(412,2,'Vejigas de San Ramon'),(413,2,'Vejigas de Tala'),(414,2,'Viejo Molino San Bernardo'),(415,2,'Villa Aeroparque'),(416,2,'Villa Arejo'),(417,2,'Villa Argentina'),(418,2,'Villa Crespo'),(419,2,'Villa El Tato'),(420,2,'Villa Encantada'),(421,2,'Villa Felicidad'),(422,2,'Villa Foresti'),(423,2,'Villa Fortuna'),(424,2,'Villa Hadita'),(425,2,'Villa Huertos de Toledo'),(426,2,'Villa Juana'),(427,2,'Villa Juanita'),(428,2,'Villa Los Alpes'),(429,2,'Villa Marina'),(430,2,'Villa Molfino'),(431,2,'Villa Nueva'),(432,2,'Villa Paz S.A.'),(433,2,'Villa Prados de Toledo'),(434,2,'Villa San Cono'),(435,2,'Villa San Felipe'),(436,2,'Villa San José'),(437,2,'Villa Valverde'),(438,2,'Vista Linda'),(439,3,'Aceguá'),(440,3,'Aguirre'),(441,3,'Amarillo'),(442,3,'Arachania'),(443,3,'Arbolito'),(444,3,'Arevalo'),(445,3,'Aroyo malo'),(446,3,'Arrozal Cesarone'),(447,3,'Arrozal Rosales'),(448,3,'Asperezas'),(449,3,'Barra del Sauce'),(450,3,'Barra de Tacuarí'),(451,3,'Barrio la Vinchuca'),(452,3,'Barrio Lopez Benitez'),(453,3,'Bañado de las Pajas'),(454,3,'Bañado de Medina'),(455,3,'Berachi'),(456,3,'Buena Vista'),(457,3,'Calera de Recalde'),(458,3,'Campamento'),(459,3,'Casa de las Cronicas'),(460,3,'Caserio de las Cañas'),(461,3,'Cañada Brava'),(462,3,'Cañada de Santos'),(463,3,'Cañada Grande'),(464,3,'Cañada Sarandí'),(465,3,'Cañitas'),(466,3,'Cementerio'),(467,3,'Centurion'),(468,3,'Cerro de las Cuentas'),(469,3,'Chacras de Melo'),(470,3,'Coimbra'),(471,3,'Colonia Ceres'),(472,3,'Colonia María Teresa'),(473,3,'Colonia Orozco'),(474,3,'Conventos'),(475,3,'Corral de Piedra'),(476,3,'Cruz de Piedra'),(477,3,'Cuchilla Cambota'),(478,3,'Cuchilla de Melo'),(479,3,'Cuchilla del Carmen'),(480,3,'Cuchilla del Paraiso'),(481,3,'Cuchilla Peralta'),(482,3,'Duraznero'),(483,3,'Escuela de Agronomía'),(484,3,'Esperanza'),(485,3,'Falda de Sierra de los Ríos'),(486,3,'Fraile Muerto'),(487,3,'Ganen'),(488,3,'Garao'),(489,3,'Granja de Aceguá'),(490,3,'Granja Pallero'),(491,3,'Guazunambi'),(492,3,'Hipodromo'),(493,3,'Infiernillo'),(494,3,'Isodoro Noblia'),(495,3,'La Coronilla'),(496,3,'La Gloria'),(497,3,'La Micaela'),(498,3,'La Mina'),(499,3,'La Pedrera'),(500,3,'Lago Merín'),(501,3,'Laguna del Junco'),(502,3,'Las Limas'),(503,3,'Los Cerros'),(504,3,'Mangrullo'),(505,3,'Mazangano'),(506,3,'Melo'),(507,3,'Minuano de Aceguá'),(508,3,'Misterio'),(509,3,'Montecito'),(510,3,'Nando'),(511,3,'Otras'),(512,3,'Panteon'),(513,3,'Paso de la Cruz'),(514,3,'Paso de las Tropas '),(515,3,'Paso de las Yeguas'),(516,3,'Paso de los Carros'),(517,3,'Paso Melo'),(518,3,'Paso Pereira'),(519,3,'Peñarol'),(520,3,'Picada de Maya'),(521,3,'Picada de Salome'),(522,3,'Piedra Alta'),(523,3,'Piñeiro'),(524,3,'Placido Rosas'),(525,3,'Poblado Uruguay'),(526,3,'Presidente Doctor Getulio Vargas'),(527,3,'Puente Negro'),(528,3,'Puntas de Amarillo'),(529,3,'Puntas de la Mina'),(530,3,'Puntas de Molles'),(531,3,'Puntas de Palleros'),(532,3,'Puntas de Tacuari'),(533,3,'Puntas del Sauce'),(534,3,'Quebracho'),(535,3,'Ramon Trigo'),(536,3,'Rincon de Contreras'),(537,3,'Rincon de la Urbana'),(538,3,'Rincon de los Coroneles'),(539,3,'Rincon de los Olivera'),(540,3,'Rincon de Paiva'),(541,3,'Rincon de Py'),(542,3,'Rincon de Suárez'),(543,3,'Rincon de Tacuarí'),(544,3,'Rodriguez'),(545,3,'Rio Branco'),(546,3,'Saldañas'),(547,3,'San Diego'),(548,3,'San Servando'),(549,3,'Sanchez'),(550,3,'Santa Teresa'),(551,3,'Sarandi de Acegua'),(552,3,'Sarandi de Barcelo'),(553,3,'Sarandi de Yaguaron'),(554,3,'Sauce de Conventos'),(555,3,'Soto Goro'),(556,3,'Toledo'),(557,3,'Tres Boliches'),(558,3,'Tres Islas'),(559,3,'Tupambaé'),(560,3,'Uruguay'),(561,3,'Villa Viñoles'),(562,3,'Wenceslao Silvera'),(563,3,'Ñangapire'),(564,4,'Agraciada'),(565,4,'Arrivillaga'),(566,4,'Artilleros'),(567,4,'Barker'),(568,4,'Barker Norte'),(569,4,'Barrancas Coloradas'),(570,4,'Barrio Mendaña'),(571,4,'Barrio Olimpico'),(572,4,'Belgrano Norte'),(573,4,'Belgrano Sur'),(574,4,'Blanca Arena'),(575,4,'Boca del Rosario Oeste'),(576,4,'Boca del Rosario'),(577,4,'Bonjour'),(578,4,'Brisas del Plata'),(579,4,'Buena Hora'),(580,4,'Campamento Artigas'),(581,4,'Campana'),(582,4,'Carmelo'),(583,4,'Caserio el Cerro'),(584,4,'Cerro Carmelo'),(585,4,'Cerro de las Armas'),(586,4,'Cerros de San Juan'),(587,4,'Cerros Negros'),(588,4,'Chico Torino'),(589,4,'Colonia Arrue'),(590,4,'Colonia Cosmopolita'),(591,4,'Colonia Española'),(592,4,'Colonia Estrella'),(593,4,'Colonia Miguelete'),(594,4,'Colonia Peirano'),(595,4,'Colonia Quevedo'),(596,4,'Colonia Sarandí'),(597,4,'Colonia Talice'),(598,4,'Colonia Valdense'),(599,4,'Colonia del Sacramento'),(600,4,'Conchillas'),(601,4,'Concordia'),(602,4,'Costa de Colla al Este'),(603,4,'Costa de Rosario'),(604,4,'Costa de Tarariras'),(605,4,'Costa de Vacas'),(606,4,'Costa del Navarro'),(607,4,'Costas de Juan Gonzalez'),(608,4,'Costas de Polonia'),(609,4,'Costas de San Juan'),(610,4,'Cufre'),(611,4,'Curupi'),(612,4,'El Bañado'),(613,4,'El Caño'),(614,4,'El Cerro'),(615,4,'El Chileno'),(616,4,'El Cuadro'),(617,4,'El Ensueño'),(618,4,'El Faro'),(619,4,'El General'),(620,4,'El Quinton'),(621,4,'El Semillero'),(622,4,'Estacion Experimental la Estanzuela'),(623,4,'Estancia Anchorena'),(624,4,'Florencio Sánchez'),(625,4,'Gil'),(626,4,'Juan Carlos Caseros'),(627,4,'Juan Gonzalez'),(628,4,'Juan Jackson'),(629,4,'Juan Lacaze'),(630,4,'La Estanzuela'),(631,4,'La Horqueta'),(632,4,'La Paz'),(633,4,'La Sierra'),(634,4,'Laguna de los Patos'),(635,4,'Las Chispas'),(636,4,'Las Flores'),(637,4,'Lomas de Carmelo'),(638,4,'Los Pinos'),(639,4,'Manantiales'),(640,4,'Martin Chico'),(641,4,'Martin Chico de Conchillas'),(642,4,'Media Agua'),(643,4,'Miguelete de Conchillas'),(645,4,'Minas de Narancio'),(646,4,'Minuano y Sauce'),(647,4,'Molles de Miguelete'),(648,4,'Nueva Helvecia'),(649,4,'Nueva Palmira'),(650,4,'Ombues de Lavalle'),(651,4,'Otras'),(652,4,'Paraje Minuano'),(653,4,'Paso Antolin'),(654,4,'Paso Birriel'),(655,4,'Paso de la Quinta'),(656,4,'Paso Hospital'),(657,4,'Paso Hospital Manantiales'),(658,4,'Paso Morlan'),(659,4,'Paso Quicho'),(660,4,'Pastoreo'),(661,4,'Picada de Benitez'),(662,4,'Piedra Chata'),(663,4,'Piedra de los Indios'),(664,4,'Piedras Blancas'),(665,4,'Playa Azul'),(666,4,'Playa Britópolis'),(667,4,'Playa Fomento'),(668,4,'Playa Parant'),(669,4,'Polancos'),(670,4,'Puerto Concordia'),(671,4,'Puerto Ingles'),(672,4,'Puerto Platero'),(673,4,'Puerto Rosario'),(674,4,'Punta Francesa'),(675,4,'Puntas de Juan Gonzalez'),(676,4,'Puntas de Melo'),(677,4,'Puntas de San Juan'),(678,4,'Puntas de San Pedro'),(679,4,'Puntas de Riachuelo'),(680,4,'Puntas del Rosario'),(681,4,'Puntas del Sauce'),(682,4,'Quinton'),(683,4,'Radial Hernandez'),(684,4,'Radial Rosario'),(685,4,'Real de Vera'),(686,4,'Reducto'),(687,4,'Resguardo Cufre'),(688,4,'Riachuelo'),(689,4,'Rincon del Rey'),(690,4,'Rosario'),(691,4,'Rosario y Colla'),(692,4,'San Juan'),(693,4,'San Luis'),(694,4,'San Luis de Tarariras'),(695,4,'San Luis Sanchez'),(696,4,'San Pedro'),(697,4,'San Pedro de Arriba'),(698,4,'San Pedro Norte'),(699,4,'San Roque'),(700,4,'Santa Ana'),(701,4,'Santa Regina'),(703,4,'Santa Rosa'),(704,4,'Sarandi Campana'),(705,4,'Tarariras'),(706,4,'Terminal'),(707,4,'Tomas Bell'),(708,4,'Tres Esquinas'),(709,4,'Valdenese'),(710,4,'Viboras'),(711,4,'Viboras y Vacas'),(712,4,'Villa Pancha'),(713,4,'Zagarazazu'),(714,4,'Zunin'),(715,5,'Abella'),(716,5,'Aguas Buenas'),(717,5,'Arroyo de los Perros'),(718,5,'Barrancas Coloradas'),(719,5,'Barrio Duran'),(720,5,'Batovi'),(721,5,'Baygorria'),(722,5,'Blanquillo'),(723,5,'Blanquillo al Oeste'),(724,5,'Caballero'),(725,5,'Capilla de Farruco'),(726,5,'Carlos Reyles'),(727,5,'Ceibal'),(728,5,'Cerrezuelo'),(729,5,'Cerro Chato'),(730,5,'Cerro Convento'),(731,5,'Chacras de Durazno'),(732,5,'Chileno'),(733,5,'Chileno Chico'),(734,5,'Chileno Grade (Aguero)'),(735,5,'Costa de Cuadra'),(736,5,'Cuchilla de Ramirez'),(737,5,'Cuchilla del Rincon'),(738,5,'De Dios'),(739,5,'Durazno'),(740,5,'Elias Regules'),(741,5,'Estacion Chileno'),(742,5,'Feliciano'),(743,5,'Fonseca'),(744,5,'Higueras de Carpinteria'),(745,5,'La Alegría'),(746,5,'La Mazamorra'),(747,5,'La Paloma'),(748,5,'Las Acacias'),(749,5,'Las Cañas'),(750,5,'Las Palmas'),(751,5,'Las Tunas'),(752,5,'Los Agregados'),(753,5,'Los Tapes'),(754,5,'Maestre Campo'),(755,5,'Malbajar Este'),(756,5,'Malbajar Oeste'),(757,5,'Maria Cejas'),(758,5,'Mariscala'),(759,5,'Mariscala del Carmen'),(760,5,'Molles Chico'),(761,5,'Molles de Quinteros'),(762,5,'Mouriño'),(763,5,'Municipio de Durazno'),(764,5,'Ombues de Oribe'),(765,5,'Otras'),(766,5,'Palmar de Porrua'),(767,5,'Parada Sur'),(768,5,'Parada Sur'),(769,5,'Parish'),(770,5,'Paso de Aguirre'),(771,5,'Paso de Castro'),(772,5,'Paso del Medio las Palmas'),(773,5,'Paso Ramirez'),(774,5,'Paso Real de Carpinteria'),(775,5,'Paso Tejera'),(776,5,'Pueblo Centenario'),(777,5,'Pueblo de Alvarez'),(778,5,'Puglia'),(779,5,'Puntas de Carpinteria'),(780,5,'Puntas de Herrera'),(781,5,'Puntas de Malbajar'),(782,5,'Rincon de Cuadra'),(783,5,'Rincon de los Tapes'),(784,5,'Rolon'),(785,5,'Rossell y Ruis'),(786,5,'Salinas'),(787,5,'Salinas Chico'),(788,5,'San Jorge'),(789,5,'San Jose de las Cañas'),(790,5,'Sandu Chico'),(791,5,'Santa Bernardina'),(792,5,'Sarandi de la China'),(793,5,'Sarandi de Rio Negro'),(794,5,'Sarandi del Yi'),(795,5,'Sauce de Herrera'),(796,5,'Sauce del Yi'),(797,5,'Tala de Mariscala'),(798,5,'Tejera'),(799,5,'Verdun'),(800,5,'Villa del Carmen'),(801,5,'Villasboas'),(802,6,'Ahogados'),(803,6,'Andresito'),(804,6,'Arenal Chico'),(805,6,'Arenal Grande'),(806,6,'Arroyo Malo'),(807,6,'Cañada Amilivia'),(808,6,'Cerro Colorado'),(809,6,'Chacras'),(810,6,'Chacras de Borghi'),(811,6,'Colonia Alemana'),(812,6,'Costas de San Jose'),(813,6,'Costos del Tala'),(814,6,'Cuchilla de Villasboas'),(815,6,'El Coronilla'),(816,6,'El Totoral'),(817,6,'Ferrizo'),(818,6,'Ismael Cortinas'),(819,6,'Juan Jose Castro'),(820,6,'La Alianza'),(821,6,'La Casilla'),(822,6,'La Cordobesa'),(823,6,'La Guardia'),(824,6,'Los Puentes'),(825,6,'Marincho'),(826,6,'Otras'),(827,6,'Paso de Lugo'),(828,6,'Paso Hondo'),(829,6,'Pueblo Pintos'),(830,6,'Puntas de Chamanga'),(831,6,'Puntas de Marincho'),(832,6,'Puntas de San Jose'),(833,6,'Puntas de Sarandi'),(834,6,'Puntas de Corral del Piedra'),(835,6,'Puntas del Sauce'),(836,6,'Rincon del Palacio'),(837,6,'San Gregorio de Flores'),(838,6,'Santa Adelaida'),(839,6,'Sarandi'),(840,6,'Talas de Maciel'),(841,6,'Trinidad'),(842,6,'Villa Pastora'),(843,6,'Villasboas'),(844,7,'25 de Agosto'),(845,7,'Alejandro Gallinal'),(846,7,'Arrayan'),(847,7,'Arroyo Chamizo'),(848,7,'Arroyo de los Negros'),(849,7,'Arroyo Latorre'),(850,7,'Arroyo Monzon'),(851,7,'Arroyo Pelado'),(852,7,'Arteaga'),(853,7,'Barra Molles del Timote'),(854,7,'Barra Sauce de Mansavillagra'),(855,7,'Berrondo'),(856,7,'Calleri'),(857,7,'Candil'),(858,7,'Capilla del Sauce'),(859,7,'Cardal'),(860,7,'Caserio La Fundacion'),(861,7,'Casupa'),(862,7,'Cerro de la Macana'),(863,7,'Cerros de Florida'),(864,7,'Chacras de Florida'),(865,7,'Chacras del Pintado'),(866,7,'Chamizo'),(867,7,'Chamizo Chico'),(868,7,'Chilcas'),(869,7,'Chingolas'),(870,7,'Colonia Sanchez'),(871,7,'Corral de Piedra'),(872,7,'Costa de Arias'),(873,7,'Costa de Illescas'),(874,7,'Costa de la Cruz'),(875,7,'Costa de Parana'),(876,7,'Costa del Tala'),(877,7,'Costas de Arias'),(878,7,'Costas de Chamizo'),(879,7,'Costas de Chamizo Grande'),(880,7,'Costas de Maciel'),(881,7,'Costas de Santa Lucia Chico'),(882,7,'Costas del Amarillo'),(883,7,'Costas del Pintado'),(884,7,'Costas del Santa Lucia Grande'),(885,7,'Cuchilla Santo Domingo'),(886,7,'Dr. A. Gallinal'),(887,7,'Estacion Capilla del Sauce'),(888,7,'Ferrer'),(889,7,'Florida'),(890,7,'Fray Marcos'),(891,7,'Goñi'),(892,7,'Hernandarias'),(893,7,'Independencia'),(894,7,'Juncal'),(895,7,'La Cimbra'),(896,7,'La Cruz'),(897,7,'La Escobilla'),(898,7,'La Macana'),(899,7,'La Palma'),(900,7,'La Victoria'),(901,7,'Las Piedritas '),(902,7,'Mansavillagra'),(903,7,'Mendoza Chico'),(904,7,'Mendoza Grande'),(905,7,'Molles del Timote'),(906,7,'Montecoral'),(907,7,'Nico Perez'),(908,7,'Otras'),(909,7,'Palermo'),(910,7,'Pantanoso de Castro'),(911,7,'Paso Calleros'),(912,7,'Paso de los Novillos'),(913,7,'Paso Real de Mansavillagra'),(914,7,'Paso Vela'),(915,7,'Piedra Campana'),(916,7,'Piedras Coloradas'),(917,7,'Pintado'),(918,7,'Polanco del Yi'),(919,7,'Pueblo de los Morochos'),(920,7,'Puente de Mendoza'),(921,7,'Puntas de Calleros'),(922,7,'Puntas de Chamizo'),(923,7,'Puntas de Illscas'),(924,7,'Puntas de la Escobilla'),(925,7,'Puntas de Maciel'),(926,7,'Puntas de Mansavillagra'),(927,7,'Puntas de Sarandi'),(928,7,'Puntas de Sauce de Maciel'),(929,7,'Puntas del Arroyo Latorre'),(930,7,'Reboledo'),(931,7,'Rincon de los Camilos'),(932,7,'Rincon de Vignoli'),(933,7,'Rincon Sauce del Yi'),(934,7,'San Gabriel'),(935,7,'San Geronimo'),(936,7,'San Juan'),(937,7,'San Pedro de Timote'),(938,7,'Santa Clara'),(939,7,'Sarandi Grande'),(940,7,'Sauce de Maciel'),(941,7,'Sauce de Villanueva'),(942,7,'Sauce del Yi'),(943,7,'Tabare'),(944,7,'Tala de Castro'),(945,7,'Tala de Maciel'),(946,7,'Talita'),(947,7,'Tornero'),(948,7,'Urioste'),(949,7,'Veinticinco de Mayo'),(950,7,'Vignoli'),(951,7,'Villa Hipica'),(952,7,'Villa Vieja'),(953,8,'19 de Junio'),(954,8,'Abra de Zabaleta'),(955,8,'Aguas Blancas'),(956,8,'Alonso'),(957,8,'Aramendia'),(958,8,'Arequita'),(959,8,'Arroyo de los Patos'),(960,8,'Arroyo del Medio'),(961,8,'Azucar'),(962,8,'Barra de los Chanchos'),(963,8,'Barrancas'),(964,8,'Barriga Negra'),(965,8,'Barrio la Coronilla - Ancap'),(966,8,'Blances Viale'),(967,8,'Campanero'),(968,8,'Canteras del Verdun'),(969,8,'Carnales'),(970,8,'Casupa'),(971,8,'Casupa Chico'),(972,8,'Cerro Pelado'),(973,8,'Chamame'),(974,8,'Colon'),(975,8,'Consejo del Niño'),(976,8,'Costa del Lenguazo'),(977,8,'Costas de Corrales'),(978,8,'Costas del Soldado'),(979,8,'El Alto'),(980,8,'El Perdido'),(981,8,'El Soldado'),(982,8,'EL Tigre'),(983,8,'Espuelitas'),(984,8,'Estacion Andreoni'),(985,8,'Estacion Ortiz'),(986,8,'Estacion Solis'),(987,8,'Gaetan '),(988,8,'Godoy'),(989,8,'Gutierrez'),(990,8,'Higueritas'),(991,8,'Illescas'),(992,8,'José Batlle y Ordoñez'),(993,8,'José Pedro Varela'),(994,8,'La Cuchilla'),(995,8,'La Plata'),(996,8,'Ladrillos'),(997,8,'Larrosa'),(998,8,'Las Achiras'),(999,8,'Los Ceibos'),(1000,8,'Los Tapes'),(1001,8,'Manguera Azul'),(1002,8,'Marco de los Reyes'),(1003,8,'Maria Isabel'),(1004,8,'Mariscala'),(1005,8,'Marmaraja'),(1006,8,'Minas'),(1007,8,'Molles de Aigua'),(1008,8,'Molles de Cañada Grande'),(1009,8,'Molles del Sauce'),(1010,8,'Ombues de Bentancor'),(1011,8,'Ortiz Castro'),(1012,8,'Otras'),(1013,8,'Panteon'),(1014,8,'Paso de los Troncos'),(1015,8,'Paso de Mesa'),(1016,8,'Piraraja'),(1017,8,'Polanco'),(1018,8,'Polanco Norte'),(1019,8,'Polanco Sur'),(1020,8,'Pororo'),(1021,8,'Puente de Marmaraja'),(1022,8,'Puntas de Barriga Negra'),(1023,8,'Puntas de los Chanchos'),(1024,8,'Puntas de Polanco'),(1025,8,'Puntas de San Francisco'),(1026,8,'Puntas de Santa Lucia'),(1027,8,'Puntas de Solis'),(1028,8,'Puntas de Vejigas'),(1029,8,'Puntas del Perdido'),(1030,8,'Retamosa'),(1031,8,'Rincon de Cebollati'),(1032,8,'Rincon de Mariscala'),(1033,8,'Rincon de Silva'),(1034,8,'Roldan'),(1035,8,'San Francisco de las Sierras'),(1036,8,'Santa Lucia'),(1037,8,'Sarandi de Gutierrez'),(1038,8,'Saude de Aigua'),(1039,8,'Sauce de Olimar Chico'),(1040,8,'Sierras Blancas'),(1041,8,'Soldado'),(1042,8,'Solis'),(1043,8,'Solis Grande'),(1044,8,'Solís de Mataojo'),(1045,8,'Tapes Chico'),(1046,8,'Tapes Grande'),(1047,8,'Valle de Solis'),(1048,8,'Vejigas'),(1049,8,'Velazquez'),(1050,8,'Verdun'),(1051,8,'Villa del Rosario'),(1052,8,'Villa Serrana'),(1053,8,'Zapican'),(1054,9,'Abra de Castellanos'),(1055,9,'Abra de Perdomo'),(1056,9,'Aiguá'),(1057,9,'Alfaro'),(1058,9,'Alferez'),(1059,9,'Arenas de Jose Ignacio'),(1060,9,'Arroyito ce Medina'),(1061,9,'Balneario Buenos Aires'),(1062,9,'Balneario Las Flores'),(1063,9,'Barra de Portezuelo'),(1064,9,'Barra del Sauce'),(1065,9,'Barrio Kennedy'),(1066,9,'Bella Vista'),(1067,9,'Buenos Aires'),(1068,9,'Canteras de Marelli'),(1069,9,'Carape'),(1070,9,'Carlos Cal'),(1071,9,'Cañada Bellaca'),(1072,9,'Cañada de la Cruz'),(1073,9,'Cerro Pelado'),(1074,9,'Cerros Azules'),(1075,9,'Chihuahua'),(1076,9,'Colonia J. Suarez'),(1077,9,'Coronilla'),(1078,9,'Corte de la Leña'),(1079,9,'Costas de Jose Ignacio'),(1080,9,'Eden Rock'),(1081,9,'El Chorro'),(1082,9,'El Quijote'),(1083,9,'El Tesoro'),(1084,9,'Faro Jose Ignacio'),(1085,9,'Faro Jose Ignacio Norte'),(1086,9,'Garzon'),(1087,9,'Gerona'),(1088,9,'Gregorio Aznárez'),(1089,9,'Guardia VIeja'),(1090,9,'Hipódromo'),(1091,9,'José Ignacio'),(1092,9,'La Barra'),(1093,9,'La Capuera'),(1094,9,'La Falda'),(1095,9,'La Juanita'),(1096,9,'La Sierra'),(1097,9,'La Sonrisa'),(1098,9,'Lago de los Cisnes'),(1099,9,'Laguna Blanca'),(1100,9,'Laguna del Sauce'),(1101,9,'Las Cañas'),(1102,9,'Las Cumbres'),(1103,9,'Las Flores'),(1104,9,'Las Flores - Estacion'),(1105,9,'Los Aromos'),(1106,9,'Los Ceibos'),(1107,9,'Los Corchos'),(1108,9,'Los Talas'),(1109,9,'Maldonado'),(1110,9,'Manantiales'),(1111,9,'Mataojo'),(1112,9,'Molles de Garzon'),(1113,9,'Nueva Carrara'),(1114,9,'Ocean Park'),(1115,9,'Otras'),(1116,9,'P. Ballena'),(1117,9,'P. Coloradas'),(1118,9,'Pago de la Paja'),(1119,9,'Pan de Azúcar'),(1120,9,'Parque Medina'),(1121,9,'Partido Norte'),(1122,9,'Partido Oeste'),(1123,9,'Paso de la Cantera'),(1124,9,'Paso de los Talas'),(1125,9,'Pinares'),(1126,9,'Piriápolis'),(1127,9,'Playa Grande'),(1128,9,'Playa Hermosa'),(1129,9,'Playa Verde'),(1130,9,'Portezuelo'),(1131,9,'Pueblo Edén'),(1132,9,'Pueblo Solis'),(1133,9,'Punta Fría'),(1134,9,'Punta Negra'),(1135,9,'Punta Piedras'),(1136,9,'Punta del Este'),(1137,9,'Puntas de Jose Ignacio'),(1138,9,'Puntas de la Sierra'),(1139,9,'Puntas de Mataojo'),(1140,9,'Puntas de Pan de Azucar'),(1141,9,'Puntas del Campanera'),(1142,9,'Rincon de Aparicio'),(1143,9,'Rincon de Los SOsa'),(1144,9,'Rincon del Inidio'),(1145,9,'Ruta 79 y 9'),(1146,9,'Salamanca'),(1147,9,'San Carlos'),(1148,9,'San Francisco'),(1149,9,'San Juan Del Este'),(1150,9,'San Rafael'),(1151,9,'San Vicente'),(1152,9,'Santa Monica'),(1153,9,'Sarandi de Aigua'),(1154,9,'Sarandi del Mataojo'),(1155,9,'Sauce de Aigua'),(1156,9,'Sauce de Portezuelo'),(1157,9,'Solís'),(1158,9,'Valdivia'),(1159,9,'Villa Delia'),(1160,9,'Zanja del Tigre'),(1229,10,'Aguada'),(1230,10,'Aires Puros'),(1231,10,'Arroyo Seco'),(1232,10,'Atahualpa'),(1233,10,'Bella Vista'),(1234,10,'Belvedere'),(1235,10,'Bolivar'),(1236,10,'Brazo Oriental'),(1237,10,'Buceo'),(1238,10,'Capurro'),(1239,10,'Carrasco'),(1240,10,'Casabo'),(1241,10,'Casavalle'),(1242,10,'Centro'),(1243,10,'Cerrito'),(1244,10,'Cerro'),(1245,10,'Ciudad Vieja'),(1246,10,'Colón'),(1247,10,'Goes'),(1248,10,'Ituzaingó'),(1249,10,'Jacinto Vera'),(1250,10,'Jardines Hipódromo'),(1251,10,'La Blanqueada'),(1252,10,'La Comercial'),(1253,10,'La Figurita'),(1254,10,'La Teja'),(1255,10,'Larrañaga'),(1256,10,'Las Acacias'),(1257,10,'Lezica'),(1258,10,'Malvin'),(1259,10,'Malvin Norte'),(1260,10,'Manga'),(1261,10,'Marconi'),(1262,10,'Maroñas'),(1263,10,'Maroñas. Curva'),(1264,10,'Melilla'),(1265,10,'Mercado Modelo'),(1266,10,'Montevideo'),(1267,10,'Nuevo París'),(1268,10,'Pajas Blancas'),(1269,10,'Palermo'),(1270,10,'Parque Batlle'),(1271,10,'Parque Rodó'),(1272,10,'Paso Molino'),(1273,10,'Paso de la Arena'),(1274,10,'Perez Castellanos'),(1275,10,'Peñarol'),(1276,10,'Piedras Blancas'),(1277,10,'Pocitos'),(1278,10,'Pocitos Nuevo'),(1279,10,'Prado'),(1280,10,'Puerto Buceo'),(1281,10,'Punta Carretas'),(1282,10,'Punta Gorda'),(1283,10,'Punta Rieles'),(1284,10,'Reducto'),(1285,10,'Santiago Vázquez'),(1286,10,'Sayago'),(1287,10,'Toledo Chico'),(1288,10,'Tres Cruces'),(1289,10,'Unión'),(1290,10,'Villa Biarritz'),(1291,10,'Villa Dolores'),(1292,10,'Villa Española'),(1293,10,'Villa García'),(1294,10,'Villa Muñoz'),(1295,10,'Villa del Cerro'),(1299,11,'Al Sur de Arroyo Sacra'),(1300,11,'Araujo'),(1301,11,'Arbolito (Totoral)'),(1302,11,'Arroyo Malo'),(1303,11,'Arroyo Negro'),(1304,11,'Beisso'),(1305,11,'Bella Vista'),(1306,11,'Cangue'),(1307,11,'Carumbe'),(1308,11,'Casa Blanca'),(1309,11,'Cañada del Pueblo'),(1310,11,'Cerro Chato'),(1311,11,'Chacras de Paysandu'),(1312,11,'Chacras de Paysandu Norte'),(1313,11,'Chacras de Paysandu Sur'),(1314,11,'Chapicuy'),(1315,11,'Colonia Arroyo Malo'),(1316,11,'Colonia Cangue'),(1317,11,'Colonia Juncal'),(1318,11,'Colonia las Delicias'),(1319,11,'Colonia Paysandu'),(1320,11,'Colonia Santa Blanca'),(1321,11,'Colonia Uruguaya'),(1322,11,'Constancia'),(1323,11,'Costa de Sacra'),(1324,11,'Cuchilla de Buricayupi'),(1325,11,'Cuchilla de Fuego'),(1326,11,'Cuchilla San Jose'),(1327,11,'El Chaco'),(1328,11,'El Duraznal'),(1329,11,'El Eucaliptus'),(1330,11,'El Horno'),(1331,11,'El Tarugo'),(1332,11,'Estacion Porvenir'),(1333,11,'Etchemendi'),(1334,11,'Gallinal'),(1335,11,'Guaviyu de Quebracho'),(1336,11,'Guayabos'),(1337,11,'Guichón'),(1338,11,'La Lata (Ruta 3 Km. 375)'),(1339,11,'La Paz (Ruta 3 Km. 346)'),(1340,11,'La Tentacion'),(1341,11,'Las Flores'),(1342,11,'Las Palmas'),(1343,11,'Lorenzo Geyres'),(1344,11,'Molles Grande'),(1345,11,'Morato (Tres Arboles)'),(1346,11,'Nuevo Paysandu'),(1347,11,'Orgoroso'),(1348,11,'Otras'),(1349,11,'Palmar del Quebracho'),(1350,11,'Parada Dayman'),(1351,11,'Parada Pandule'),(1352,11,'Parada Rivas'),(1353,11,'Paso de los Carros'),(1354,11,'Paysandú'),(1355,11,'Perico Moreno'),(1356,11,'Piedra Sola'),(1357,11,'Piedras Coloradas'),(1358,11,'Piñera'),(1359,11,'Porvenir'),(1360,11,'Pueblo Alonzo'),(1361,11,'Pueblo Esperanza'),(1362,11,'Pueblo Federacion'),(1363,11,'Puntas de Arroyo Negro'),(1364,11,'Puntas de Bacacua'),(1365,11,'Puntas de Buricapuyi'),(1366,11,'Puntas de Cangue'),(1367,11,'Puntas de Gualeguay'),(1368,11,'Puntas de las Isletas'),(1369,11,'Quebracho'),(1370,11,'Queguay Grande'),(1371,11,'Queguayar'),(1372,11,'Rabon'),(1373,11,'San Felix'),(1374,11,'San Fracisco'),(1375,11,'San Mauricio'),(1376,11,'San Miguel'),(1377,11,'Santa Kilda'),(1378,11,'Sauce de Abajo'),(1379,11,'Sauce del Buricayupi'),(1380,11,'Sauce del Queguay'),(1381,11,'Soto'),(1382,11,'Tambores'),(1383,11,'Termas de Almiron'),(1384,11,'Termas de Guaviyu'),(1385,11,'Tomas Paz'),(1386,11,'Tres Bocas'),(1387,11,'Valdez'),(1388,11,'Villa Maria (Tiatucura)'),(1389,11,'Zeballos'),(1503,12,'Algorta'),(1504,12,'Arroyo Negro'),(1505,12,'Barrio Anglo'),(1506,12,'Bellaco'),(1507,12,'Caracoles'),(1508,12,'Cañitas'),(1509,12,'Colonia El Ombu'),(1510,12,'Colonia John F. Kennedy'),(1511,12,'Don Esteban'),(1512,12,'El Abrojal'),(1513,12,'El Progreso'),(1514,12,'El Surco'),(1515,12,'Estación Francia'),(1516,12,'Estancia Vichadero'),(1517,12,'Fray Bentos'),(1518,12,'Isla de Arguelles'),(1519,12,'La Arena'),(1520,12,'La Coronilla'),(1521,12,'La Florida'),(1522,12,'La Palma'),(1523,12,'La Unión'),(1524,12,'Las Cañas'),(1525,12,'Las Flores'),(1526,12,'Las Fracciones'),(1527,12,'Las Margaritas'),(1528,12,'Los Arrayanes'),(1529,12,'Los Mellizos'),(1530,12,'Los Ranchos'),(1531,12,'Mataojo'),(1532,12,'Menafra'),(1533,12,'Merinos'),(1534,12,'Molles de Porrua'),(1535,12,'Nuevo Berlin'),(1536,12,'Ombucitos'),(1537,12,'Otras'),(1538,12,'Palmar Grande'),(1539,12,'Paso de Balbuena'),(1540,12,'Paso de Leopoldo'),(1541,12,'Paso de los Cobres'),(1542,12,'Paso de Soca'),(1543,12,'Paso Ramírez'),(1544,12,'Pauru'),(1545,12,'Porton Haedo'),(1546,12,'Pte. San Martin'),(1547,12,'Pueblo Grecco'),(1548,12,'Puntas de Averias'),(1549,12,'Rolon'),(1550,12,'San Javier'),(1551,12,'San Lorenzo'),(1552,12,'Sanchez'),(1553,12,'Sanchez Chico'),(1554,12,'Santa Elisa'),(1555,12,'Santa Isabel'),(1556,12,'Santa Rosa'),(1557,12,'Sarandi'),(1558,12,'Sarandi de Navarro'),(1559,12,'Sauce'),(1560,12,'Tres Bocas'),(1561,12,'Uleste'),(1562,12,'Valle de Soba'),(1563,12,'Villa General Borges'),(1564,12,'Villa María'),(1565,12,'Yaguarete'),(1566,12,'Young'),(1390,13,'Abrojal'),(1391,13,'Alborada'),(1392,13,'Amarillo'),(1393,13,'Arroyo Blanco'),(1394,13,'Arroyo Sauzal'),(1395,13,'Ataques'),(1396,13,'Barra de Ataques'),(1397,13,'Barrio Recreo'),(1398,13,'Batovi'),(1399,13,'Bañado del Chaja'),(1400,13,'Berruti'),(1401,13,'Blanquillos'),(1402,13,'Buena Orden al Norte'),(1403,13,'Buena Union'),(1404,13,'Capon Alto'),(1405,13,'Caraguata'),(1406,13,'Carpinteria'),(1407,13,'Carrillada'),(1408,13,'Cerro Alegre'),(1409,13,'Cerro Blanco de Cuñapiru'),(1410,13,'Cerro Caqueiro'),(1411,13,'Cerro Chapeu'),(1412,13,'Cerro Chato'),(1413,13,'Cerro Pelado'),(1414,13,'Cerro Pelado al Este'),(1415,13,'Cerro Solito'),(1416,13,'Cerros Blancos'),(1417,13,'Cerros de la Calera'),(1418,13,'Chirca de Caraguata'),(1419,13,'Coronilla'),(1420,13,'Coronilla De Corrales'),(1421,13,'Costas de Cuñapiru'),(1422,13,'Cruz de San Pedro'),(1423,13,'Cuchilla de Tres Cerros'),(1424,13,'Cuchilla de Yaguari'),(1425,13,'Cuchilla Mangueras'),(1426,13,'Curticeiras'),(1427,13,'Curtume'),(1428,13,'Cuñapiru'),(1429,13,'El Ceibo'),(1430,13,'El Palmito'),(1431,13,'Guaviyu'),(1432,13,'Hospital'),(1433,13,'La Caillava'),(1434,13,'La Calera'),(1435,13,'La Cerrillada'),(1436,13,'La Chilca'),(1437,13,'La Palma'),(1438,13,'La Pedrera'),(1439,13,'Lagos del Norte'),(1440,13,'Lagunon'),(1441,13,'Las Flores'),(1442,13,'Laureles'),(1443,13,'Los Potreros'),(1444,13,'Lunarejo'),(1445,13,'Mandubi'),(1446,13,'Manuel Diaz'),(1447,13,'Masoller'),(1448,13,'Minas de Cuñapiru (Usinas)'),(1449,13,'Minas de Zapucay'),(1450,13,'Minas de Corrales'),(1451,13,'Moirones'),(1452,13,'Otras'),(1453,13,'Parada Medina'),(1454,13,'Paso Amarillo'),(1455,13,'Paso Ataques'),(1456,13,'Paso Casildo'),(1457,13,'Paso de Arriera'),(1458,13,'Paso de Ataques'),(1459,13,'Paso de Frontera'),(1460,13,'Paso de Gaire'),(1461,13,'Paso de la Arena'),(1462,13,'Paso de la Calera'),(1463,13,'Paso del Lagunon'),(1464,13,'Paso del Puerto'),(1465,13,'Paso del Tapado'),(1466,13,'Paso Lapuente'),(1467,13,'Paso Serpa'),(1468,13,'Piedras Blancas'),(1469,13,'Platon'),(1470,13,'Pueblo de los Santos'),(1471,13,'Pueblo Socorro'),(1472,13,'Puntas de Abrojal'),(1473,13,'Puntas de Corrales'),(1474,13,'Puntas de Cuñapiru'),(1475,13,'Puntas del Sauzal'),(1476,13,'Puntas del Yaguari'),(1477,13,'Rincon de Amarillo'),(1478,13,'Rincon de Diniz'),(1479,13,'Rincon de los Castillos'),(1480,13,'Rincon de Moraes'),(1481,13,'Rincon de Rodriguez'),(1482,13,'Rincon de Roland'),(1483,13,'Rincon de Tres Cerros'),(1484,13,'Rincon de Yaguari'),(1485,13,'Rivera'),(1486,13,'San Gregorio'),(1487,13,'Santa Ernestina'),(1488,13,'Santa Isabel'),(1489,13,'Santa Teresa'),(1490,13,'Sauce de Batovi'),(1491,13,'Sauzal'),(1492,13,'Segarra'),(1493,13,'Tranqueras'),(1494,13,'Tres Cerros'),(1495,13,'Tres Cruces'),(1496,13,'Tres Puentes'),(1497,13,'Vichadero'),(1498,13,'Villa Indart'),(1499,13,'Yaguari'),(1500,13,'Zanja Honda'),(1501,13,'Zanja Honda de Tranqueras'),(1567,14,'18 de Julio'),(1568,14,'19 de Abril'),(1569,14,'Abra de Alferez'),(1570,14,'Aguas Dulces'),(1571,14,'Antoniopolis'),(1572,14,'Aranchania'),(1573,14,'Arbolito'),(1574,14,'Balneario la Esmeralda'),(1575,14,'Balneario Pueblo Nuevo'),(1576,14,'Barra Isla Negra'),(1577,14,'Barra de Valizas'),(1578,14,'Barra del Chuy'),(1579,14,'Barrancas de la Coronilla'),(1580,14,'Barrio Cardozo'),(1581,14,'Barrio Carpacho'),(1582,14,'Barrio Pereira'),(1583,14,'Barrio Porvenir'),(1584,14,'Barrio Torres'),(1585,14,'Cabo Polonio'),(1586,14,'Capacho'),(1587,14,'Castillos'),(1588,14,'Cebollati'),(1589,14,'Cerro de los Rocha'),(1590,14,'Cerro de Pescadores'),(1591,14,'Chuy'),(1592,14,'Colonia Greissing'),(1593,14,'Costa Azul'),(1594,14,'Costas de Cebollati'),(1595,14,'Cuchilla de Garzon'),(1596,14,'Cuchilla del Arbolito'),(1597,14,'El Canelon'),(1598,14,'El Chimango'),(1599,14,'El Palmar'),(1600,14,'Fortin de San Miguel'),(1601,14,'Garzon Abajo'),(1602,14,'Garzon al Medio'),(1603,14,'Garzon Arriba'),(1604,14,'Isla Negra'),(1605,14,'Kilometro 18'),(1606,14,'La Aguada'),(1607,14,'La Aguada y Costa Azul'),(1608,14,'La Coronilla'),(1609,14,'La Palma'),(1610,14,'La Paloma'),(1611,14,'La Pedrera'),(1612,14,'La Ribiera'),(1613,14,'La Sierra'),(1614,14,'Laguna de Rocha'),(1615,14,'Las Garzas'),(1616,14,'Lascano'),(1617,14,'Lomas'),(1618,14,'Los Ajos'),(1619,14,'Los Cerrillos'),(1620,14,'Los Indios'),(1621,14,'Oceania del Polonio'),(1622,14,'Oratorio'),(1623,14,'Palmar'),(1624,14,'Palmar de Castillos'),(1625,14,'Palmares de la Coronilla'),(1626,14,'Paso de Lopez'),(1627,14,'Paso del Bañado'),(1628,14,'Paso del Ombu'),(1629,14,'Paso Doña Rosa'),(1630,14,'Picada Tolosa'),(1631,14,'Plano 291'),(1632,14,'Pueblo Nuevo'),(1633,14,'Puente Valizas'),(1634,14,'Puerto de los Botes'),(1635,14,'Puimayen'),(1636,14,'Punta Cebollati'),(1637,14,'Punta Palmar'),(1638,14,'Punta Rubia'),(1639,14,'Punta del Diablo'),(1640,14,'Puntas de Don Carlos'),(1641,14,'Quebracho'),(1642,14,'Rincon de Los Olivera'),(1643,14,'Rincon de Valizas'),(1644,14,'Rocha'),(1645,14,'Samuel'),(1646,14,'San Antonio'),(1647,14,'San Luis al Medio'),(1648,14,'San Sebastian'),(1649,14,'San Sebastian de la Pedrera'),(1650,14,'Santa Teresa'),(1651,14,'Sauce de Rocha'),(1652,14,'Sierra de los Rocha'),(1653,14,'Tajamares de la Pedrera'),(1654,14,'Velázquez');
/*!40000 ALTER TABLE `localidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plantas`
--

DROP TABLE IF EXISTS `plantas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plantas` (
  `id_plantas` int NOT NULL AUTO_INCREMENT,
  `cantidad_plantas` int NOT NULL,
  PRIMARY KEY (`id_plantas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plantas`
--

LOCK TABLES `plantas` WRITE;
/*!40000 ALTER TABLE `plantas` DISABLE KEYS */;
INSERT INTO `plantas` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `plantas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedad_sobre`
--

DROP TABLE IF EXISTS `propiedad_sobre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedad_sobre` (
  `id_Sobre` int NOT NULL AUTO_INCREMENT,
  `propiedad_sobre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_Sobre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedad_sobre`
--

LOCK TABLES `propiedad_sobre` WRITE;
/*!40000 ALTER TABLE `propiedad_sobre` DISABLE KEYS */;
INSERT INTO `propiedad_sobre` VALUES (1,'No Aplica'),(2,'Rambla'),(3,'Avenida'),(4,'Otros');
/*!40000 ALTER TABLE `propiedad_sobre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedades`
--

DROP TABLE IF EXISTS `propiedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedades` (
  `id_propiedad` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `tipo_operacion` int NOT NULL,
  `Precio_Venta` int NOT NULL,
  `Permuta` int NOT NULL,
  `Financia` int NOT NULL,
  `tipo_propiedad` int NOT NULL,
  `departamento` int NOT NULL,
  `localidad` int NOT NULL,
  `año_construccion` int NOT NULL,
  `dormitorios` int NOT NULL,
  `baños` int NOT NULL,
  `garage` int NOT NULL,
  `estado` int NOT NULL,
  `oficina` int NOT NULL,
  `vivienda_social` int NOT NULL,
  `disposicion` int NOT NULL,
  `orientacion` int NOT NULL,
  `sobre` int NOT NULL,
  `distancia_mar` int NOT NULL,
  `metros_edificados` int NOT NULL,
  `metros_terraza` int NOT NULL,
  `metros_terreno` int NOT NULL,
  `plantas` int NOT NULL,
  `extras` varchar(200) NOT NULL,
  `garantias` longtext NOT NULL,
  `descripcion_propiedad` longtext NOT NULL,
  PRIMARY KEY (`id_propiedad`),
  KEY `operacion_idx` (`tipo_operacion`),
  KEY `tipo_propiedad_idx` (`tipo_propiedad`),
  KEY `departamento_idx` (`departamento`),
  KEY `localidad_idx` (`localidad`),
  KEY `dormitorios_idx` (`dormitorios`),
  KEY `baños_idx` (`baños`),
  KEY `garage_idx` (`garage`),
  KEY `estado_idx` (`estado`),
  KEY `sobre_idx` (`sobre`),
  KEY `distancia_mar_idx` (`distancia_mar`),
  KEY `plantas_idx` (`plantas`),
  CONSTRAINT `baños` FOREIGN KEY (`baños`) REFERENCES `banio` (`id_baños`),
  CONSTRAINT `departamento` FOREIGN KEY (`departamento`) REFERENCES `departamentos` (`id_departamento`),
  CONSTRAINT `distancia_mar` FOREIGN KEY (`distancia_mar`) REFERENCES `distancia_mar` (`id_distancia_mar`),
  CONSTRAINT `dormitorios` FOREIGN KEY (`dormitorios`) REFERENCES `dormitorios` (`id_dormitorios`),
  CONSTRAINT `estado` FOREIGN KEY (`estado`) REFERENCES `estados` (`id_estados`),
  CONSTRAINT `garage` FOREIGN KEY (`garage`) REFERENCES `garage` (`id_garage`),
  CONSTRAINT `localidad` FOREIGN KEY (`localidad`) REFERENCES `localidades` (`id_barrios`),
  CONSTRAINT `operacion` FOREIGN KEY (`tipo_operacion`) REFERENCES `tipo_operacion` (`id_tipooperacion`),
  CONSTRAINT `plantas` FOREIGN KEY (`plantas`) REFERENCES `plantas` (`id_plantas`),
  CONSTRAINT `sobre` FOREIGN KEY (`sobre`) REFERENCES `propiedad_sobre` (`id_Sobre`),
  CONSTRAINT `tipo_propiedad` FOREIGN KEY (`tipo_propiedad`) REFERENCES `tipo_propiedad` (`id_tipopropiedad`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedades`
--

LOCK TABLES `propiedades` WRITE;
/*!40000 ALTER TABLE `propiedades` DISABLE KEYS */;
INSERT INTO `propiedades` VALUES (1,'Monoambiente totalmente equipado en Buceo.',2,19000,0,1,2,10,1269,2003,2,1,1,5,1,0,1,2,3,2,25,2,30,3,'no','DESPOSITO EN BHU, SURA Y CGN','OBED-EDOM Alquila Monoambiente totalmente Equipado.');
/*!40000 ALTER TABLE `propiedades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `propiedades_borrador`
--

DROP TABLE IF EXISTS `propiedades_borrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `propiedades_borrador` (
  `id_propiedad` int NOT NULL DEFAULT '0',
  `titulo` varchar(100) NOT NULL,
  `tipo_operacion` int NOT NULL,
  `Precio_Venta` int NOT NULL,
  `Permuta` int NOT NULL,
  `Financia` int NOT NULL,
  `tipo_propiedad` int NOT NULL,
  `departamento` int NOT NULL,
  `localidad` int NOT NULL,
  `año_construccion` int NOT NULL,
  `dormitorios` int NOT NULL,
  `baños` int NOT NULL,
  `garage` int NOT NULL,
  `estado` int NOT NULL,
  `oficina` int NOT NULL,
  `vivienda_social` int NOT NULL,
  `disposicion` int NOT NULL,
  `orientacion` int NOT NULL,
  `sobre` int NOT NULL,
  `distancia_mar` int NOT NULL,
  `metros_edificados` int NOT NULL,
  `metros_terraza` int NOT NULL,
  `metros_terreno` int NOT NULL,
  `plantas` int NOT NULL,
  `extras` varchar(200) NOT NULL,
  `garantias` longtext NOT NULL,
  `descripcion_propiedad` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `propiedades_borrador`
--

LOCK TABLES `propiedades_borrador` WRITE;
/*!40000 ALTER TABLE `propiedades_borrador` DISABLE KEYS */;
INSERT INTO `propiedades_borrador` VALUES (1,'Monoambiente totalmente equipado en Buceo.',2,19000,0,1,2,10,1269,2003,2,1,1,5,1,0,1,2,3,2,25,2,30,3,'no','DESPOSITO EN BHU, SURA Y CGN','OBED-EDOM Alquila Monoambiente totalmente Equipado.');
/*!40000 ALTER TABLE `propiedades_borrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguridad`
--

DROP TABLE IF EXISTS `seguridad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguridad` (
  `id_seguridad` int NOT NULL AUTO_INCREMENT,
  `tipo_seguridad` varchar(60) NOT NULL,
  PRIMARY KEY (`id_seguridad`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguridad`
--

LOCK TABLES `seguridad` WRITE;
/*!40000 ALTER TABLE `seguridad` DISABLE KEYS */;
INSERT INTO `seguridad` VALUES (1,'Cámaras CCTV'),(2,'Alarma'),(3,'Cerca Perimetral'),(4,'Portería 24 Horas'),(5,'Portón Automático'),(6,'Rejas'),(7,'Guardia de Seguridad');
/*!40000 ALTER TABLE `seguridad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seguridad_propiedad`
--

DROP TABLE IF EXISTS `seguridad_propiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seguridad_propiedad` (
  `id_tabla_seguridad` int NOT NULL AUTO_INCREMENT,
  `id_propiedad` int NOT NULL,
  `id_seguridad` int NOT NULL,
  PRIMARY KEY (`id_tabla_seguridad`),
  KEY `id_propiedad2_idx` (`id_propiedad`),
  KEY `id_seguridad_idx` (`id_seguridad`),
  CONSTRAINT `id_propiedad2` FOREIGN KEY (`id_propiedad`) REFERENCES `propiedades` (`id_propiedad`),
  CONSTRAINT `id_seguridad` FOREIGN KEY (`id_seguridad`) REFERENCES `seguridad` (`id_seguridad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seguridad_propiedad`
--

LOCK TABLES `seguridad_propiedad` WRITE;
/*!40000 ALTER TABLE `seguridad_propiedad` DISABLE KEYS */;
/*!40000 ALTER TABLE `seguridad_propiedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_operacion`
--

DROP TABLE IF EXISTS `tipo_operacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_operacion` (
  `id_tipooperacion` int NOT NULL AUTO_INCREMENT,
  `Tipo_Operacion` varchar(100) NOT NULL,
  PRIMARY KEY (`id_tipooperacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_operacion`
--

LOCK TABLES `tipo_operacion` WRITE;
/*!40000 ALTER TABLE `tipo_operacion` DISABLE KEYS */;
INSERT INTO `tipo_operacion` VALUES (1,'Venta'),(2,'Alquiler'),(3,'Alquiler Temporal');
/*!40000 ALTER TABLE `tipo_operacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_propiedad`
--

DROP TABLE IF EXISTS `tipo_propiedad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_propiedad` (
  `id_tipopropiedad` int NOT NULL AUTO_INCREMENT,
  `Tipo_Propiedad` varchar(100) NOT NULL,
  PRIMARY KEY (`id_tipopropiedad`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_propiedad`
--

LOCK TABLES `tipo_propiedad` WRITE;
/*!40000 ALTER TABLE `tipo_propiedad` DISABLE KEYS */;
INSERT INTO `tipo_propiedad` VALUES (1,'Casa'),(2,'Apartamento'),(3,'Terrenos'),(4,'Locales Comerciales'),(5,'Oficinas'),(6,'Chacras y Campos'),(7,'Garage o Cochera'),(8,'Negocio Empresarial'),(9,'Edificio'),(10,'Hotel'),(11,'Local Instruial y/o Galpon');
/*!40000 ALTER TABLE `tipo_propiedad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'obededom'
--
/*!50003 DROP PROCEDURE IF EXISTS `CrearPropiedad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CrearPropiedad`(IN title varchar(100),IN tipo_op INT,IN precio INT,IN perm INT,IN fin INT,IN tipo_prop INT,IN dep INT,IN loc INT,IN año INT,IN dorm INT,IN baño INT,IN garag INT,IN state INT,IN ofi INT,IN vivi_social INT,IN dispo INT,IN orient INT,IN sob INT,IN dis_mar INT,IN metros_edif INT,IN metros_terraz INT,IN mts_terreno INT,IN plant INT,IN extr varchar(200),IN garanti LONGTEXT,IN desc_prop LONGTEXT)
BEGIN
	insert into propiedades (titulo,tipo_operacion,Precio_Venta,Permuta,Financia,tipo_propiedad,departamento,localidad,año_construccion,dormitorios,baños,garage,estado,oficina,vivienda_social,disposicion,orientacion,sobre,distancia_mar,metros_edificados,metros_terraza,metros_terreno,plantas,extras,garantias,descripcion_propiedad)value(title,tipo_op,precio,perm,fin,tipo_prop,dep,loc,año,dorm,baño,garag,state,ofi,vivi_social,dispo,orient,sob,dis_mar,metros_edif,metros_terraz,mts_terreno,plant,extr,garanti,desc_prop);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoBaños` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoBaños`()
BEGIN
	Select * from baños;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoComfort` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoComfort`()
BEGIN
	Select * from comfort;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoComfortPropiedad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoComfortPropiedad`(IN prop_id int)
BEGIN
	Select * from comfort_propiedad where id_propiedad = prop_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoDepartamentos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoDepartamentos`()
BEGIN
	Select * from departamentos;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoDistanciaMar` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoDistanciaMar`()
BEGIN
	Select * from distancia_mar;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoDormitorios` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoDormitorios`()
BEGIN
	Select * from dormitorios;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoEstados` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoEstados`()
BEGIN
	Select * from estados;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoGarage` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoGarage`()
BEGIN
	Select * from garage;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoImagenes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoImagenes`(IN prop_id int)
BEGIN
	Select * from baños where id_propiedad = prop_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoLocalidad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoLocalidad`(IN Dep int)
BEGIN
	Select * from localidades where id_departamento = Dep;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoPlantas` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoPlantas`()
BEGIN
	Select * from plantas;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoPropiedad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoPropiedad`(IN prop int)
BEGIN
	Select * from propiedades where id_propiedad = prop;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoPropiedadFiltro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoPropiedadFiltro`(IN tipoop INT, IN tipoprop INT, IN dep INT, IN localid INT)
BEGIN
	SELECT * from propiedades WHERE tipo_operacion = tipoop AND tipo_propiedad = tipoprop AND departamento = dep AND localidad = localid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoSeguridad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoSeguridad`()
BEGIN
	Select * from seguridad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoSeguridadPropiedad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoSeguridadPropiedad`(IN prop_id int)
BEGIN
	Select * from seguridad_propiedad where id_propiedad = prop_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoSobre` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoSobre`()
BEGIN
	Select * from propiedad_sobre;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoTipoOperacion` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoTipoOperacion`()
BEGIN
	Select * from tipo_operacion;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `TraigoTipoPropiedad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `TraigoTipoPropiedad`()
BEGIN
	Select * from tipo_propiedad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-27 20:19:33
