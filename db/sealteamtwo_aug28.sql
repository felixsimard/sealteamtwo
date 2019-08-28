-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2019 at 08:10 PM
-- Server version: 8.0.12
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sealteamtwo`
--

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `event_link` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci DEFAULT NULL,
  `tickets_link` varchar(255) CHARACTER SET utf32 COLLATE utf32_general_ci DEFAULT NULL,
  `added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `name`, `location`, `date`, `event_link`, `tickets_link`, `added`) VALUES
(1, 'House of Work', 'École Privée', '2019-09-05 22:00:00', 'https://www.facebook.com/events/455975091853491/', NULL, '2019-08-28 11:14:15'),
(2, 'Rainforest Festival', 'Velvet - Auberge Saint-Gabriel', '2019-08-31 23:00:00', 'https://www.facebook.com/events/455975091853491/', 'https://www.ticketmaster.ca/', '2019-08-28 11:14:15'),
(3, 'Back to School', 'Apt. 200', '2019-09-08 22:00:00', 'https://www.facebook.com/events/920031214996661/', NULL, '2019-08-28 12:07:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
