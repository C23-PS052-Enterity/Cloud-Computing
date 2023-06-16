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

> <https://enterity-api-4mdnt45fbq-et.a.run.app>/api/v1

#### Register user

```bash
  POST https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/register
```

| Parameter   | Type     | Description  |
| :---------- | :------- | :----------- |
| `nama_toko` | `string` | **Required** |
| `email`     | `string` | **Required** |
| `password`  | `string` | **Required** |

#### Login User

```bash
  POST https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/login
```

| Parameter  | Type     | Description  |
| :--------- | :------- | :----------- |
| `email`    | `string` | **Required** |
| `password` | `string` | **Required** |

#### Get user by id

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/user/:id
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Update user by id

```bash
  PUT https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/user/:id
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

| Parameter         | Type     | Description  |
| :---------------- | :------- | :----------- |
| `nama_toko`       | `string` | **Required** |
| `email`           | `string` | **Required** |
| `password`        | `string` | **Required** |
| `profile_picture` | `file`   | **Optional** |

#### Get All Platform

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/platforms
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get All Products

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/products
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get total Pendapatan

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/products/revenues
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get Product include with channel

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/products/list
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get total unit terjual

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/products/unitsold
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get All customers

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/customers
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get All customers

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/customers
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get amount customer

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/customers/count
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get amount transaction

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/transactions/count
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get Customer with Channel

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/customers/list
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

#### Get data input

```bash
  GET https://enterity-api-4mdnt45fbq-et.a.run.app/api/v1/datainput
```

| Headers         | Value    | Description  |
| :-------------- | :------- | :----------- |
| `Authorization` | `Bearer` | **Required** |

## Infrastructure Design

![App Screenshot](https://i.imgur.com/uA0X8NM.png)
