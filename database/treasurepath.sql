-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-12-2025 a las 17:39:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `treasurepath`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gasto`
--

CREATE TABLE `gasto` (
  `Id_gastos` int(11) NOT NULL,
  `Cantidad_gasto` decimal(10,2) DEFAULT NULL,
  `Fecha_gasto` date NOT NULL,
  `Descripcion_gasto` varchar(50) DEFAULT NULL,
  `Id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `gasto`
--

INSERT INTO `gasto` (`Id_gastos`, `Cantidad_gasto`, `Fecha_gasto`, `Descripcion_gasto`, `Id_usuario`) VALUES
(1, 43.00, '2025-11-03', 'hongo', 1),
(2, 89.00, '2025-11-04', 'perro', 1),
(3, 70.00, '2025-11-07', 'sapo', 1),
(4, 78.00, '2025-11-07', 'paloma', 1),
(5, 33.00, '2025-11-07', 'lavadora', 1),
(6, 30.00, '2025-11-07', 'sabanas', 3),
(7, 30.00, '2025-11-07', 'pony', 3),
(8, 90.00, '2025-11-08', 'cena en bedidorm', 1),
(9, 100.00, '2025-12-10', 'perro', 17),
(10, 50.00, '2025-12-10', 'comprar pienso', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingreso`
--

CREATE TABLE `ingreso` (
  `Id_ingreso` int(11) NOT NULL,
  `Cantidad_ingreso` decimal(10,2) NOT NULL,
  `Fecha_ingreso` date NOT NULL,
  `Descripcion_ingreso` varchar(50) DEFAULT NULL,
  `Id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ingreso`
--

INSERT INTO `ingreso` (`Id_ingreso`, `Cantidad_ingreso`, `Fecha_ingreso`, `Descripcion_ingreso`, `Id_usuario`) VALUES
(1, 4.00, '2025-11-03', 'palo', 1),
(2, 8.00, '2025-11-03', 'hongo', 1),
(3, 57.00, '2025-11-04', 'perro', 1),
(4, 50.00, '2025-11-07', 'farola', 1),
(5, 50.00, '2025-11-07', 'sapo', 1),
(6, 60.00, '2025-11-07', 'colacao', 3),
(7, 50.00, '2025-11-07', 'pony', 3),
(8, 100.00, '2025-11-07', 'macedonia', 3),
(9, 120.00, '2025-11-08', 'devolucion de mi hermano', 1),
(10, 2000.00, '2025-11-21', 'pago de cena', 1),
(11, 300.00, '2025-12-01', 'pago de paco', 1),
(13, 3000.00, '2025-12-10', 'hola', 17),
(14, 5000.00, '2025-12-10', 'pago de tienda', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metas`
--

CREATE TABLE `metas` (
  `Id_meta` int(11) NOT NULL,
  `Descripcion_meta` varchar(50) NOT NULL,
  `Cantidad_meta` decimal(10,2) NOT NULL,
  `Id_usuario` int(11) NOT NULL,
  `Fecha_meta` date NOT NULL,
  `Cantidad_ahorro` decimal(10,2) DEFAULT 0.00,
  `Meta_completada` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `metas`
--

INSERT INTO `metas` (`Id_meta`, `Descripcion_meta`, `Cantidad_meta`, `Id_usuario`, `Fecha_meta`, `Cantidad_ahorro`, `Meta_completada`) VALUES
(1, 'comprar coche', 40000.00, 1, '2025-11-14', 0.00, 1),
(2, 'comprrar casas', 3000.00, 1, '2025-11-14', 0.00, 1),
(3, 'comprar lavadora', 300.00, 1, '2025-11-21', 0.00, 1),
(4, 'comprar casa', 30000.00, 1, '2025-11-21', 0.00, 0),
(5, 'comprar carne', 2000.00, 17, '2025-12-10', 0.00, 1),
(6, 'comprar pienso', 4000.00, 17, '2025-12-10', 0.00, 0),
(7, 'comprar tucan', 3000.00, 18, '2025-12-10', 0.00, 0),
(8, 'comprar aceitunas', 400.00, 18, '2025-12-10', 0.00, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id_usuario` int(11) NOT NULL,
  `Nombre` varchar(15) NOT NULL,
  `Apellido` varchar(40) NOT NULL,
  `Nombre_usuario` varchar(40) NOT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Titulo` varchar(40) NOT NULL,
  `Saldo_inicial` decimal(10,2) NOT NULL DEFAULT 0.00,
  `Fecha_saldo` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Porcentaje_ahorro` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id_usuario`, `Nombre`, `Apellido`, `Nombre_usuario`, `Contraseña`, `Titulo`, `Saldo_inicial`, `Fecha_saldo`, `Porcentaje_ahorro`) VALUES
(1, 'admin', 'admin', 'admin', 'admin', '', 10300.00, '2025-12-03 15:34:21', 84.43),
(3, '111', '111', '111', '111', '', 3100.00, '2025-11-24 20:35:20', 71.43),
(4, '222', '222', '222', '$2y$10$seINBQYQrArVjbvLCued8O7VZoIMAjEqI', '', 0.00, '2025-12-09 22:01:27', 0.00),
(13, 'alba', 'alba', 'alba', '$2y$10$/S.nN5uLRrZWBmQ5hieCnuYwWYsZyMmdz', '', 0.00, '2025-12-09 22:20:15', 0.00),
(16, '333', '333', '333', '$2y$10$bGtLDx5rhXr.UrZOjEXeNuCjeeqR0rLvT', '', 0.00, '2025-12-09 22:48:38', 0.00),
(17, 'juan', 'juan', 'juan', '$2y$10$2GWYgJzQT4jyg5o5CW6LYehLh/yia77IQtVmtEmA6dDgqSqln467S', '', 2900.00, '2025-12-10 01:49:17', 96.67),
(18, 'perro', 'perro', 'perro', '$2y$10$rZum46MnUwHmGXlQkURTnuQW3a.e1l5vCjO3vnQJIL.PJY9xJx92.', '', 4950.00, '2025-12-10 01:47:05', 99.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `gasto`
--
ALTER TABLE `gasto`
  ADD PRIMARY KEY (`Id_gastos`),
  ADD KEY `fk_gasto_usuario` (`Id_usuario`);

--
-- Indices de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD PRIMARY KEY (`Id_ingreso`),
  ADD KEY `fk_ingreso_usuario` (`Id_usuario`);

--
-- Indices de la tabla `metas`
--
ALTER TABLE `metas`
  ADD PRIMARY KEY (`Id_meta`),
  ADD KEY `Meta_usuario` (`Id_usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id_usuario`),
  ADD UNIQUE KEY `Nombre_usuario` (`Nombre_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gasto`
--
ALTER TABLE `gasto`
  MODIFY `Id_gastos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `ingreso`
--
ALTER TABLE `ingreso`
  MODIFY `Id_ingreso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `metas`
--
ALTER TABLE `metas`
  MODIFY `Id_meta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `gasto`
--
ALTER TABLE `gasto`
  ADD CONSTRAINT `fk_gasto_usuario` FOREIGN KEY (`Id_usuario`) REFERENCES `usuario` (`Id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `ingreso`
--
ALTER TABLE `ingreso`
  ADD CONSTRAINT `fk_ingreso_usuario` FOREIGN KEY (`Id_usuario`) REFERENCES `usuario` (`Id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `metas`
--
ALTER TABLE `metas`
  ADD CONSTRAINT `Meta_usuario` FOREIGN KEY (`Id_usuario`) REFERENCES `usuario` (`Id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
