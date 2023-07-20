-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Сен 06 2018 г., 08:22
-- Версия сервера: 5.5.25
-- Версия PHP: 5.2.12

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `sysadmhelper`
--

-- --------------------------------------------------------

--
-- Структура таблицы `testerresult`
--

CREATE TABLE IF NOT EXISTS `testerresult` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` text NOT NULL,
  `GameType` int(11) NOT NULL,
  `Time` time NOT NULL,
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=30 ;

--
-- Дамп данных таблицы `testerresult`
--

INSERT INTO `testerresult` (`Id`, `UserName`, `GameType`, `Time`) VALUES
(1, 'Alex', 1, '00:00:02'),
(2, 'al', 2, '00:00:02'),
(3, 'al2', 1, '00:00:01'),
(4, 'al2', 1, '01:41:00'),
(5, 'Alexааа', 1, '00:00:02'),
(9, 'Alexx999', 1, '00:36:00'),
(10, 'ИНокентий', 1, '00:36:00'),
(11, 'Лариса', 2, '00:45:00'),
(12, 'null', 2, '00:51:00'),
(13, 'Testeress', 1, '00:47:00'),
(14, 'neo', 1, '00:58:00'),
(15, '', 0, '00:00:00'),
(16, 'Бог', 1, '00:30:00'),
(17, 'друг', 3, '02:09:00'),
(18, '1234', 1, '00:26:00'),
(19, '8888', 3, '01:28:00'),
(20, 'иван', 1, '01:10:00'),
(21, 'Леха', 1, '00:38:00'),
(22, '56756756', 1, '01:09:00'),
(23, 'Бомдик', 4, '01:24:00'),
(24, 'яяяяя', 3, '01:28:00'),
(25, 'я1', 2, '00:48:00'),
(26, 'new test', 1, '00:00:00'),
(27, 'ntcn`1234', 1, '00:33:00'),
(28, '678678678', 1, '00:00:34'),
(29, '9789789789', 2, '00:00:48');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `Login` text NOT NULL,
  `Password` text NOT NULL,
  `Name` text NOT NULL,
  `SecondName` text NOT NULL,
  `UserRights` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `Login`, `Password`, `Name`, `SecondName`, `UserRights`) VALUES
(0, 'Alexsddffg', 'qaz123WSDFR', 'new', 'new', 0),
(0, 'Alexsddffgi', 'qaz123WSDFR', 'new', 'new', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
