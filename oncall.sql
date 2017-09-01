-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2017 at 06:40 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7
use cdsaehstpuf6a5jm;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oncall`
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
(1, 'images/logo1.jpg', 'Al Sadr'),
(2, 'images/logo2.jpg', 'Al Anf');

-- --------------------------------------------------------

--
-- Table structure for table `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `extintion` text NOT NULL,
  `pager` text NOT NULL,
  `email` text NOT NULL,
  `position` text NOT NULL,
  `hospital_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `section_id` int(11) NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `records`
--

INSERT INTO `records` (`id`, `name`, `phone`, `extintion`, `pager`, `email`, `position`, `hospital_id`, `date`, `section_id`, `type`) VALUES
(2, '0', '65448', '0', '4584', '0', '5484', 1, '2017-12-05', 5, ''),
(3, 'asdasd', '65448', 'adad', '4584', 'asdada@ad.com', '5484', 1, '2017-12-05', 5, ''),
(4, 'asdasd', '65448', 'adad', '4584', 'asdada@ad.com', '5484', 1, '2017-12-05', 5, ''),
(5, 'asdasf', '575', 'asdasd', '75757', 'asfas@gma.com', '757575', 1, '2017-12-05', 5, ''),
(6, 'asdasdasdd', '', '', '', '', '', 1, '2017-12-05', 5, ''),
(7, 'asdasd', '65448', 'adad', '4584', 'asdada@ad.com', '5484', 1, '2017-12-05', 5, ''),
(8, 'asdasf', '575', 'asdasd', '75757', 'asfas@gma.com', '757575', 1, '2017-12-05', 5, ''),
(9, 'asdasdasdd', '', '', '', '', '', 1, '2017-12-05', 5, ''),
(10, 'asdadad', '', '', '', 'amr2010mohamd2010@gmail.com', '', 1, '0000-00-00', 5, ''),
(11, 'asdadad', '01270290279', 'dsfdsf', '54487487', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-18', 5, 'doctor'),
(12, 'amr mohamed mostafa', '01270290279', 'asdasd', '', 'amr2010mohamd2010@gmail.com', '', 1, '2017-08-18', 5, 'doctor'),
(13, 'amr mohamed mostafa', '', '', '', '', '', 1, '2017-08-18', 5, 'doctor'),
(14, 'asdadad', '01270290279', 'dsfdsf', '548748', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-16', 5, 'doctor'),
(15, 'asdadad', '', '', '', '', '', 1, '2017-08-12', 5, 'doctor'),
(16, 'asdadad', '01270290279', 'dsfdsf', '5454', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-01', 5, 'doctor'),
(17, 'asdadad', '01270290279', 'dsfdsf', '5454', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-01', 5, 'doctor'),
(18, 'asdadad', '01270290279', 'dsfdsf', '5454', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-01', 5, 'doctor'),
(19, 'asdadad', '01270290279', 'dsfdsf', '5454', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-01', 5, 'doctor'),
(20, 'asdadad', '01270290279', 'dsfdsf', '5454', 'amr2010mohamd2010@gmail.com', 'sdfdfsd', 1, '2017-08-01', 5, 'doctor'),
(21, 'asdadad', '', '', '', '', '', 1, '2017-08-17', 5, 'doctor'),
(22, 'amr mohamed mostafa', '01270290279', '54545', '54548', 'amr2010mohamd2010@gmail.com', '548548', 1, '2017-08-17', 5, 'supervisor');

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
(5, 'Fuck you', 1, 'Al Sadr'),
(7, 'amr mohamed mostafaa', 1, 'Al Sadr'),
(8, 'Chest', 2, 'Al Anf'),
(9, 'Chest', 1, 'Al Sadr'),
(10, 'Try', 1, 'Al Sadr');

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
(7, 'fhgdghjdhjgh', '', 0, 1, '', ''),
(41, 'Amr Mohjamed', 'amreasfasdfa@gmail.com', 1, 1, '123', ''),
(47, 'amr mohamed mostafa', 'amr2010mohamd2010@gmail.com', 1, 3, '21515415414454545', 'Al Sadr'),
(48, 'نارلتانبابؤغاب', 'البلاغيغاي', 1, 3, 'لاتبالتبتفغبتغ', 'Al Sadr'),
(51, 'Mhmod', 'a@a.com', 2, 3, '11111', 'Al Anf');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `rules_means`
--
ALTER TABLE `rules_means`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
