## TodoList

[todolist.png](https://postimg.cc/G4GThL2m)

# Getting Started
node js installieren (aktuellste version)

# Frontend:
Mit "npm install" Packages installieren <br />
Mit "npm start" starten

# Backend:
This repository provides the small backend service for working in the React bootcamp.

## install and start
To start all required packages, please run `npm install`. For starting the server run `npm run bAS`.
When successfully started, the server runs on [http://localhost:8080/](http://localhost:8080/)

## Task

In dieser Testaufgabe muss man sich mit dem Backend (das schon da ist) verbinden. <br />
Zwei Inputfelder und einen Button für Absenden der Daten erstellen. <br />
Mit einem POST-Request (muss implementiert werden) werden die Daten aus den Inputs als Parameters "name" und "description" ans Backend geschickt. <br />
Nach dem POST-Request müssen die Daten "refetcht" werden. <br />
Mit GET-Request (welches schon implementiert ist) muss man dann die Daten abholen und auf der Website anzeigen. <br />

URL: "/api/todoList/"

Verwendet dabei: React Query (useQuery, useMutation)

## React-Query Docs
https://react-query-v3.tanstack.com/overview
