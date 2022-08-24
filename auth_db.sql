-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2022 at 10:12 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `days`
--

CREATE TABLE `days` (
  `id` int(11) NOT NULL,
  `days` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `days`
--

INSERT INTO `days` (`id`, `days`, `createdAt`, `updatedAt`) VALUES
(6, 'Senin', '2022-06-25 17:25:48', '2022-06-25 17:25:48'),
(7, 'Selasa', '2022-06-25 17:26:17', '2022-06-25 17:26:17'),
(8, 'Rabu', '2022-06-25 17:27:37', '2022-06-25 17:27:37'),
(9, 'Kamis', '2022-06-25 17:28:16', '2022-06-25 17:28:16'),
(10, 'Jumat', '2022-06-25 17:28:23', '2022-06-25 17:28:23'),
(11, 'Sabtu', '2022-06-25 17:28:30', '2022-06-25 17:28:30');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `student` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `subjectCode` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `student`, `subject`, `subjectCode`, `createdAt`, `updatedAt`) VALUES
(11, 'Eljagave Sigaingging', 'Kewarganegaraan', 'UKI1A2', '2022-06-24 16:55:04', '2022-06-24 17:35:50'),
(12, 'Farel Imanuel Purba', 'Bahasa Inggris ', 'UWI1A2', '2022-06-24 16:55:26', '2022-06-24 17:01:05'),
(13, 'Frans Sipayung', 'Pendidikan Karakter H.E.I', 'UWI1E1', '2022-06-24 16:55:50', '2022-06-24 17:01:12'),
(14, 'Gita Juliche Rajagukguk', 'Pengantar Teknik Komputer', 'TKI1A2', '2022-06-24 16:56:26', '2022-06-24 17:01:20'),
(15, 'Greace Hasiana Purba', 'Logika Matematika', 'TKI1B3', '2022-06-24 16:56:42', '2022-06-24 17:09:25'),
(16, 'Gresya Putri Purba', 'Praktikum Fisika I', 'TUI1A1', '2022-06-24 16:56:49', '2022-06-24 17:09:47'),
(17, 'Hutri Gita Gorat', 'Fisika I', 'TUI1A3', '2022-06-24 16:56:57', '2022-06-24 17:10:02'),
(19, 'Indah Lia Tampubolon', 'Kalkulus I', 'TUI1B3', '2022-06-24 16:57:19', '2022-06-24 17:10:31'),
(20, 'Jovan Luther Siahaan', 'Pengantar Rekayasa Desain', 'TUI1E3', '2022-06-24 16:57:27', '2022-06-24 17:10:45'),
(21, 'Kanezya Rumahorbo', 'Literasi Manusia', 'UWI1D2', '2022-06-24 16:57:44', '2022-06-24 17:11:00'),
(22, 'Lam Yossi Tondang', 'Biologi', 'TUI1D3', '2022-06-24 16:57:58', '2022-06-24 17:11:11'),
(23, 'Maria Belen Manurung', 'Praktikum Fisika II', 'TUI1F1', '2022-06-24 16:58:11', '2022-06-24 17:11:25'),
(24, 'Mario Pratama Munthe', 'Fisika II', 'TUI1F3', '2022-06-24 16:58:23', '2022-06-24 17:11:39'),
(25, 'Martin Cornelius Damanik', 'Kalkulus II', 'TUI1G3', '2022-06-24 16:58:28', '2022-06-24 17:11:59');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `subject_code` varchar(255) DEFAULT NULL,
  `schedule` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `scheduleTime` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject`, `subject_code`, `schedule`, `createdAt`, `updatedAt`, `scheduleTime`) VALUES
(22, 'Kewarganegaraan', 'UKI1A2', 'Senin', '2022-06-24 07:27:22', '2022-07-01 08:04:02', NULL),
(23, 'Pengantar Rekayasa Program', 'KUI1E3', 'Selasa', '2022-06-24 07:28:20', '2022-07-01 07:26:31', '11:00'),
(24, 'Pendidikan Karakter H.E.I', 'UWI1E1', 'Rabu', '2022-06-24 07:28:59', '2022-06-30 22:49:20', NULL),
(26, 'Logika Matematika', 'TKI1B3', 'Kamis', '2022-06-24 07:29:57', '2022-06-30 22:49:22', NULL),
(27, 'Praktikum Fisika I', 'TUI1A1', 'Jumat', '2022-06-24 07:30:48', '2022-06-30 22:49:25', NULL),
(28, 'Fisika I', 'TUI1A3', 'Sabtu', '2022-06-24 07:31:23', '2022-06-30 22:49:28', NULL),
(29, 'Kalkulus I', 'TUI1B3', 'Senin', '2022-06-24 07:31:44', '2022-07-01 08:01:58', NULL),
(30, 'Pengantar Rekayasa Desain', 'TUI1E3', 'Selasa', '2022-06-24 07:32:07', '2022-07-01 07:25:38', NULL),
(31, 'Literasi Manusia', 'UWI1D2', 'Rabu', '2022-06-24 07:33:50', '2022-06-30 22:49:20', NULL),
(33, 'Biologi', 'TUI1D3', 'Kamis', '2022-06-24 07:36:09', '2022-06-30 22:49:22', NULL),
(34, 'Praktikum Fisika II', 'TUI1F1', 'Jumat', '2022-06-24 07:37:06', '2022-06-30 22:49:25', NULL),
(36, 'Kalkulus II', 'TUI1G3', 'Sabtu', '2022-06-24 07:37:38', '2022-06-30 22:49:28', NULL),
(37, 'Fisika II', 'TUI1F3', 'Senin', '2022-06-25 16:38:26', '2022-07-01 07:29:43', NULL),
(38, 'Pengantar Teknik Komputer', 'TKI1A2', 'Selasa', '2022-06-25 16:39:00', '2022-07-01 07:25:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `times`
--

CREATE TABLE `times` (
  `id` int(11) NOT NULL,
  `times` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `times`
--

INSERT INTO `times` (`id`, `times`, `createdAt`, `updatedAt`) VALUES
(1, '07.30 - 10.00', '2022-06-25 17:19:52', '2022-06-25 17:19:52'),
(2, '10.15 - 12.45', '2022-06-25 17:21:03', '2022-06-25 17:21:03'),
(3, '13.30 - 16.00', '2022-06-25 17:21:31', '2022-06-25 17:21:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(225) DEFAULT NULL,
  `nip` varchar(225) DEFAULT NULL,
  `matkul` varchar(225) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refreshToken` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `nip`, `matkul`, `username`, `password`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
