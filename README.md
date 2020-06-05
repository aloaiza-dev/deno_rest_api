# DENO REST API
Simple REST API example using Deno

This is a simple project explaining basic use of Deno to create a REST API to manage Products. To start the server just run:

```
denon start
```

### Routes ###

```
GET     /api/v1/products
GET     /api/v1/products/:id
POST    /api/v1/products
PUT     /api/v1/products/:id
DELETE  /api/v1/products/:id
```

### Third-Party Modules used ###

<https://deno.land/x/denon>

<https://deno.land/x/oak>

<https://deno.land/x/postgres>
