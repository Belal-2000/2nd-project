## API Endpoints
#### Products
- Index -> /products [GET]
- Show -> /products/:id [GET]
- Create [token required] -> /products [POST]


#### Users
- Index [token required] -> /users [GET]
- Show [token required] -> /users/:id [GET]
- Create -> /users [POST]

# Important 
- I removed the [token required] from create method on users sinces its dosnt make sence as its the only way to get token and be [token required] route .

#### Orders
- Current Order by user (args: user id)[token required] -> /orders/:id [GET]


## Data Shapes
#### Product
-  id
- name
- price
- category

#### Product schema 

````
                                    Table "public.product"
  Column  |         Type          | Collation | Nullable |               Default
----------+-----------------------+-----------+----------+-------------------------------------
 id       | integer               |           | not null | nextval('product_id_seq'::regclass)
 name     | character varying(50) |           |          |
 price    | integer               |           |          |
 category | character varying(50) |           |          |
Indexes:
    "product_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "prods_in_order" CONSTRAINT "prods_in_order_product_id_fkey" FOREIGN KEY (product_id) REFERENCES product(id)
````

#### Users
- id
- firstName
- lastName
- password

#### Users schema 

```
                                     Table "public.users"
  Column   |         Type          | Collation | Nullable |              Default
-----------+-----------------------+-----------+----------+-----------------------------------
 id        | integer               |           | not null | nextval('users_id_seq'::regclass)
 firstname | character varying(50) |           |          |
 lastname  | character varying(50) |           |          |
 password  | text                  |           |          |
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "orders" CONSTRAINT "orders_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id)
```

#### Orders
- id
- user_id
- status of order (active or complete)

#### Orders schema 

```
                                    Table "public.orders"
 Column  |         Type          | Collation | Nullable |              Default
---------+-----------------------+-----------+----------+------------------------------------
 id      | integer               |           | not null | nextval('orders_id_seq'::regclass)
 user_id | integer               |           |          |
 status  | character varying(15) |           | not null |
Indexes:
    "orders_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "orders_user_id_fkey" FOREIGN KEY (user_id) REFERENCES users(id)
Referenced by:
    TABLE "prods_in_order" CONSTRAINT "prods_in_order_order_id_fkey" FOREIGN KEY (order_id) REFERENCES orders(id)
```


#### prods_in_order
- id
- product_id
- order_id
- quantity

#### prods_in_order schema
```
                              Table "public.prods_in_order"
   Column   |  Type   | Collation | Nullable |                  Default
------------+---------+-----------+----------+--------------------------------------------
 id         | integer |           | not null | nextval('prods_in_order_id_seq'::regclass)
 product_id | integer |           |          |
 order_id   | integer |           |          |
 quantity   | integer |           |          |
Indexes:
    "prods_in_order_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "prods_in_order_order_id_fkey" FOREIGN KEY (order_id) REFERENCES orders(id)
    "prods_in_order_product_id_fkey" FOREIGN KEY (product_id) REFERENCES product(id)
```