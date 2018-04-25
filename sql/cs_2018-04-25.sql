# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: cs
# Generation Time: 2018-04-25 10:32:39 +0000
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;

INSERT INTO `applications` (`id`, `projectId`, `testerId`, `auditTime`, `isPass`)
VALUES
	(18,1,9,'2018-04-25 10:30:23',0),
	(19,2,9,'2018-04-25 10:30:25',0),
	(20,3,9,'2018-04-25 10:30:28',0),
	(21,4,9,'2018-04-25 10:30:29',0);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;

INSERT INTO `devices` (`id`, `name`, `os`, `osVersion`, `manufacturer`, `testerId`)
VALUES
	(19,'iphone x','ios','11.3','apple',9),
	(21,'honor 9','android','7.0','honor',9);

/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;


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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `customerId`, `name`, `releaseTime`, `description`, `start`, `end`, `isExamine`, `isPublish`, `os`, `osVersion`, `phoneName`, `testerNumber`)
VALUES
	(1,10,'where are you come from','2018-04-25 10:30:07','4','2018-04-05 16:00:00','2018-05-12 16:00:00',1,1,'android','3','2',5),
	(2,10,'where do you want to go','2018-04-25 10:30:08','2','2018-05-19 16:00:00','2018-05-19 16:00:00',1,1,'ios','2','2',2),
	(3,10,'which time do you start to go','2018-04-25 10:30:08','okokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokok','2018-04-05 16:00:00','2018-05-05 16:00:00',1,1,'android','3','3',3),
	(4,10,'and do not come back','2018-04-25 10:30:09','5','2018-04-06 16:00:00','2018-05-07 15:59:59',1,1,'android','5','5',5);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
	(42,2,'B',4);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `password`, `phone`, `email`, `type`, `integral`)
VALUES
	(2,'0','0',NULL,'0','admin',10000),
	(9,'karon','1',NULL,'1','tester',20),
	(10,'2','2',NULL,'2','customer',1000);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
