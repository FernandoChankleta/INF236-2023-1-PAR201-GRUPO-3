# INF236-2023-1-PAR201-GRUPO-3

Este es el repositorio del *Grupo 3*, cuyos integrantes son:

* Pedro Arce - 202056597-k
* Fabian Miranda - 202030515-3 
* Fernando Carrasco - 202030542-0

## Wiki

Puede acceder a la wiki mediante el siguiente [enlace](https://github.com/FernandoChankleta/INF236-2023-1-PAR201-GRUPO-3/wiki)

## Videos

* [Video presentación cliente](https://youtu.be/NN5byxZM8Fc)
* [Video Hito 4](https://youtu.be/KTj7mqmAHOg)
* [Video Hito 6 y 7](https://youtu.be/pdsTK7chq9w)

## Aspectos técnicos relevantes


# MERN-base-proyect
Mern Stack code for the [Mern Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)

## prerequisites
- Install node.js ([Node](https://nodejs.org/en/))
- Install Code editor ([VS code](https://code.visualstudio.com/))
- Create Atlas cluster ([Get started with Atlas](https://www.mongodb.com/docs/atlas/getting-started/?_ga=2.60427181.186721350.1682018286-1256642793.1682018286))

> Disclaimer: The React application works with Node.js 16 and below.
## How To Run
Create an Atlas URI connection parameter in `server/config.env` with your Atlas URI (get it from your own created cluster), should look like this:
```
ATLAS_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
PORT=5000
```

Start server:
```
cd mern/server
npm install
npm start
```

Start Web server
```
cd mern/client
npm install
npm start
```
