**Description of your website**

This web application is based on MERN stack and it has been designed as a tool for restaurants and the consumers to make deals entirely online online so that the consumers can have dish varieties without travelling. It is also quite helpful for elderly and disabled people and even more, this web application will be quite handy in the current scenario of Covid-19 pandemic. I have decided to start my project setting a target of a single restaurant and multiple restaurants as users can be incorporated later on in this application. So, basically, users will be able to do everything via this app that they need to do to order food items from the restaurant.

**Functionality / features**

The core features of this application are as below:

Frontend Features:

Admin: 

1. Can delete or update all posts and block a user in case of unsolicited behaviors.
2. Admin can post a new add about the food item (As I am starting with single restaurant, the restaurant owner will be the admin of this application).
3. Admin can block a user for unacceptable behaviors like abusive comments.

Non-Admin Users:

1. User authentication: Only the  homepage is accessible to guest users and any further links are active only for  a registered user. 

2. User can view the dishes with ingredients and the relevant prices.

3. User can order the dishes chosen

4. User can pay online and get the food items delivered.

5. User can make a comment on a post of food items.

   Backend Features:

   Backend incorporates all the features available at the front end or User Interface. An authorized programmer or the owner of the application can perform all the activities as an admin or a normal user.

   

**Target audience**

General people who like to have dishes from restaurants are the target audience as this application facilitates them to make online order through a restaurant. There is a facility of online payment as well. So, every people in the delivery range of the restaurant are the final users of this application. The significance of this application can be even more highlighted considering the need of social distancing in the fight against Covid-19 pandemic.



**Tech stack:**

MERN is a web application stack which incorporates all the files and features of this application. Just like any other web application, this project also  requires the coordination between various  technologies such as frameworks, databases, libraries and many more. So, at the backend, the application uses Mongo Database for data storage and Express for serving the requests and data.  It is a node.js based model and React will be implemented to facilitate User Interface. In terms of programming language, the application is coded in JavaScript.

- ####  MongoDB

- ####  Express

- ####  React

- ####  Node.js. 

These four components will be combined and coordinated together which will ultimately  provide an end-to-end web development framework that the  developers can stick to.  

#### MongoDB: 

It is a non-relational document-oriented database capable of performing in cross-platform environments. I have preferred MongoDB because it is quite simple and flexible compared to the conventional relational databases (schema based) which are  indeed based upon tables and columns, MongoDB is a schema-less database. The JSON documents stores data for MongoDB..



#### Express: 

In this project, Express will act as a server side web application framework for Node.js and drastically eases the tasks at the server side.  Express  avoids the necessity to write code for web server manually on Node.js directly. Express, Well known for performance speed and least structural complexity, does the following tasks: 

1. Eliminate the code repetition unlike in HTTP module. 
2. Along with many plugins features, Express framework can specifically be used in the design of large web applications and APIs.



#### React: 

React will facilitate the front end requirements in this application which is a open-source JavaScript library  implemented to design user interfaces and is operated and maintained by Facebook and a software committee  and companies of developers. The React automatically creates  HTML rendered view.  React views are  declarative and it well eliminates most of the problems  regarding the  effects of modification in view’s state  or  data.

React  is capable of building  repetitive as well as conditional DOM elements. React allows both the browser and server to access and run the same code  simultaneously. 



#### Node.js: 

This application is based on node.js platform because it makes the application light-weight and efficient. In this application design, node.js will be implemented to  construct  expansible network applications that is capable to run java script code outside a browser too. It provides a cross-platform run environment for JavaScript. 
Node.js possesses  its own CommonJS module based system to bind several JavaScript files instead of enclosing HTML page(Hyperion Development, 2018).

**Source:** 

T3A1 workbook, submitted to Coder-Academy by myself (AmritKhanal_T3A1)

**Hyperion Development (2018). HyperionDev Blog. [online] HyperionDev Blog**, *date og retrieval 24 April 2020*, https://blog.hyperiondev.com/index.php/2018/09/10/everything-need-know-mern-stack





**Purpose:**

This application is being designed for online booking, payment and delivery of dishes from a restaurant. So, the main purpose of this application is to act as a bridge between the customers and the restaurant. So, this application eliminates the need to travel to a restaurant and have a dish over there and grab a take away. So, this application is quite useful to save the time of consumers and it will also help the restaurant keep their business alive specially in this pandemic.

**User Stories:**

1. As a guest user, I would like to see the homepage and all the posts of food items. 
2. As a registered user, I would like to view the posts of dishes as well as the view of an individual post of dish.
3. Being  a registered user, I would like to make an online order, pay online and get my favorite dish delivered to my home/office.
4. As an admin, I will definitely post a new dish whenever my restaurant add it (the new dish) to its menu, edit any post and delete too.
5. As an Admin, I want to have a full control over the application and I should be capable delete comments and block abusive users.

**Dataflow Diagram of the application:**
![alt DFDimage](./pics/DFD.png?raw=true)



### **Architecture of the application**

![alt app actect](./pics/arch.png?raw=true)