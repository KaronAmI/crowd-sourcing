# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: cs
# Generation Time: 2018-05-05 11:36:14 +0000
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
  `isSettle` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;

INSERT INTO `applications` (`id`, `projectId`, `testerId`, `auditTime`, `isPass`, `isSettle`)
VALUES
	(37,15,9,'2018-05-05 05:59:00',1,1),
	(38,15,14,'2018-05-05 05:59:19',1,1),
	(39,16,14,'2018-05-05 06:25:51',1,1),
	(40,17,9,'2018-05-05 07:17:24',0,NULL),
	(41,17,15,'2018-05-05 07:44:43',0,NULL);

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
  `status` varchar(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `isCommit` tinyint(1) DEFAULT NULL,
  `grade` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `defects` WRITE;
/*!40000 ALTER TABLE `defects` DISABLE KEYS */;

INSERT INTO `defects` (`id`, `projectId`, `testerId`, `name`, `status`, `description`, `isCommit`, `grade`)
VALUES
	(3,15,9,'缺陷a','通过','缺陷a',1,'S'),
	(4,15,9,'缺陷b','通过','缺陷b',1,'A'),
	(5,15,9,'缺陷c','驳回','缺陷c',1,'无'),
	(6,15,14,'abc','通过','abc',1,'S'),
	(7,16,14,'222','通过','222',1,'S');

/*!40000 ALTER TABLE `defects` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;

INSERT INTO `devices` (`id`, `name`, `os`, `osVersion`, `manufacturer`, `testerId`)
VALUES
	(1,'a','android','a','a',14),
	(2,'a','android','a','a',9),
	(4,'a','android','a','a',15);

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
  `appsrc` varchar(255) DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;

INSERT INTO `projects` (`id`, `customerId`, `name`, `releaseTime`, `description`, `start`, `end`, `isExamine`, `isPublish`, `os`, `osVersion`, `phoneName`, `testerNumber`, `appsrc`, `fileName`)
VALUES
	(15,10,'项目1','2018-05-05 05:57:48','1','2018-05-03 16:00:00','2018-05-08 16:00:00',1,1,'android','1','华为',2,'/api/download/demon-hell-fire-wings-artwork-fantasy-20138.jpg','demon-hell-fire-wings-artwork-fantasy-20138.jpg'),
	(16,10,'项目2','2018-05-05 05:58:27','2','2018-05-03 16:00:00','2018-05-08 16:00:00',1,1,'ios','1','苹果',1,NULL,NULL),
	(17,10,'a','2018-05-05 07:17:10','a','2018-05-03 16:00:00','2018-06-03 16:00:00',1,1,'android','1','华为',2,NULL,NULL),
	(18,10,'perfect','2018-05-05 08:33:15','perfect lo','2018-05-03 16:00:00','2018-06-02 16:00:00',1,1,'android','8.0','魅族',12,NULL,NULL),
	(19,10,'55',NULL,'33','2018-05-02 16:00:00','2018-05-03 16:00:00',1,0,'android','33','33',3,NULL,NULL),
	(20,10,'b','2018-05-05 08:43:00','b','2018-05-11 16:00:00','2018-05-18 16:00:00',1,1,'ios','b','b',222,NULL,NULL);

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
	(52,15,'S',20),
	(53,15,'A',18),
	(54,15,'B',16),
	(55,15,'C',14),
	(56,16,'S',100),
	(57,16,'A',50);

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
	(9,'karon','1',NULL,'tester1','tester',114),
	(10,'2','1',NULL,'customer','customer',9766),
	(14,'3','1',NULL,'tester2','tester',120),
	(15,'5','1',NULL,'tester3','tester',0);

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
