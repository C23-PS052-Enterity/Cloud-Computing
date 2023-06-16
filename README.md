
# Enterity API Documentation




## Environment Variables

To run this project, you will need to add the following environment variables then

Edit file `.env.example` and change it to `.env` make sure you fill all the required variables

## Getting Started

Clone the project

```bash
  git clone https://github.com/C23-PS052/Cloud-Computing.git
```



install dependencies

```bash
  npm install
```
then run this for the first time

```bash
  npm run db-start
```

after that run in mode development

```bash
  npm run start-dev
```



## API Reference

**Base URL:**
><https://enterity-api-4mdnt45fbq-et.a.run.app>/api/v1

#### Register user

```http
  POST https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nama_toko` | `string` | **Required**|
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|

#### Login User

```http
  POST https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**|
| `password`      | `string` | **Required**|


#### Get user by id

```http
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/user/:id
```

| Headers | Value   | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `Bearer` | **Required**|

#### Update user by id

```http
  PUT https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/user/:id
```

| Headers | Value   | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `Bearer` | **Required**|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nama_toko` | `string` | **Required**|
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|
| `profile_picture` | `file` | **Optional**|

#### Update user by id

```http
  PUT https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/user/:id
```

| Headers | Value   | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `Bearer` | **Required**|

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nama_toko` | `string` | **Required**|
| `email` | `string` | **Required**|
| `password` | `string` | **Required**|
| `profile_picture` | `file` | **Optional**|

## Infrastructure Design

![App Screenshot](https://i.imgur.com/uA0X8NM.png)

