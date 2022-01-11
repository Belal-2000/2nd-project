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


