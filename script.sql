USE [master]
GO
/****** Object:  Database [Torneo]    Script Date: 08/11/2024 3:29:21 ******/
CREATE DATABASE [Torneo]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Torneo', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Torneo.mdf' , SIZE = 4288KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Torneo_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\Torneo_log.ldf' , SIZE = 1072KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Torneo] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Torneo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Torneo] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Torneo] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Torneo] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Torneo] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Torneo] SET ARITHABORT OFF 
GO
ALTER DATABASE [Torneo] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [Torneo] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Torneo] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Torneo] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Torneo] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Torneo] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Torneo] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Torneo] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Torneo] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Torneo] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Torneo] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Torneo] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Torneo] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Torneo] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Torneo] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Torneo] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Torneo] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Torneo] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Torneo] SET  MULTI_USER 
GO
ALTER DATABASE [Torneo] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Torneo] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Torneo] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Torneo] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Torneo] SET DELAYED_DURABILITY = DISABLED 
GO
USE [Torneo]
GO
/****** Object:  Table [dbo].[Arbitros]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Arbitros](
	[id_arbitro] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[dni] [int] NULL,
	[id_ciudad] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_arbitro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[dni] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Canchas]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Canchas](
	[id_cancha] [int] IDENTITY(1,1) NOT NULL,
	[fecha_ult_mant] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_cancha] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Ciudades]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Ciudades](
	[id_ciudad] [int] IDENTITY(1,1) NOT NULL,
	[id_provincia] [int] NULL,
	[ciudad] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_ciudad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contactos_Arbitros]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contactos_Arbitros](
	[id_contacto] [int] IDENTITY(1,1) NOT NULL,
	[id_arbitro] [int] NOT NULL,
	[id_tipo_contacto] [int] NOT NULL,
	[contacto] [varchar](60) NOT NULL,
 CONSTRAINT [pk_contactos_arbitros] PRIMARY KEY CLUSTERED 
(
	[id_contacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contactos_Directores]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contactos_Directores](
	[id_contacto] [int] IDENTITY(1,1) NOT NULL,
	[id_director] [int] NOT NULL,
	[id_tipo_contacto] [int] NOT NULL,
	[contacto] [varchar](60) NOT NULL,
 CONSTRAINT [pk_contactos_directores] PRIMARY KEY CLUSTERED 
(
	[id_contacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Contactos_Jugadores]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Contactos_Jugadores](
	[id_contacto] [int] IDENTITY(1,1) NOT NULL,
	[id_jugador] [int] NOT NULL,
	[id_tipo_contacto] [int] NOT NULL,
	[contacto] [varchar](60) NOT NULL,
 CONSTRAINT [pk_cont_jugadores] PRIMARY KEY CLUSTERED 
(
	[id_contacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Detalles_Evaluacion]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalles_Evaluacion](
	[ID_DETALLE_EVALUACION] [int] IDENTITY(1,1) NOT NULL,
	[ID_TIPO_EVALUACION] [int] NULL,
	[ID_EVALUACION] [int] NULL,
	[EVALUACION] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_DETALLE_EVALUACION] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Detalles_Pagos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Detalles_Pagos](
	[ID_DETALLE] [int] IDENTITY(1,1) NOT NULL,
	[ID_PAGO] [int] NOT NULL,
	[MONTO] [decimal](10, 2) NULL,
	[CANTIDAD] [int] NULL,
	[ID_SERVICIO] [int] NOT NULL,
 CONSTRAINT [PK_DETALLES_PAGOS] PRIMARY KEY CLUSTERED 
(
	[ID_DETALLE] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Directores_Tecnicos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Directores_Tecnicos](
	[id_director] [int] IDENTITY(1,1) NOT NULL,
	[dni] [int] NULL,
	[nombre] [varchar](100) NULL,
	[apellido] [varchar](100) NULL,
	[fecha_nacimiento] [date] NULL,
	[id_ciudad] [int] NULL,
	[id_equipo] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_director] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[dni] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Equipos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Equipos](
	[id_equipo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[fecha_fundacion] [datetime] NULL,
	[id_ciudad] [int] NULL,
	[borrado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_equipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[nombre] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Evaluaciones]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Evaluaciones](
	[ID_EVALUACION] [int] IDENTITY(1,1) NOT NULL,
	[ID_JUGADOR] [int] NOT NULL,
	[ID_PARTIDO] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_EVALUACION] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Eventos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Eventos](
	[id_evento] [int] IDENTITY(1,1) NOT NULL,
	[tipo_evento] [int] NULL,
	[id_partido] [int] NULL,
	[id_jugador] [int] NULL,
	[minuto] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_evento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Formas_Pago]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Formas_Pago](
	[id_forma_pago] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_forma_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[descripcion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Jugadores]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Jugadores](
	[id_jugador] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[dni] [int] NULL,
	[ficha_medica] [bit] NULL,
	[id_equipo] [int] NULL,
	[id_obra_social] [int] NULL,
	[id_ciudad] [int] NULL,
	[fecha_nacimiento] [datetime] NULL,
	[id_posicion] [int] NULL,
	[rol] [int] NULL,
	[borrado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_jugador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[dni] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Obras_Sociales]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Obras_Sociales](
	[id_obra_social] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[telefono] [varchar](15) NULL,
	[calle] [varchar](50) NULL,
	[altura] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_obra_social] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Pagos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pagos](
	[id_pago] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [date] NULL,
	[id_forma_pago] [int] NOT NULL,
	[id_jugador] [int] NULL,
	[id_torneo] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_pago] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Paises]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Paises](
	[id_pais] [int] IDENTITY(1,1) NOT NULL,
	[pais] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_pais] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[pais] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Partidos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Partidos](
	[id_partido] [int] IDENTITY(1,1) NOT NULL,
	[equipo_1] [int] NULL,
	[equipo_2] [int] NULL,
	[fecha] [datetime] NULL,
	[id_cancha] [int] NULL,
	[id_torneo] [int] NULL,
	[id_arbitro] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_partido] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Posiciones_Juego]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Posiciones_Juego](
	[id_posicion] [int] IDENTITY(1,1) NOT NULL,
	[posicion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_posicion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[posicion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Provincias]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Provincias](
	[id_provincia] [int] IDENTITY(1,1) NOT NULL,
	[id_pais] [int] NULL,
	[provincia] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_provincia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreRol] [nvarchar](20) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[NombreRol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Servicios]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Servicios](
	[ID_SERVICIO] [int] IDENTITY(1,1) NOT NULL,
	[DESCRIPCION] [varchar](100) NULL,
	[PRECIO] [int] NULL,
 CONSTRAINT [PK_SERVICIOS] PRIMARY KEY CLUSTERED 
(
	[ID_SERVICIO] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tipos_Contactos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tipos_Contactos](
	[id_tipo_contacto] [int] IDENTITY(1,1) NOT NULL,
	[tipo_contacto] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_tipo_contacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[tipo_contacto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tipos_Evaluacion]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tipos_Evaluacion](
	[id_tipo_evaluacion] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_tipo_evaluacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tipos_Eventos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tipos_Eventos](
	[id_tipo_evento] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_tipo_evento] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[descripcion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tipos_Roles]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Tipos_Roles](
	[ID_TIPO_ROL] [int] IDENTITY(1,1) NOT NULL,
	[DESCRIPCIÓN] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ID_TIPO_ROL] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Torneos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Torneos](
	[id_torneo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[fecha_inicio] [datetime] NULL,
	[fecha_fin] [datetime] NULL,
	[Borrado] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_torneo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Torneos_X_Equipos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Torneos_X_Equipos](
	[id_torneo_x_equipo] [int] IDENTITY(1,1) NOT NULL,
	[id_torneo] [int] NULL,
	[id_equipo] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id_torneo_x_equipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[NombreUsuario] [nvarchar](50) NOT NULL,
	[Contraseña] [nvarchar](255) NOT NULL,
	[RolId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[NombreUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  View [dbo].[Tarjetas]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[Tarjetas]
AS
SELECT 
    e.id_jugador 'Id_Jugador',
    j.apellido +', '+j.nombre 'Jugador',
	eq.nombre 'Equipo',
    COUNT(CASE WHEN te.descripcion = 'Tarjeta Amarilla'
				THEN e.id_evento END)  'Tarjetas_amarillas',
    COUNT(CASE WHEN te.descripcion = 'Tarjeta Roja' 
			THEN e.id_evento END) AS 'Tarjetas_rojas'
FROM 
    Eventos e
JOIN 
    Jugadores j ON e.id_jugador = j.id_jugador
JOIN 
    Tipos_Eventos te ON e.tipo_evento = te.id_tipo_evento
JOIN
	Equipos eq ON eq.id_equipo = j.id_equipo
WHERE 
    te.descripcion IN ('Tarjeta Amarilla', 'Tarjeta Roja')
GROUP BY 
    e.id_jugador, j.nombre, j.apellido, eq.nombre
GO
/****** Object:  View [dbo].[V_Fair_Play]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[V_Fair_Play]
AS
SELECT 
    eq.id_equipo,
    eq.nombre 'nombre_equipo',
    SUM(t.tarjetas_amarillas) 'total_tarjetas_amarillas',
    SUM(t.tarjetas_rojas) 'total_tarjetas_rojas',
    SUM(t.tarjetas_amarillas + t.tarjetas_rojas) 'total_tarjetas',
	(SUM(t.tarjetas_amarillas))+(SUM(t.tarjetas_rojas)*2) 'PUNTAJE'
FROM 
    Tarjetas t
JOIN 
    Jugadores j ON t.id_jugador = j.id_jugador
JOIN 
    Equipos eq ON j.id_equipo = eq.id_equipo
GROUP BY 
    eq.id_equipo, eq.nombre;
GO
/****** Object:  View [dbo].[V_Resultado_Partidos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Resultado_Partidos]
AS
SELECT 
    p.id_partido,
    eq_1.nombre  'Equipo_1',
    eq_2.nombre 'Equipo_2',
    SUM(CASE WHEN  e.id_jugador = J1.id_jugador THEN 1 ELSE 0 END) AS goles_equipo_1,
    SUM(CASE WHEN e.id_jugador = J2.id_jugador THEN 1 ELSE 0 END) AS goles_equipo_2,

    CASE 
        WHEN SUM(CASE WHEN e.id_jugador = J1.id_jugador THEN 1 ELSE 0 END) > SUM(CASE WHEN e.id_jugador = J2.id_jugador THEN 1 ELSE 0 END) 
        THEN eq_1.nombre
        WHEN SUM(CASE WHEN e.id_jugador = J1.id_jugador THEN 1 ELSE 0 END) < SUM(CASE WHEN e.id_jugador = J2.id_jugador THEN 1 ELSE 0 END) 
        THEN eq_2.nombre
        ELSE 'Empate'
    END AS resultado
FROM 
    Partidos p
JOIN 
    Equipos eq_1 ON p.equipo_1 = eq_1.id_equipo
JOIN
	Jugadores j1 on eq_1.id_equipo = j1.id_equipo	
JOIN 
    Equipos eq_2 ON p.equipo_2 = eq_2.id_equipo
JOIN
	Jugadores J2 ON eq_2.id_equipo = J2.id_equipo	
LEFT JOIN 
    Eventos e ON p.id_partido = e.id_partido AND e.tipo_evento =
												(SELECT id_tipo_evento 
													FROM Tipos_Eventos
													WHERE descripcion = 'Gol')
GROUP BY  p.id_partido, eq_1.nombre, eq_2.nombre
GO
/****** Object:  View [dbo].[V_Tabla_Posiciones]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Tabla_Posiciones]
AS
SELECT 
    e.nombre AS Equipo,
    COUNT(vrp.id_partido) AS Partidos_Jugados,
    
    -- Partidos ganados por el equipo
    SUM(CASE 
            WHEN (vrp.Equipo_1 = e.nombre AND vrp.resultado = vrp.Equipo_1) 
              OR (vrp.Equipo_2 = e.nombre AND vrp.resultado = vrp.Equipo_2)
            THEN 1 ELSE 0 
        END) AS Partidos_Ganados,
    
    -- Partidos empatados
    SUM(CASE 
            WHEN vrp.resultado = 'Empate' THEN 1 ELSE 0 
        END) AS Partidos_Empatados,
    
    -- Partidos perdidos por el equipo
    SUM(CASE 
            WHEN (vrp.Equipo_1 = e.nombre AND vrp.resultado = vrp.Equipo_2) 
              OR (vrp.Equipo_2 = e.nombre AND vrp.resultado = vrp.Equipo_1) 
            THEN 1 ELSE 0 
        END) AS Partidos_Perdidos,
    
    -- Diferencia de goles
    SUM(CASE 
            WHEN vrp.Equipo_1 = e.nombre THEN vrp.Goles_equipo_1 - vrp.Goles_equipo_2
            WHEN vrp.Equipo_2 = e.nombre THEN vrp.Goles_equipo_2 - vrp.Goles_equipo_1
            ELSE 0 
        END) AS Diferencia_Goles,
    
    -- Puntos: 3 por victoria, 1 por empate, 0 por derrota
    SUM(CASE 
            WHEN (vrp.Equipo_1 = e.nombre AND vrp.resultado = vrp.Equipo_1) 
              OR (vrp.Equipo_2 = e.nombre AND vrp.resultado = vrp.Equipo_2) 
            THEN 3
            WHEN vrp.resultado = 'Empate' THEN 1
            ELSE 0 
        END) AS Puntos
FROM 
    Equipos e
    LEFT JOIN V_Resultado_Partidos vrp
        ON e.nombre = vrp.Equipo_1 OR e.nombre = vrp.Equipo_2
GROUP BY 
    e.nombre

GO
/****** Object:  View [dbo].[V_Goles_Recibidos]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create View [dbo].[V_Goles_Recibidos] AS
SELECT 
    eq.id_equipo,
    eq.nombre AS Equipo,    
    -- Goles recibidos como equipo local (como Equipo_1)
    SUM(CASE WHEN p.equipo_1 = eq.id_equipo THEN vrp.Goles_equipo_2 ELSE 0 END) AS Goles_Recibidos_Como_Local,    
    -- Goles recibidos como equipo visitante (como Equipo_2)
    SUM(CASE WHEN p.equipo_2 = eq.id_equipo THEN vrp.Goles_equipo_1 ELSE 0 END) AS Goles_Recibidos_Como_Visitante,    
    -- Total de goles recibidos
    SUM(CASE WHEN p.equipo_1 = eq.id_equipo THEN vrp.Goles_equipo_2 
             WHEN p.equipo_2 = eq.id_equipo THEN vrp.Goles_equipo_1 
             ELSE 0 END) AS Total_Goles_Recibidos
FROM 
    Equipos eq
JOIN 
    Partidos p ON eq.id_equipo = p.equipo_1 OR eq.id_equipo = p.equipo_2
JOIN 
    V_Resultado_Partidos vrp ON p.id_partido = vrp.id_partido
GROUP BY 
    eq.id_equipo, eq.nombre;

GO
/****** Object:  View [dbo].[Goleadores]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[Goleadores]
AS
SELECT 
    e.id_jugador 'Id Jugador',
    j.apellido +', '+j.nombre 'Jugador',
	eq.nombre 'Equipo',
    COUNT(e.id_evento)  'Goles_marcados'
FROM 
    Eventos e
JOIN 
    Jugadores j ON e.id_jugador = j.id_jugador
JOIN
	Equipos eq ON eq.id_equipo = j.id_equipo
WHERE 
e.tipo_evento = 	(SELECT id_tipo_evento 
					FROM Tipos_Eventos
						WHERE descripcion = 'Gol')
GROUP BY e.id_jugador, j.nombre, j.apellido, eq.nombre
GO
/****** Object:  View [dbo].[V_Evaluaciones_Arbitro]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Evaluaciones_Arbitro]
AS
SELECT 
    --ea.id_evaluacion,
    --ea.id_jugador,
    --j.apellido +', '+j.nombre 'Jugador',
    P.id_arbitro,
     a.apellido +', '+a.nombre 'Arbitro',
    AVG(DE.EVALUACION) AS puntaje_promedio
FROM 
    Evaluaciones ea
JOIN
	Detalles_Evaluacion DE ON DE.ID_EVALUACION = EA.ID_EVALUACION
JOIN
	Tipos_Evaluacion TE ON TE.id_tipo_evaluacion = DE.ID_TIPO_EVALUACION	
JOIN 
    Jugadores j ON ea.id_jugador = j.id_jugador
JOIN 
    Partidos p ON ea.id_partido = p.id_partido
JOIN 
    Arbitros a ON P.id_arbitro= a.id_arbitro
GROUP BY P.ID_ARBITRO, A.APELLIDO, A.NOMBRE
GO
/****** Object:  View [dbo].[V_Evaluaciones_Canchas]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Evaluaciones_Canchas]
AS
SELECT 
    P.id_cancha 'Cancha',
    AVG(DE.EVALUACION) AS puntaje_promedio
FROM 
    Evaluaciones ea
JOIN
	Detalles_Evaluacion DE ON DE.ID_EVALUACION = EA.ID_EVALUACION
JOIN
	Tipos_Evaluacion TE ON TE.id_tipo_evaluacion = DE.ID_TIPO_EVALUACION	
JOIN 
    Jugadores j ON ea.id_jugador = j.id_jugador
JOIN 
    Partidos p ON ea.id_partido = p.id_partido
JOIN 
    Canchas a ON P.id_cancha= a.id_cancha
GROUP BY P.id_cancha
GO
/****** Object:  View [dbo].[V_Rendimiento_Jugador]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Rendimiento_Jugador] AS
SELECT 
    j.id_jugador,
    j.apellido + ', ' + j.nombre AS Jugador,
	eq.NOMBRE AS EQUIPO,
    COUNT(DISTINCT p.id_partido) AS partidos_jugados,
    SUM(CASE WHEN T.descripcion = 'Gol' THEN 1 ELSE 0 END) AS goles,
    SUM(CASE WHEN T.descripcion = 'Asistencia' THEN 1 ELSE 0 END) AS asistencias,
    SUM(CASE WHEN T.descripcion = 'Tarjeta Amarilla' THEN 1 ELSE 0 END) AS tarjetas_amarillas,
    SUM(CASE WHEN T.descripcion = 'Tarjeta Roja' THEN 1 ELSE 0 END) AS tarjetas_rojas
FROM 
    Jugadores j
JOIN 
    Eventos e ON j.id_jugador = e.id_jugador
JOIN
	Tipos_Eventos T ON T.id_tipo_evento = E.tipo_evento
JOIN 
    Partidos p ON e.id_partido = p.id_partido
JOIN 
    Equipos eq ON j.id_equipo = eq.id_equipo
GROUP BY 
    j.id_jugador, j.nombre, j.apellido, eq.nombre;
GO
/****** Object:  View [dbo].[V_Rendimiento_Jugadores]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_Rendimiento_Jugadores]
AS
SELECT 
   	j.id_jugador,
    	j.apellido + ', ' + j.nombre  ' Jugador ' ,
	eq.NOMBRE  ' Equipo ' ,
    	COUNT(DISTINCT p.id_partido)  ' Partidos_jugados ' ,
    	SUM(CASE WHEN T.descripcion = 'Gol' THEN 1 ELSE 0 END)  ' Goles ' ,
SUM(CASE WHEN T.descripcion = 'Asistencia' THEN 1 ELSE 0 END)  'Asistencias' ,
    	SUM(CASE WHEN T.descripcion = 'Tarjeta Amarilla' THEN 1 ELSE 0 END)  ' Tarjetas_amarillas' ,
    SUM(CASE WHEN T.descripcion = 'Tarjeta Roja' THEN 1 ELSE 0 END)  ' Tarjetas_rojas' 
FROM 
    	Jugadores j
JOIN 
    	Eventos e ON j.id_jugador = e.id_jugador
JOIN
	Tipos_Eventos T ON T.id_tipo_evento = E.tipo_evento
JOIN 
    	Partidos p ON e.id_partido = p.id_partido
JOIN 
    	Equipos eq ON j.id_equipo = eq.id_equipo
GROUP BY 
   	j.id_jugador, j.nombre, j.apellido, eq.nombre;

GO
/****** Object:  View [dbo].[V_VerificacionArbitros]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[V_VerificacionArbitros] AS
SELECT 
    a.id_arbitro 'Id del arbitro',
    a.nombre + ' ' + a.apellido AS 'Arbitro',
    e.id_equipo 'Id del equipo',
    e.nombre 'Equipo',
    c_arbitro.ciudad 'Ciudad del arbitro',
    c_equipo.ciudad  'Ciudad del equipo',
    COUNT(*) 'Cantidad de veces que el árbitro estuvo con este equipo'
FROM Arbitros a
JOIN Partidos p ON p.id_arbitro = a.id_arbitro
JOIN  Equipos e ON e.id_equipo = p.equipo_1 OR e.id_equipo = p.equipo_2
JOIN Ciudades c_arbitro ON c_arbitro.id_ciudad = a.id_ciudad
JOIN Ciudades c_equipo ON c_equipo.id_ciudad = e.id_ciudad
WHERE 
    p.fecha >= DATEADD(MONTH, -1, GETDATE())
    AND c_arbitro.id_ciudad <> c_equipo.id_ciudad
    AND a.nombre LIKE '[A-O]%'
GROUP BY 
    a.id_arbitro, a.nombre, a.apellido, e.id_equipo, e.nombre, c_arbitro.ciudad, c_equipo.ciudad
HAVING 
    COUNT(*) >= 2;

GO
ALTER TABLE [dbo].[Arbitros]  WITH CHECK ADD  CONSTRAINT [fk_arbitros_ciudades] FOREIGN KEY([id_ciudad])
REFERENCES [dbo].[Ciudades] ([id_ciudad])
GO
ALTER TABLE [dbo].[Arbitros] CHECK CONSTRAINT [fk_arbitros_ciudades]
GO
ALTER TABLE [dbo].[Ciudades]  WITH CHECK ADD  CONSTRAINT [fk_ciudades_provincias] FOREIGN KEY([id_provincia])
REFERENCES [dbo].[Provincias] ([id_provincia])
GO
ALTER TABLE [dbo].[Ciudades] CHECK CONSTRAINT [fk_ciudades_provincias]
GO
ALTER TABLE [dbo].[Contactos_Arbitros]  WITH CHECK ADD  CONSTRAINT [fk_cont_arbitros_arbitros] FOREIGN KEY([id_arbitro])
REFERENCES [dbo].[Arbitros] ([id_arbitro])
GO
ALTER TABLE [dbo].[Contactos_Arbitros] CHECK CONSTRAINT [fk_cont_arbitros_arbitros]
GO
ALTER TABLE [dbo].[Contactos_Arbitros]  WITH CHECK ADD  CONSTRAINT [fk_cont_arbitros_tipos] FOREIGN KEY([id_tipo_contacto])
REFERENCES [dbo].[Tipos_Contactos] ([id_tipo_contacto])
GO
ALTER TABLE [dbo].[Contactos_Arbitros] CHECK CONSTRAINT [fk_cont_arbitros_tipos]
GO
ALTER TABLE [dbo].[Contactos_Directores]  WITH CHECK ADD  CONSTRAINT [fk_cont_directores_directores] FOREIGN KEY([id_director])
REFERENCES [dbo].[Directores_Tecnicos] ([id_director])
GO
ALTER TABLE [dbo].[Contactos_Directores] CHECK CONSTRAINT [fk_cont_directores_directores]
GO
ALTER TABLE [dbo].[Contactos_Directores]  WITH CHECK ADD  CONSTRAINT [fk_cont_directores_tipos] FOREIGN KEY([id_tipo_contacto])
REFERENCES [dbo].[Tipos_Contactos] ([id_tipo_contacto])
GO
ALTER TABLE [dbo].[Contactos_Directores] CHECK CONSTRAINT [fk_cont_directores_tipos]
GO
ALTER TABLE [dbo].[Contactos_Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_cont_jugadores_jugadores] FOREIGN KEY([id_jugador])
REFERENCES [dbo].[Jugadores] ([id_jugador])
GO
ALTER TABLE [dbo].[Contactos_Jugadores] CHECK CONSTRAINT [fk_cont_jugadores_jugadores]
GO
ALTER TABLE [dbo].[Contactos_Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_cont_jugadores_tipos] FOREIGN KEY([id_tipo_contacto])
REFERENCES [dbo].[Tipos_Contactos] ([id_tipo_contacto])
GO
ALTER TABLE [dbo].[Contactos_Jugadores] CHECK CONSTRAINT [fk_cont_jugadores_tipos]
GO
ALTER TABLE [dbo].[Detalles_Evaluacion]  WITH CHECK ADD  CONSTRAINT [FK_DETALLES_EVALUACION_EVALUACIONES] FOREIGN KEY([ID_EVALUACION])
REFERENCES [dbo].[Evaluaciones] ([ID_EVALUACION])
GO
ALTER TABLE [dbo].[Detalles_Evaluacion] CHECK CONSTRAINT [FK_DETALLES_EVALUACION_EVALUACIONES]
GO
ALTER TABLE [dbo].[Detalles_Evaluacion]  WITH CHECK ADD  CONSTRAINT [FK_DETALLES_EVALUACION_TIPOS_EVALUACION] FOREIGN KEY([ID_TIPO_EVALUACION])
REFERENCES [dbo].[Tipos_Evaluacion] ([id_tipo_evaluacion])
GO
ALTER TABLE [dbo].[Detalles_Evaluacion] CHECK CONSTRAINT [FK_DETALLES_EVALUACION_TIPOS_EVALUACION]
GO
ALTER TABLE [dbo].[Detalles_Pagos]  WITH CHECK ADD  CONSTRAINT [FK_DETALLES_PAGOS_PAGOS] FOREIGN KEY([ID_PAGO])
REFERENCES [dbo].[Pagos] ([id_pago])
GO
ALTER TABLE [dbo].[Detalles_Pagos] CHECK CONSTRAINT [FK_DETALLES_PAGOS_PAGOS]
GO
ALTER TABLE [dbo].[Detalles_Pagos]  WITH CHECK ADD  CONSTRAINT [FK_DETALLES_PAGOS_SERVICIOS] FOREIGN KEY([ID_SERVICIO])
REFERENCES [dbo].[Servicios] ([ID_SERVICIO])
GO
ALTER TABLE [dbo].[Detalles_Pagos] CHECK CONSTRAINT [FK_DETALLES_PAGOS_SERVICIOS]
GO
ALTER TABLE [dbo].[Directores_Tecnicos]  WITH CHECK ADD  CONSTRAINT [fk_directores_tecnicos_ciudades] FOREIGN KEY([id_ciudad])
REFERENCES [dbo].[Ciudades] ([id_ciudad])
GO
ALTER TABLE [dbo].[Directores_Tecnicos] CHECK CONSTRAINT [fk_directores_tecnicos_ciudades]
GO
ALTER TABLE [dbo].[Directores_Tecnicos]  WITH CHECK ADD  CONSTRAINT [fk_directores_tecnicos_equipos] FOREIGN KEY([id_equipo])
REFERENCES [dbo].[Equipos] ([id_equipo])
GO
ALTER TABLE [dbo].[Directores_Tecnicos] CHECK CONSTRAINT [fk_directores_tecnicos_equipos]
GO
ALTER TABLE [dbo].[Equipos]  WITH CHECK ADD  CONSTRAINT [fk_equipos_ciudades] FOREIGN KEY([id_ciudad])
REFERENCES [dbo].[Ciudades] ([id_ciudad])
GO
ALTER TABLE [dbo].[Equipos] CHECK CONSTRAINT [fk_equipos_ciudades]
GO
ALTER TABLE [dbo].[Evaluaciones]  WITH CHECK ADD  CONSTRAINT [FK_EVALUACIONES_JUGADORES] FOREIGN KEY([ID_JUGADOR])
REFERENCES [dbo].[Jugadores] ([id_jugador])
GO
ALTER TABLE [dbo].[Evaluaciones] CHECK CONSTRAINT [FK_EVALUACIONES_JUGADORES]
GO
ALTER TABLE [dbo].[Evaluaciones]  WITH CHECK ADD  CONSTRAINT [FK_EVALUACIONES_PARTIDOS] FOREIGN KEY([ID_PARTIDO])
REFERENCES [dbo].[Partidos] ([id_partido])
GO
ALTER TABLE [dbo].[Evaluaciones] CHECK CONSTRAINT [FK_EVALUACIONES_PARTIDOS]
GO
ALTER TABLE [dbo].[Eventos]  WITH CHECK ADD  CONSTRAINT [fk_eventos_jugadores] FOREIGN KEY([id_jugador])
REFERENCES [dbo].[Jugadores] ([id_jugador])
GO
ALTER TABLE [dbo].[Eventos] CHECK CONSTRAINT [fk_eventos_jugadores]
GO
ALTER TABLE [dbo].[Eventos]  WITH CHECK ADD  CONSTRAINT [fk_eventos_partidos] FOREIGN KEY([id_partido])
REFERENCES [dbo].[Partidos] ([id_partido])
GO
ALTER TABLE [dbo].[Eventos] CHECK CONSTRAINT [fk_eventos_partidos]
GO
ALTER TABLE [dbo].[Eventos]  WITH CHECK ADD  CONSTRAINT [fk_eventos_tipos_eventos] FOREIGN KEY([tipo_evento])
REFERENCES [dbo].[Tipos_Eventos] ([id_tipo_evento])
GO
ALTER TABLE [dbo].[Eventos] CHECK CONSTRAINT [fk_eventos_tipos_eventos]
GO
ALTER TABLE [dbo].[Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_jugadores_ciudades] FOREIGN KEY([id_ciudad])
REFERENCES [dbo].[Ciudades] ([id_ciudad])
GO
ALTER TABLE [dbo].[Jugadores] CHECK CONSTRAINT [fk_jugadores_ciudades]
GO
ALTER TABLE [dbo].[Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_jugadores_equipos] FOREIGN KEY([id_equipo])
REFERENCES [dbo].[Equipos] ([id_equipo])
GO
ALTER TABLE [dbo].[Jugadores] CHECK CONSTRAINT [fk_jugadores_equipos]
GO
ALTER TABLE [dbo].[Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_jugadores_obras_sociales] FOREIGN KEY([id_obra_social])
REFERENCES [dbo].[Obras_Sociales] ([id_obra_social])
GO
ALTER TABLE [dbo].[Jugadores] CHECK CONSTRAINT [fk_jugadores_obras_sociales]
GO
ALTER TABLE [dbo].[Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_jugadores_posiciones_juego] FOREIGN KEY([id_posicion])
REFERENCES [dbo].[Posiciones_Juego] ([id_posicion])
GO
ALTER TABLE [dbo].[Jugadores] CHECK CONSTRAINT [fk_jugadores_posiciones_juego]
GO
ALTER TABLE [dbo].[Jugadores]  WITH CHECK ADD  CONSTRAINT [fk_jugadores_roles] FOREIGN KEY([rol])
REFERENCES [dbo].[Tipos_Roles] ([ID_TIPO_ROL])
GO
ALTER TABLE [dbo].[Jugadores] CHECK CONSTRAINT [fk_jugadores_roles]
GO
ALTER TABLE [dbo].[Pagos]  WITH CHECK ADD  CONSTRAINT [fk_pagos_formas_pagos] FOREIGN KEY([id_forma_pago])
REFERENCES [dbo].[Formas_Pago] ([id_forma_pago])
GO
ALTER TABLE [dbo].[Pagos] CHECK CONSTRAINT [fk_pagos_formas_pagos]
GO
ALTER TABLE [dbo].[Pagos]  WITH CHECK ADD  CONSTRAINT [fk_pagos_jugadores] FOREIGN KEY([id_jugador])
REFERENCES [dbo].[Jugadores] ([id_jugador])
GO
ALTER TABLE [dbo].[Pagos] CHECK CONSTRAINT [fk_pagos_jugadores]
GO
ALTER TABLE [dbo].[Pagos]  WITH CHECK ADD  CONSTRAINT [fk_pagos_torneos] FOREIGN KEY([id_torneo])
REFERENCES [dbo].[Torneos] ([id_torneo])
GO
ALTER TABLE [dbo].[Pagos] CHECK CONSTRAINT [fk_pagos_torneos]
GO
ALTER TABLE [dbo].[Partidos]  WITH CHECK ADD  CONSTRAINT [fk_partidos_arbitros] FOREIGN KEY([id_arbitro])
REFERENCES [dbo].[Arbitros] ([id_arbitro])
GO
ALTER TABLE [dbo].[Partidos] CHECK CONSTRAINT [fk_partidos_arbitros]
GO
ALTER TABLE [dbo].[Partidos]  WITH CHECK ADD  CONSTRAINT [fk_partidos_canchas] FOREIGN KEY([id_cancha])
REFERENCES [dbo].[Canchas] ([id_cancha])
GO
ALTER TABLE [dbo].[Partidos] CHECK CONSTRAINT [fk_partidos_canchas]
GO
ALTER TABLE [dbo].[Partidos]  WITH CHECK ADD  CONSTRAINT [fk_partidos_equipos1] FOREIGN KEY([equipo_1])
REFERENCES [dbo].[Equipos] ([id_equipo])
GO
ALTER TABLE [dbo].[Partidos] CHECK CONSTRAINT [fk_partidos_equipos1]
GO
ALTER TABLE [dbo].[Partidos]  WITH CHECK ADD  CONSTRAINT [fk_partidos_equipos2] FOREIGN KEY([equipo_2])
REFERENCES [dbo].[Equipos] ([id_equipo])
GO
ALTER TABLE [dbo].[Partidos] CHECK CONSTRAINT [fk_partidos_equipos2]
GO
ALTER TABLE [dbo].[Partidos]  WITH CHECK ADD  CONSTRAINT [fk_partidos_torneos] FOREIGN KEY([id_torneo])
REFERENCES [dbo].[Torneos] ([id_torneo])
GO
ALTER TABLE [dbo].[Partidos] CHECK CONSTRAINT [fk_partidos_torneos]
GO
ALTER TABLE [dbo].[Provincias]  WITH CHECK ADD  CONSTRAINT [fk_provincias_paises] FOREIGN KEY([id_pais])
REFERENCES [dbo].[Paises] ([id_pais])
GO
ALTER TABLE [dbo].[Provincias] CHECK CONSTRAINT [fk_provincias_paises]
GO
ALTER TABLE [dbo].[Torneos_X_Equipos]  WITH CHECK ADD  CONSTRAINT [fk_equipos_torneos] FOREIGN KEY([id_torneo])
REFERENCES [dbo].[Torneos] ([id_torneo])
GO
ALTER TABLE [dbo].[Torneos_X_Equipos] CHECK CONSTRAINT [fk_equipos_torneos]
GO
ALTER TABLE [dbo].[Torneos_X_Equipos]  WITH CHECK ADD  CONSTRAINT [fk_torneos_equipos] FOREIGN KEY([id_equipo])
REFERENCES [dbo].[Equipos] ([id_equipo])
GO
ALTER TABLE [dbo].[Torneos_X_Equipos] CHECK CONSTRAINT [fk_torneos_equipos]
GO
ALTER TABLE [dbo].[Usuarios]  WITH CHECK ADD FOREIGN KEY([RolId])
REFERENCES [dbo].[Roles] ([Id])
GO
/****** Object:  StoredProcedure [dbo].[SP_Generar_Fixture_Liga]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_Generar_Fixture_Liga]

    @id_torneo INT
AS
BEGIN
    DECLARE @id_equipo_1 INT, @id_equipo_2 INT;
    DECLARE equipo_cursor CURSOR FOR
    SELECT id_equipo FROM Equipos WHERE id_equipo IN (SELECT id_equipo
													FROM Torneos_x_Equipos
													WHERE id_torneo = @id_torneo);

    OPEN equipo_cursor;
    FETCH NEXT FROM equipo_cursor INTO @id_equipo_1;

    WHILE @@FETCH_STATUS = 0
    BEGIN
        -- Emparejamiento con otros equipos
        DECLARE equipo_2_cursor CURSOR FOR
        SELECT id_equipo FROM Equipos WHERE id_equipo <> @id_equipo_1 AND id_equipo IN (SELECT id_equipo
																						FROM Torneos_x_Equipos
																						WHERE id_torneo = @id_torneo);

        OPEN equipo_2_cursor;
        FETCH NEXT FROM equipo_2_cursor INTO @id_equipo_2;

        WHILE @@FETCH_STATUS = 0
        BEGIN
            -- Insertar en el fixture
            INSERT INTO Partidos(id_torneo, equipo_1, equipo_2, fecha, id_cancha, id_arbitro)
            VALUES (@id_torneo, @id_equipo_1, @id_equipo_2, NULL, NULL, NULL);

            FETCH NEXT FROM equipo_2_cursor INTO @id_equipo_2;
        END

        CLOSE equipo_2_cursor;
        DEALLOCATE equipo_2_cursor;

        FETCH NEXT FROM equipo_cursor INTO @id_equipo_1;
    END

    CLOSE equipo_cursor;
    DEALLOCATE equipo_cursor;
END

GO
/****** Object:  StoredProcedure [dbo].[sp_TopVallaMenosVencida]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_TopVallaMenosVencida] 
@Top INT = 1
AS 
BEGIN 
SELECT TOP (@Top) vgr.Equipo, MIN(vgr.Total_Goles_Recibidos) AS Goles_Recibidos 
FROM V_Goles_Recibidos vgr 
GROUP BY vgr.Equipo 
ORDER BY Goles_Recibidos; 
END;
EXEC sp_TopVallaMenosVencida @Top = 5;

GO
/****** Object:  StoredProcedure [dbo].[sp_VerificarHabilitacionJugador_1]    Script Date: 08/11/2024 3:29:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_VerificarHabilitacionJugador_1]
    @id_jugador INT,
    @id_partido INT
AS
BEGIN
-- Se fija cuantas tarjetas tiene
    IF EXISTS (
        SELECT 1
        FROM Eventos e
        JOIN Tipos_Eventos te ON e.tipo_evento = te.id_tipo_evento
        WHERE e.id_jugador = @id_jugador
          AND e.id_partido = @id_partido
          AND (te.descripcion = 'Tarjeta Roja' OR te.descripcion = 'Doble Amarilla')
    )
    BEGIN
        PRINT 'El jugador está inhabilitado por tarjeta roja o doble amarilla.'
        RETURN
    END

    --¿Presentó ficha médica?
    IF EXISTS (
        SELECT 1
        FROM Jugadores j
        WHERE j.id_jugador = @id_jugador
          AND j.ficha_medica = 0
    )
    BEGIN
        PRINT 'El jugador no presentó la ficha médica.'
        RETURN
    END

    -- ¿Pago la cancha?
    IF EXISTS (
        SELECT 1
        FROM Equipos e
        JOIN Jugadores j ON e.id_equipo = j.id_equipo
        JOIN Pagos p ON p.id_jugador = j.id_jugador
        JOIN Detalles_Pagos dp ON dp.id_pago = p.id_pago
        JOIN Servicios s ON s.id_servicio = dp.id_servicio
        WHERE j.id_jugador = @id_jugador
          AND s.descripcion = 'Cancha'
          AND p.fecha < GETDATE()
    )
    BEGIN
        PRINT 'El equipo no pagó la cancha, el participante no puede proceder.'
        RETURN
    END

    PRINT 'El jugador está habilitado para el partido.'
END

GO
USE [master]
GO
ALTER DATABASE [Torneo] SET  READ_WRITE 
GO
