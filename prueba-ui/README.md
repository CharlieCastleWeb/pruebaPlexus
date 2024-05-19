
# Prueba UI Plexus Tech

## Índice

1. [Descripción](#descripción)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contacto](#contacto)
7. [Agradecimientos](#agradecimientos)
8. [Requerimientos iniciales](#requerimientos-iniciales)


## 1. Descripción

Prueba técnica en proceso de selección de Plexus Tech. Consiste en una web con información de ciudades para viajar.

## 2. Tecnologías Utilizadas

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## 3. Requisitos Previos

Tener instalado:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [npm](https://www.npmjs.com/) (versión 6.x o superior)
- [Angular CLI](https://cli.angular.io/) (versión 12.x o superior)

## 4. Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/CharlieCastleWeb/pruebaPlexus
   cd pruebaplexus/prueba-ui
   ```

1. Ejecuta el script `npm run dev` para instalar las dependencias e iniciar el servidor de desarrollo en `http://localhost:4200`.

## 5. Estructura del proyecto

A continuación se presenta la estructura general del proyecto. Cometí el error de no crear una carpeta específica para componentes. Al tratarse de una aplicación pequeña no es tan problemático, pero para proyectos más grandes es importante mantener una estructura organizada desde el inicio.

```bash
src/
 ├── app/
 │   ├── cards/                 # Componentes de la aplicación
 │   │      ├── card/
 │   │      ├── cards-display/
 │   ├── header/                # Componentes de la aplicación
 │   ├── models/                # Modelos de datos
 │   ├── services/              # Servicios
 ├── assets/                    # Imágenes y otros recursos
 │   ├── img/                   # Imágenes
 ├── index.html                 # Archivo principal HTML
 ├── styles.scss                # Archivo principal de estilos
 ├── main.ts                    # Punto de entrada principal de Angular
 ├── styles.scss                # Estilos globales de la aplicación
 └── ... Otros archivos        # Archivo principal HTML 
```


## 6. Contacto

Nombre: Carlos Castillo Martínez   
Correo: castillomartinezcarlos@gmail.com  
LinkedIn: [Perfil Linkedin](https://www.linkedin.com/in/carlos-castillo-martinez-68405218/)


## 7. Agradecimientos

Gracias a Francisco Castillo y a Plexus Tech por la oportunidad de participar en este proceso de selección.


## 8. Requerimientos iniciales

Enlace al diseño: https://xd.adobe.com/view/3defeb7f-0179-428f-994e-2e30a4860575-68bc/specs/
Imágenes originales en la carpeta img.

Objetivo:
* Desarrollar la vista presentada en el diseño utilizando:
    - Angular (ültima versión estable)
    - La librería de Material Angular: https://material.angular.io
    - Código própio scss bajo arquitectura ITCSS
    - Iconos mediante fuente Icomon
* El comportamiento responsive corre a cargo del desarrollador

Se valorará:
- Uso de SCSS y sistema de archivos.
- Optimización de imágenes.
- Accesibilidad
- Compatibilidad con navegadores 
