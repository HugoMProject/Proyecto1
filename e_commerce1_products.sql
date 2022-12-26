-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: e_commerce1
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'gestion de datos',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica3.jpg','2022-12-14 23:01:15','2022-12-15 21:41:26'),(3,'sistemas de bases de datos',10000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica2.jpg','2022-12-14 23:01:38','2022-12-17 22:19:33'),(4,'Soporte Tecnico',30000,'nos encarmagos de brindarte soporte tecnico sobre los esquipos de medicion de datos',10,'/imagenes/electronica2.jpg','2022-12-15 18:24:37','2022-12-17 22:21:33'),(5,'ciber seguridad',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica2.jpg','2022-12-15 18:27:56','2022-12-15 21:49:09'),(6,'ciber seguridad',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica3.jpg','2022-12-15 21:42:54','2022-12-15 21:42:54'),(7,'Soporte Tecnico',30000,'nos encarmagos de brindarte soporte tecnico sobre los esquipos de medicion de datos',10,'/imagenes/electronica2.jpg','2022-12-15 21:43:58','2022-12-17 22:21:44'),(8,'ciber seguridad',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica1.jpg','2022-12-15 21:47:17','2022-12-15 21:47:17'),(9,'ciber seguridad',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica1.jpg','2022-12-15 21:47:41','2022-12-15 21:47:41'),(10,'ciber seguridad',6000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica2.jpg','2022-12-15 21:48:41','2022-12-15 21:48:41'),(11,'Servicios Estructurales',20000,'nos encarmagos de gestionar y organizar los datos de tu empresa y los almacenamos en base de datos para una mayor comodida',10,'/imagenes/electronica2.jpg','2022-12-17 22:20:13','2022-12-17 22:20:13');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-21 20:49:55
