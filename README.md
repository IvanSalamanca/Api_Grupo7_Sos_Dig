# Proyecto de Visualización de Datos Energéticos

Este proyecto es una aplicación web construida con Node.js, Express y EJS. Su propósito es visualizar y gestionar información relacionada con:

- Consumo energético por comarca
- Consumo energético por hora
- Instalaciones energéticas
- Recursos, reservas y notificaciones
- Gestión de usuarios con autenticación basada en JWT

## 📁 Estructura del Proyecto
├── data/
│   ├── consumoPorComarca.json
│   ├── consumoPorHora.json
│   ├── instalaciones.json
│   ├── Recurso.json
│   ├── Reservas.json
│   └── Notificacion.json
├── routes/
│   ├── consumoComarcal.js
│   ├── consumoHoras.js
│   ├── instalaciones.js
│   ├── recursos.js
│   ├── reservas.js
│   ├── notificaciones.js
│   └── usuarios.js
├── views/
│   ├── consumoComarcal.ejs
│   ├── consumoHoras.ejs
│   ├── instalaciones.ejs
│   ├── recursos.ejs
│   ├── recursosDetall.ejs
│   ├── recursosEdit.ejs
│   ├── index.ejs
│   └── home.ejs
├── user-repository.js
├── config.js
├── index.js
├── package.json
└── README.md