(57, 'admin', '', '', 'admin', '$2b$10$iGYkSt4s.J7TciarYF2.ieZdsk1qxhjQ6c566F5irLx/3Qtp81sxK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTcsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2NTY2NjI2MjQsImV4cCI6MTY1Njc0OTAyNH0.yY7DJNdU1Zf6uJexb4r0365tajRqb5YyX_-nQHfexDo', '2022-06-18 14:26:32', '2022-07-01 08:03:44'),
(75, 'Agustinus gabriel Situmorang', '1234567890987654', 'Kewarganegaraan', 'agus_', '$2b$10$AmdT775LVj5tKTdtic98lumXCUjJmbWNPgPhf7SKBb/6dzYIDCyPO', NULL, '2022-06-24 09:28:23', '2022-06-28 16:10:22'),
(76, 'Alberdin Yehezkiel Purba', '1234567890987653', 'Bahasa Inggris ', 'albertdin_', '$2b$10$6/PXmDJJlQ1P1.YaCh5i0uzIdDW3sscAYZ7Bq.xBooupRwyOP8ALG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzYsInVzZXJuYW1lIjoiYWxiZXJ0ZGluXyIsImlhdCI6MTY1NjQxODY2NSwiZXhwIjoxNjU2NTA1MDY1fQ.A72505SiimL15sKvr3qaeFxi8uAze37leLmqTFEUwKw', '2022-06-24 09:29:49', '2022-06-28 12:17:45'),
(77, 'Amelia Yohanna Panjaitan', '1234567890987652', 'Pendidikan Karakter H.E.I', 'amelia_', '$2b$10$NQ5eNUCSXWHCs1Awvhf6IeGCgxbUbrN3XPn5vIDp6eGfyH2gPenu6', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzcsInVzZXJuYW1lIjoiYW1lbGlhXyIsImlhdCI6MTY1NjA2MzA1NCwiZXhwIjoxNjU2MTQ5NDU0fQ.TdJipQ8CkXcIf-fmvdXMSz5U8TJKV34J-danEPEVHxY', '2022-06-24 09:30:46', '2022-06-24 09:30:54'),
(78, 'Andreas Robson Simanjuntak', '1234567890987651', 'Pengantar Teknik Komputer', 'andreas_', '$2b$10$BSTfELIV3AxdTuzGKYPcVO4W4HdzBpGtWFgYj1JRQCMkls7VN.69u', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzgsInVzZXJuYW1lIjoiYW5kcmVhc18iLCJpYXQiOjE2NTYwNjMwOTYsImV4cCI6MTY1NjE0OTQ5Nn0.Y6v0_w38xw5IS_WXyKDsOXxvlOynzreG62Wh3honMLQ', '2022-06-24 09:31:28', '2022-06-24 09:31:36'),
(79, 'Caroline Natasha Pakpahan', '1234567890987650', 'Logika Matematika', 'caroline_', '$2b$10$.AFv5t.glziRvEDHWzN1PufpOd8qENMHBSXqUKmFkOJcg2NP9lPMK', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksInVzZXJuYW1lIjoiY2Fyb2xpbmVfIiwiaWF0IjoxNjU2MDYzMTUwLCJleHAiOjE2NTYxNDk1NTB9.-x_FMtHtvJxh9ien6DH8NmP6DgHW1uxF-L9on6dPpps', '2022-06-24 09:32:17', '2022-06-24 09:32:30'),
(80, 'Chintamy Tiurlany Siregar', '1234567890987659', 'Praktikum Fisika I', 'cintamy_', '$2b$10$Ln1v6RVSIFatLsc9aAf86elsBPCOKOHlzILqZHnmNeb7lIx0T0uKW', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODAsInVzZXJuYW1lIjoiY2ludGFteV8iLCJpYXQiOjE2NTYwNjMyMTYsImV4cCI6MTY1NjE0OTYxNn0.oXUaIBEFvK2ks5gT0o1hFUIbYpk7bhj42ps5FCrdkmE', '2022-06-24 09:33:22', '2022-06-24 09:33:36'),
(81, 'Christin Mora Nainggolan', '1234567890987658', 'Fisika I', 'chirtine_', '$2b$10$8yYsyEpvJxYWJnPckQXvaOpOostdwtT8amzXBvP.TKf4hR0vxXq9K', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODEsInVzZXJuYW1lIjoiY2hpcnRpbmVfIiwiaWF0IjoxNjU2MDYzMzA4LCJleHAiOjE2NTYxNDk3MDh9.3_D2PqHc6LVCu0gL2fYNal7324aQrJ0OXgs9ROYlCks', '2022-06-24 09:34:13', '2022-06-24 09:35:08'),
(82, 'Dandi Hendrawan', '1234567890987657', 'Kalkulus I', 'dandi_', '$2b$10$E4snqRleiCjYYNVFbZ6PZet0t2p.UZA0oQzd78ww1c/4DHz4gQCne', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIsInVzZXJuYW1lIjoiZGFuZGlfIiwiaWF0IjoxNjU2MDYzNDIyLCJleHAiOjE2NTYxNDk4MjJ9.zDzk6oIAeHglTj-VVznQweslXuEq_kUgTuVKYtvgI8g', '2022-06-24 09:36:54', '2022-06-24 09:37:02'),
(83, 'Daniel Aditya Sipayung', '1234567890987657', 'Pengantar Rekayasa Desain', 'daniel_', '$2b$10$As7g66ykEJp3.RA0zGICX.0Hn90om8E0C7aCgxnH18smEb1XHOSp2', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODMsInVzZXJuYW1lIjoiZGFuaWVsXyIsImlhdCI6MTY1NjA2MzQ3NSwiZXhwIjoxNjU2MTQ5ODc1fQ.s6bUOJ1HUnIKMhUFUCgI9vrbisYYcclMUIOtzx5vPm8', '2022-06-24 09:37:49', '2022-06-24 09:37:55'),
(84, 'Devrado Siwan Purba', '1234567890987656', 'Literasi Manusia', 'devrado_', '$2b$10$gdCtCfOJJkJFub6P8SWU7u76lE00mtqEYNhTFQDBUuCwdo3X03X3m', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQsInVzZXJuYW1lIjoiZGV2cmFkb18iLCJpYXQiOjE2NTYwNjM1MjcsImV4cCI6MTY1NjE0OTkyN30.In4mJtx9EWncQrOkI2eDuyYY0Ye6Rh6t12HLIMNyuw8', '2022-06-24 09:38:35', '2022-06-24 09:38:47'),
(85, 'Diana Helen Panggabean', '1234567890987655', 'Biologi', 'diana_', '$2b$10$dt3p/CCXqzJDQ31JbHK38e1UIvXObRJv8hHPel2ToRZDv.rBoRT3u', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODUsInVzZXJuYW1lIjoiZGlhbmFfIiwiaWF0IjoxNjU2MDYzNTkxLCJleHAiOjE2NTYxNDk5OTF9.3JxIwh9EMnbJ3QwvJjpiSXykJIs_mAuj8ag3bWOphpk', '2022-06-24 09:39:41', '2022-06-24 09:39:51'),
(86, 'Dicka Latare Sinabang', '1234567890987654', 'Praktikum Fisika II', 'dicka_', '$2b$10$XXy1EBlJmBXNRx63Bx1glO./.o2oz/ug4rhFIp0/j1eHIKSyegs3K', NULL, '2022-06-24 09:40:44', '2022-06-24 09:40:44'),
(87, 'Dwi Theresya Sinaga', '1234567890987653', 'Fisika II', 'dwi_', '$2b$10$hKaj/esLpfPHTsw.7NNDzuH6BbGlELt30PoB4fCvqoOUr6568fQMG', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODcsInVzZXJuYW1lIjoiZHdpXyIsImlhdCI6MTY1NjA2MzcxNiwiZXhwIjoxNjU2MTUwMTE2fQ.0m6z3fCmPAU8QTsuuS2scuk0Nx36_kW4EMW5VlSuD9c', '2022-06-24 09:41:46', '2022-06-24 09:41:56'),
(88, 'Elizabeth Daniella Silalahi', '1234567890987652', 'Kalkulus II', 'elizabeth_', '$2b$10$Enl10yB94K6ra/unQWTZ9.hn1ZioI1UVMnH5WcJimBZAItRUCEDZa', NULL, '2022-06-24 09:43:03', '2022-06-24 09:44:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `days`
--
ALTER TABLE `days`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `times`
--
ALTER TABLE `times`
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
-- AUTO_INCREMENT for table `days`
--
ALTER TABLE `days`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
