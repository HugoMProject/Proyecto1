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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pablo','lopez','$2b$10$/pRjsHL053YpbCPdCYLqx.SQ8awnnOo2t1OMQ6J4hJJ2kWoZrcO2K','kyoren2018@gmail.com','2022-12-16','2022-12-14 22:14:22','2022-12-14 22:14:22'),(2,'pablo','gordo','$2b$10$5U0B1hCBe/J0vsR8rx7BSuxB1yyE8lj2RWHS9elOxWr2FZJxLz5YK','hugo1@gmail.com','2022-12-18','2022-12-14 22:21:52','2022-12-14 22:21:52'),(3,'hector','lopez','$2b$10$CIkjYjZWOScgEm0QFB5mJeQs0ecZklzYz.LHqVAY9cCEGD0TdXW7e','hugo@gmail.com','2016-02-04','2022-12-14 22:25:36','2022-12-14 22:25:36'),(4,'carlos','alfredo','$2b$10$oMwKMTIKb1s2Uz.tmLfCEuPp9iOPCk1q2q87um9CU2ZHztd.L3siK','alfredo@gmail.com','1975-06-13','2022-12-15 18:40:02','2022-12-15 18:40:02'),(5,'carlos','alfredo','$2b$10$vckbAYvwN6ktVwKIQT..peCqd5oHqKGh18GuNktigKAHeIYb83EpW','alfredo@gmail.com','2022-12-23','2022-12-15 18:56:11','2022-12-15 18:56:11'),(6,'carlos','alfredo','$2b$10$GtDWnym4jBgmzo9Pn5Il8uazSHkWK7uxLJgZ7hwDY.e95iVaV6OrG','alfredo@gmail.com','2022-12-16','2022-12-15 19:01:22','2022-12-15 19:01:22'),(7,'carlos','alfredo','$2b$10$yINywG5H1UMnjljDJ9PYC.VwWYUOoDeX.FGoY9S0FGDiozfJq69x6','alfredo1@gmail.com','2022-12-01','2022-12-15 19:52:02','2022-12-15 19:52:02'),(8,'carlos','alfredo','$2b$10$L46o7Zd.obAdKs/twrYn7.i0NzqUBmdDRuix0owT/mvLbHfI/NO/K','lucas33@gmail.com','2022-08-11','2022-12-15 20:09:00','2022-12-15 20:09:00'),(9,'carlos','alfredo','$2b$10$XcjKSADsecx5M7Tc3mgH3uouFqypGGNP4i8GoFfw0nXmo0lx1WZTO','lucas123132@gmail.com','2022-10-07','2022-12-15 20:15:10','2022-12-15 20:15:10');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
