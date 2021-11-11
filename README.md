![banner](https://user-images.githubusercontent.com/70561117/141261420-be00e218-6c20-401c-802f-d1183dd9c786.png)

**Asauna** is a clone of **[Asana](https://www.asana.com/)** that allows a user create projects.
Projects are compromised of tasks composed by members of the group. Tasks have status' that reflect the 
state of the respective task. 

* Users can **log in** or **sign up** to access functionality the site.
* A user has the ability to **make projects** with both members and tasks.
* Posted tasks can be **completed** with their due date, status and assignee all changeable.
* The **profile page** hosts information about each user including their current projects and tasks.  


<p align="center">
<img src="https://user-images.githubusercontent.com/70561117/109456977-c77e3500-7a0e-11eb-9808-ea5c5db47d77.PNG">
</p>

<h2>Try the site live: <a href=https://asauna-react.herokuapp.com/>Here</a> <b>|</b> Check out our <a href="https://github.com/midigi/a_sauna/wiki">documentation</a></h2>

### To load the site locally ⬇️
#### You will need:
* PostgreSQL
* Pipenv with Python v3.8
* Node.js

1. `git clone` this repo
2. `cd` into the local repo
3. Run `pipenv install -r --dev dev-requirements.txt && pipenv install -r requirements.txt`
4. Create your own `.env` file based on the provided `.env.example`.
5. Create a user and database in your PostgreSQL that matches your `.env` configuration
6. In the first terminal, run `pipenv shell` to activate the Pipenv environment.
7. Run `flask db upgrade` and then `flask seed all` to apply migrations and seed data to your database.
8. Open another terminal window and `cd` into the local repo, then `cd` into `react-app`
9. Run `npm install`
10. In your terminal running Pipenv shell, run `flask run`.
11. In your terminal in the `react-app`, run `npm start`.
12. Your app should open in your default browser.

## Technologies used in Asauna
<p align="left">
<a href="https://flask.palletsprojects.com/en/1.1.x/">
<img src="https://img.shields.io/badge/Flask-v1.12-blue">
<a/>

<a href="https://www.sqlalchemy.org/">
<img src="https://img.shields.io/badge/SQLAlchemy-v1.3-blue">
<a/>
  
<a href="https://reactjs.org/">  
<img src="https://img.shields.io/badge/React-v17-blue">
<a/>
 
 <a href="https://www.docker.com/">  
<img src="https://img.shields.io/badge/Docker-v3-blue">
<a/>

<a href="https://www.heroku.com/">
<img src="https://img.shields.io/badge/Heroku-hosting-blue">
<a/>
</p>

## Developers

<img alt="Developer" align="right" src="https://user-images.githubusercontent.com/70561117/103400187-079d6600-4af9-11eb-8d20-00c8f88e3936.png" width="20%" />
<table style="width:100%">
  <tr>
    <th><a href="https://github.com/vantanova" rel="nofollow"><img src="https://avatars1.githubusercontent.com/u/70561117?s=460&u=85a68af6fc136866eb4f33ee657aeb751aba9935&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/midigi" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/16071042?s=460&u=55b7ede1bdfa6882cda2ffcbfb94e24d2b2050e8&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/IamDgrant" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/68237215?s=460&u=cd87edf80199467670d2b4e87fc13b1001245f7e&v=4" height="auto" width="100"></a></th>
    <th><a href="https://github.com/bparsons17" rel="nofollow"><img src="https://avatars.githubusercontent.com/u/67128124?s=460&v=4" height="auto" width="100"></a></th>
  </tr>
  <tr>
    <td>Antonio A.</td>
    <td>Michael D.</td>
    <td>Dre G.</td>
    <td>Brandon P.</td>
  </tr>
  <tr>
    <td><a href="https://github.com/vantanova">@vantanova</a></td>
    <td><a href="https://github.com/midigi">@midigi</a></td>
    <td><a href="https://github.com/IamDgrant">@IamDgrant</a></td>
    <td><a href="https://github.com/bparsons17">@bparsons17</a></td>
  </tr>
</table>

<p> <i>Thank you for reading our project README ❤️</i> </p>
