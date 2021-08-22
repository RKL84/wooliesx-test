# Woolies X Technical Challenge

### Base URL

https://wooliesx-test.azurewebsites.net/api/answers

### Framework

- Node
- Express
- Jest
- Axios

### Plugins

- Babel 7.x

### Code quality control

- eslint
- prettier 

### Installation

```
git clone git@github.com:RKL84/wooliesx-test.git
cd ./wooliesx-test
npm build
npm start
```
 
### Exercise 1

https://wooliesx-test.azurewebsites.net/api/answers/user

```shell
curl -X POST \
  http://dev-wooliesx-recruitment.azurewebsites.net/api/Exercise/exercise1 \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
  "token": "7ef1bafc-66cb-4808-aec2-fe22c5199ce1",
  "url": "https://wooliesx-test.azurewebsites.net/api/answers"
}'
```

![image](https://user-images.githubusercontent.com/13943254/130344933-55830db9-c0b4-47b7-8753-5947e59e8c53.png)


### Exercise 2

https://wooliesx-test.azurewebsites.net/api/answers/sort?sortOption=low  
https://wooliesx-test.azurewebsites.net/api/answers/sort?sortOption=high  
https://wooliesx-test.azurewebsites.net/api/answers/sort?sortOption=ascending  
https://wooliesx-test.azurewebsites.net/api/answers/sort?sortOption=descending  
https://wooliesx-test.azurewebsites.net/api/answers/sort?sortOption=recommended 

```shell
curl -X POST \
  http://dev-wooliesx-recruitment.azurewebsites.net/api/Exercise/exercise2 \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
   "token":"7ef1bafc-66cb-4808-aec2-fe22c5199ce1",
   "url":"https://wooliesx-test.azurewebsites.net/api/answers"
}'
```

### Exercise 3

https://wooliesx-test.azurewebsites.net/api/answers/trolleyTotal 

```shell
curl -X POST \
  http://dev-wooliesx-recruitment.azurewebsites.net/api/Exercise/exercise3 \
  -H 'Accept: application/json' \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
   "token":"7ef1bafc-66cb-4808-aec2-fe22c5199ce1",
   "url":"https://wooliesx-test.azurewebsites.net/api/answers"
}'
```
