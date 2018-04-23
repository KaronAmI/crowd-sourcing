# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: cs
# Generation Time: 2018-04-23 00:58:10 +0000
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
  `rewardId` int(11) DEFAULT NULL,
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

INSERT INTO `projects` (`id`, `rewardId`, `customerId`, `name`, `releaseTime`, `description`, `start`, `end`, `isExamine`, `isPublish`, `os`, `osVersion`, `phoneName`, `testerNumber`)
VALUES
	(18,NULL,9,'7',NULL,'5','2018-04-05 16:00:00','2018-05-20 16:00:00',1,1,'android','4','2',6),
	(19,NULL,9,'good',NULL,'2','2018-04-04 16:00:00','2018-05-19 16:00:00',0,0,'ios','11.3','iphonex',2),
	(20,NULL,9,'5',NULL,'5','2018-04-04 16:00:00','2018-05-20 16:00:00',1,0,'android','5','5',5),
	(21,NULL,9,'i miss u',NULL,'i miss u','2018-05-19 16:00:00','2018-05-19 16:00:00',1,0,'android','i miss u','i miss u',520),
	(22,NULL,9,'1',NULL,'4','2018-04-05 16:00:00','2018-05-13 16:00:00',1,0,'android','3','2',5);

/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table rewards
# ------------------------------------------------------------

DROP TABLE IF EXISTS `rewards`;

CREATE TABLE `rewards` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `projectId` int(11) NOT NULL,
  `grade` int(11) DEFAULT NULL,
  `reward` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `password`, `phone`, `email`, `type`)
VALUES
	(2,'0','0',NULL,'0','admin'),
	(9,'1','1',NULL,'1','tester'),
	(10,'2','2',NULL,'2','customer');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
