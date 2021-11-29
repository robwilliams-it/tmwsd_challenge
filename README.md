# This message will self-destruct

A NodeJS programming challenge.

The goal here is to create a simple web application that allows someone to create a message, view that message at a unique URL, and destroy the message upon viewing it. Just like the title states, this message will self-destruct!

## Step 1: Installation

Fork this repository, clone it, install dependencies, and run it.

``` bash
git clone {{your_fork_url_here}}
npm install
node app.js
```

## Step 2: Complete the Requirements

Complete the following requirements by using any database engine of your choice. Update this readme by checking the following boxes as you go.

- [x] As a user, I should see a form to create a new message on the homepage.
- [x] As a user, I should see a list of links for all created messages below the 'new message' form on the homepage.
- [x] As a user, when I click a link in the message list, I should be able to view the message at a unique URL.
- [x] As a user, when I open a message, the message should self-destruct (delete from the database).
- [x] As a user, I should no longer see messages on the homepage that have been viewed.

Bonus points for making it look pretty :sparkles:

## Step 3: Submit

Email me when you're done with a link to your fork.

## DB Setup

### Install
Download PostgreSQL app from the below link

Postgres.app with PostgreSQL 14 (Universal)
https://postgresapp.com/downloads.html

Install the file and move into applications

Open the application and click on the button under the elephant that says "Initialize"

Postgres is now ready to be used


### User Setup

Open your terminal and enter the below to enter into postgresql
``` bash
psql
```

To create the test user for this simple app copy and paste the below into your terminal
``` bash
CREATE USER test WITH SUPERUSER;
```

To exit postgresql hold the control key and press the d key

### Clone this repo

Open your terminal and migrate to the folder you wish to download this repo to

Run the below line to clone the repo to your computer

``` bash
git clone https://github.com/robwilliams-it/tmwsd_challenge.git
```

### Run the Schema

Open your terminal and migrate to the "database" folder within your copy of this project

Run the below command in your terminal
``` bash
psql < messages.schema
```

### Test AwAy !

Open your termnial and migrate to the tmwsd_challenge folder

Run the below command
``` bash
npm install
node app.js
```

In your browser open the below address
http://localhost:3000/

### Delete User After Test

Open your terminal and enter the below to enter into postgresql
``` bash
psql
```

Copy and paste the below into your terminal

``` bash
DROP USER test;
```

To exit postgresql hold the control key and press the d key
