# Server API Documentation

This document provides an overview of the major routes available in the server API.

## Users Routes

### GET /api/v1/user/get-all-users

- Description: Retrieves all users.
- Handler: `getAllUsers`

## Orders Routes

### POST /api/v1/order/new-order/:order-by

- Description: Creates a new order.
- Parameters:
  - `order-by`: User ID of the order creator.
- Handler: `newOrder`

### GET /api/v1/order/get-all-order/:user-id

- Description: Retrieves all orders for a specific user.
- Parameters:
  - `user-id`: User ID for which orders are retrieved.
- Handler: `getMyOrders`

## Courses Routes

### POST /api/v1/course/create-course/:createdBy

- Description: Creates a new course.
- Parameters:
  - `createdBy`: User ID of the course creator.
- Body:
  - `title`: Title of the course.
  - `description`: Description of the course.
  - `duration`: Duration of the course.
  - `topics`: Topics covered in the course.
  - `tags`: Tags associated with the course.
  - `thumbnail`: Thumbnail image for the course (multipart form-data).
  - `videoLink`: Link to the course video.
- Handler: `createCourse`

### GET /api/v1/course/get-all-course/:userId

- Description: Retrieves all courses except those created by the specified user.
- Parameters:
  - `userId`: User ID for which courses are retrieved.
- Handler: `getAllCourses`
