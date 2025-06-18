# hapi-mysql-api

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Hapi.js](https://img.shields.io/badge/Hapi.js-Server-orange?logo=hapi)](https://hapi.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-blue?logo=mysql)](https://www.mysql.com/)
[![Node.js](https://img.shields.io/badge/Node.js-JS-green?logo=node.js)](https://nodejs.org/)

A simple and opinionated RESTful API starter built with [Hapi.js](https://hapi.dev/) and [MySQL](https://www.mysql.com/). This project provides a clean foundation for building scalable APIs, making it ideal for learning or as a base for your own applications.

---

## ✨ Key Features

- **Hapi.js HTTP server** with organized, modular route structure
- **MySQL connection pooling** using `mysql2` for efficient database access
- **CRUD endpoints**: Easily extendable `GET`, `POST`, `PUT`, and `DELETE` operations
- **Environment-based configuration** for flexible deployments
- **Extensible architecture**: Add validation, JWT authentication, and custom error handling as needed

---

## 🚀 Getting Started

### Clone and Install

```bash
git clone https://github.com/Ronyzs/hapi-mysql-api.git
cd hapi-mysql-api
npm install
```

---

### Environment Setup

Copy the example environment file and update it with your configuration:

```bash
cp .env.example .env
```

### Run the Project

Start the development server:

```bash
npm run dev
```

The API will be available at [http://localhost:3000](http://localhost:3000) by default.
