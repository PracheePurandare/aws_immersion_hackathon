-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 13.232.9.213    Database: aws_immersion_hackathon
-- ------------------------------------------------------
-- Server version	8.0.42-0ubuntu0.20.04.1

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
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` int DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `job_role` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_size` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `industry` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `tncs` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `activation_code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `utm_source` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `utm_medium` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `utm_campaign` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` enum('1','2') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `booking_status` enum('1','2') COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '1:Booking Done, 2:Booking Cancled',
  `register_date` date DEFAULT NULL,
  `register_time` time DEFAULT NULL,
  `modified_date` date DEFAULT NULL,
  `modified_time` time DEFAULT NULL,
  `ip_address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
INSERT INTO `registrations` VALUES (1,4,'Prachee','Purandare','prachee.purandare@neoniche.com','India','MAHARASHTRA','421301','9483849933','Neonche','Manager','1-19 Employees','Aerospace',NULL,'Yes','ab395d2cbcc777cbdde0c91eab90ffe8','NN','Email','NN','1',NULL,'2025-07-09','10:41:57','2025-07-09','10:42:24','172.31.16.70');
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-24 12:22:17
