# corageo.github.io

## Run it

```bash
# From the /server directory
$ DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/gotutorial?sslmode=disable go run main.go
# From the /client directory
$ yarn start
```

## Deploying to Heroku

```bash
# Add and commit all of our changes, then push.
$ git add . 
$ git commit -m '...'
$ git push

# In a new terminal tail the container logs
$ heroku logs --tail
```
## Docker build

```bash
$ docker build -t golang-heroku .
$ docker run -p 3000:8080 -d golang-heroku
```

