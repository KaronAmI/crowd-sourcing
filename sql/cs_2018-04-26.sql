# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: cs
# Generation Time: 2018-04-26 14:09:07 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table applications
# ------------------------------------------------------------

DROP TABLE IF EXISTS `applications`;

CREATE TABLE `applications` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `testerId` int(11) DEFAULT NULL,
  `auditTime` datetime DEFAULT NULL,
  `isPass` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;

INSERT INTO `applications` (`id`, `projectId`, `testerId`, `auditTime`, `isPass`)
VALUES
	(26,NULL,NULL,NULL,NULL),
	(27,5,9,'2018-04-25 13:53:42',1),
	(28,6,9,'2018-04-25 13:54:17',0),
	(29,9,9,'2018-04-25 13:54:38',0),
	(30,7,9,'2018-04-25 13:55:34',0),
	(31,5,11,'2018-04-25 13:56:39',1),
	(32,6,11,'2018-04-25 13:56:45',0),
	(33,7,11,'2018-04-25 13:56:46',0),
	(34,9,11,'2018-04-25 13:56:47',0),
	(35,7,10,'2018-04-25 16:29:43',0),
	(36,6,10,'2018-04-25 16:29:45',0),
	(37,5,10,'2018-04-25 16:29:46',1),
	(38,9,10,'2018-04-25 16:29:47',0);

/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table defects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `defects`;

CREATE TABLE `defects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `testerId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `addTime` datetime DEFAULT NULL,
  `isUse` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table devices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `devices`;

CREATE TABLE `devices` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `osVersion` varchar(50) DEFAULT NULL,
  `manufacturer` varchar(50) DEFAULT NULL,
  `testerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table projects
# ------------------------------------------------------------

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `releaseTime` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `isExamine` tinyint(1) DEFAULT NULL,
  `isPublish` tinyint(1) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `osVersion` varchar(50) DEFAULT NULL,
  `phoneName` varchar(50) DEFAULT NULL,
  `testerNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `customerId`, `name`, `releaseTime`, `description`, `start`, `end`, `isExamine`, `isPublish`, `os`, `osVersion`, `phoneName`, `testerNumber`)
VALUES
	(5,10,'where are you going','2018-04-25 13:50:48','there','2018-04-05 16:00:00','2018-05-05 16:00:00',0,1,'android','7.0','honor 9',10),
	(6,10,'1','2018-04-25 13:50:53','4','2018-04-19 16:00:00','2018-05-19 16:00:00',1,1,'android','3','2',5),
	(7,10,'2','2018-04-25 13:51:03','2','2018-04-19 16:00:00','2018-05-19 16:00:00',1,1,'android','2','2',2),
	(9,10,'6','2018-04-25 13:51:52','6','2018-04-12 16:00:00','2018-05-12 16:00:00',1,1,'ios','6','6',6),
	(10,10,'漫威-复仇者联盟3',NULL,'嘿嘿嘿嘿','2018-04-19 16:00:00','2018-05-19 16:00:00',1,0,'android','7.0','honor',10);

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table rewards
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rewards`;

CREATE TABLE `rewards` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `grade` varchar(11) DEFAULT NULL,
  `reward` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `rewards` WRITE;
/*!40000 ALTER TABLE `rewards` DISABLE KEYS */;

INSERT INTO `rewards` (`id`, `projectId`, `grade`, `reward`)
VALUES
	(4,31,'S',3),
	(8,30,'S',3),
	(9,33,'S',10),
	(10,33,'A',8),
	(13,34,'A',8),
	(14,34,'B',6),
	(15,34,'C',2),
	(16,34,'S',10),
	(17,38,'S',520),
	(18,38,'A',52),
	(19,38,'B',20),
	(21,38,'C',2),
	(22,40,'S',520),
	(23,40,'A',20),
	(24,40,'B',0),
	(25,41,'S',222),
	(26,41,'A',22),
	(27,41,'B',2),
	(28,44,'S',222),
	(29,44,'A',22),
	(30,44,'B',2),
	(31,45,'S',666),
	(32,45,'A',66),
	(34,45,'B',6),
	(35,46,'S',520),
	(36,46,'A',20),
	(37,1,'S',3),
	(38,1,'A',2),
	(39,1,'B',1),
	(40,2,'S',6),
	(41,2,'A',5),
	(42,2,'B',4),
	(43,5,'S',10),
	(44,5,'A',8),
	(45,5,'B',6),
	(47,5,'C',4);

/*!40000 ALTER TABLE `rewards` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `integral` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `password`, `phone`, `email`, `type`, `integral`)
VALUES
	(2,'0','0',NULL,'0','admin',10000),
	(9,'karon','1',NULL,'karon','tester',20),
	(10,'2','2',NULL,'2','customer',1000),
	(11,'xiaomei','3',NULL,'xiaomei','tester',10);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
