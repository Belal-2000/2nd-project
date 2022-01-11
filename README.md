# Initial commands

### Must do the following in order to use the app 

##### Using psql : 

###### First connect to psql then ...

- Create user with command : 
``` CREATE USER fullStack WITH PASSWORD 'password123'; ```

- Create database and the testing one with : 
``` CREATE DATABASE shopping; ``` 
``` CREATE DATABASE shopping_test; ``` 


- Give psql user accsses to make migrations on database with : 
``` GRANT ALL PRIVILEGES ON DATABASE shopping TO fullStack; ```
``` GRANT ALL PRIVILEGES ON DATABASE shopping_test TO fullStack; ```




## Important commands

- To install all dependences run :

``` npm install ```

- To run the watch command run :

``` npm run watch ```

- To run tests run :

``` npm run test ```

- To compile to js run :

``` npm run build ```


---------------------------------------------

### important 

- Database port 'db_port': 5432
- Database host 'host': localhost
- Database name is 'db_name': shopping
- Database for test is 'db_name_test': shopping_test
- 'db_user' = fullstack
- 'password' = password123
- 'SALT_ROUNDS' must be positive integer 
- 'BB' can be whatever you want EX: mySecretBB
- 'TOKEN_SEKRET' can be whatever you want EX: cantKnowMe
- App will run on port 'db_port' 3000
- For EndPoints read the REQUIREMENTS.md file


### To use any endPoint that require a token :
- must pass the token that created when crate a new user in authorization header like :

```

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1OCwiZmlyc3RuYW1lIjoibXJCIiwibGFzdG5hbWUiOiJhd3NvbWVlIiwicGFzc3dvcmQiOiIkMmIkMTAkQm9MZi5hcVJKVDNKNS5HOVRmQ3ZLdVJ3dG9KaVM0NVN0LzIuSk9JWGFIaFFyYTQuSS5ZNHkifSwiaWF0IjoxNjQxNzc1OTg5fQ.khdCXEznepIcAG0TXpJc_vfh7x9XQgwuFUKTp7u0cB4

```

- Write Bearer + space then but your token .

---------------------------------------------


##### Must update the example.env file with data mentioned before and create .env file insted of it.

