-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Generation Time: Sep 06, 2017 at 01:41 PM
-- Server version: 5.7.17-log
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cdsaehstpuf6a5jm`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `id` int(11) NOT NULL,
  `logo` varchar(50) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`id`, `logo`, `name`) VALUES
(1, 'images/logo1.jpg', 'NGH RUH'),
(2, 'images/logo2.jpg', 'KFMC RUH'),
(3, '', 'SFHP RUH'),
(4, '', 'PSMMC RUH'),
(5, '', 'KKUH RUH'),
(6, '', 'KSMC RUH'),
(7, '', 'KFSHR RUH');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `extintion` text NOT NULL,
  `pager` text NOT NULL,
  `email` text NOT NULL,
  `position` text NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `section_id` int(11) NOT NULL,
  `type` text NOT NULL,
  `time` text NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `title`, `description`, `extintion`, `pager`, `email`, `position`, `hospital_id`, `date`, `section_id`, `type`, `time`, `image`) VALUES
(1, 'hassan', '', '', '', 'a@a.com', '', 1, '2017-09-01', 11, 'doctor', 'Intern.', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'),
(2, 'mhmofasf', '5454', 'asdasdd', '5454', 'mhmod@gmail.com', '54485', 1, '2017-09-01', 11, 'doctor', '1th', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'),
(3, '', '', '', '', '', '', 1, '2017-09-01', 11, 'doctor', '2nd', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'),
(4, '', '', '', '', '', '', 1, '2017-09-01', 11, 'doctor', '3th', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'),
(5, '', '', '', '', '', '', 1, '2017-09-01', 11, 'doctor', '4th', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C'),
(6, '', '', '', '', '', '', 1, '2017-09-01', 11, 'doctor', 'Consultant', 'https://scontent.faly1-1.fna.fbcdn.net/v/t34.0-12/21325892_1948845228737299_1620304484_n.png?oh=3e362ce657d9ede1294b56e17546f7ce&oe=59AF337C');

-- --------------------------------------------------------

--
-- Table structure for table `rules_means`
--

CREATE TABLE `rules_means` (
  `id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `rule` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rules_means`
--

INSERT INTO `rules_means` (`id`, `number`, `rule`) VALUES
(1, 1, 'Full_admin'),
(2, 2, 'hospital_admin'),
(3, 3, 'inspector');

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `hospital_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `hospital_id`, `hospital_name`) VALUES
(11, 'Orthopedic', 1, 'NGH RUH'),
(12, 'ENT', 2, 'KFMC RUH'),
(13, 'surgery', 3, 'SFHP RUH'),
(14, 'Plastic Surgery', 5, 'KKUH RUH'),
(15, 'Internal Medicne', 7, 'KFSHR RUH'),
(16, 'Thoracic Surgery', 4, 'PSMMC RUH'),
(17, 'Oncology', 7, 'KFSHR RUH'),
(18, 'asdasdas', 1, 'NGH RUH'),
(19, 'sadasdas', 1, 'NGH RUH'),
(20, 'Orthopedic Surgery', 2, 'KFMC RUH'),
(21, 'Plastic Surgery', 2, 'KFMC RUH'),
(22, 'General Surgery', 2, 'KFMC RUH'),
(23, 'Cardiac Surgery', 2, 'KFMC RUH');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `rule` int(11) NOT NULL,
  `password` text NOT NULL,
  `hospital_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `hospital_id`, `rule`, `password`, `hospital_name`) VALUES
(7, 'fhgdghjdhjgh', 'admin', 1, 1, 'admin', ''),
(54, 'amr', 'amr@amr.com', 1, 2, '123', 'NGH RUH'),
(55, 'amr mohamed mostafa', 'amr2010mohamd2010@gmail.com', 2, 2, '123', 'KFMC RUH\r\n'),
(56, 'amr mohamed mostafa', 'amr2010mohamd2010@gmail.com', 1, 3, '369', 'NGH RUH'),
(57, 'alonazy', 'med_st99@hotmail.com', 2, 2, '123456', 'KFMC RUH\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `rules_means`
--
ALTER TABLE `rules_means`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `rules_means`
--
ALTER TABLE `rules_means`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
