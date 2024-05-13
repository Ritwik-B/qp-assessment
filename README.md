# QP Project

## Description

QP is a Node.js application that provides functionality for managing grocery items and creating orders. Users can book multiple grocery items in a single order. The application uses Express.js for the server, Sequelize for ORM, and PostgreSQL as the database. It is containerized using Docker.

## Features

- User authentication and authorization
- CRUD operations for grocery items
- Ability to place orders containing multiple grocery items
- Automatic inventory management

## Getting Started

### Prerequisites

- Node.js (>= 20.x)
- Docker
- Docker Compose

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Ritwik-B/qp-assessment.git
   cd qp-assessment
   ```

2. **Setup Docker containers:**

   ```bash
   docker-compose up --build
   ```

### API Endpoints

#### Users

- **Create User**

  ```http
  POST /api/users
  ```

  Request Body:

  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123",
    "role": "user"
  }
  ```

#### Grocery Items

- **List Grocery Items**

  ```http
  GET /api/grocery-items
  ```

- **Add Grocery Item**

  ```http
  POST /api/grocery-items
  ```

  Request Body:

  ```json
  {
    "name": "Apples",
    "price": 3.5,
    "inventory": 100
  }
  ```

- **Update Grocery Item**

  ```http
  PUT /api/grocery-items/:id
  ```

  Request Body:

  ```json
  {
    "name": "Bananas",
    "price": 1.2,
    "inventory": 150
  }
  ```

- **Delete Grocery Item**

  ```http
  DELETE /api/grocery-items/:id
  ```

#### Orders

- **Create Order**

  ```http
  POST /api/orders
  ```

  Request Body:

  ```json
  {
    "userId": 1,
    "items": [
      {
        "groceryItemId": 1,
        "quantity": 3
      },
      {
        "groceryItemId": 2,
        "quantity": 5
      }
    ]
  }
  ```

### Project Structure

```
qp/
├── src/
│   ├── controllers/
│   │   ├── groceryItem.controller.ts
│   │   ├── order.controller.ts
│   │   └── user.controller.ts
│   ├── models/
│   │   ├── groceryItem.model.ts
│   │   ├── order.model.ts
│   │   ├── orderItem.model.ts
│   │   └── user.model.ts
│   ├── routes/
│   │   ├── groceryItem.routes.ts
│   │   ├── order.routes.ts
│   │   └── user.routes.ts
│   ├── database/
│   │   └── postgres.database.ts
│   └── index.ts
├── migrations/
│   └── ...
├── seeders/
│   └── ...
├── package.json
├── tsconfig.json
├── Dockerfile
└── docker-compose.yml
```

### Scripts

- **`npm run build`**: Compile TypeScript to JavaScript.
- **`npm start`**: Start the application.
- **`npm run dev`**: Start the application with hot reloading using nodemon.
