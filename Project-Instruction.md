# Hotel Ordering System

- Project Introduction:
    - This is a Hotel Ordersing System which can help me order hotels according to their tarvel requirement. 
    - Techs in this project:
        - Back-end: Express, node.js
        - Front-end: React
    - Functions in this project:
        - Register user account, Login and Logout.
        - Search hotels according to city, time.
        - Order hotels and cancel orders.
        - Check personal orders.
        - Recommand hotels

- Run this project:
    - 1. Can be tested by running npm install and
        - running npm start to start the services server
        - running (in a separate terminal) npm dev to start the dev server
        - visiting http://localhost:3000 in the browser
    - 2. Can be tested by 
        - running npm run build to create the static files in build/
        - running npm start to start the server
        - visiting http://localhost:4000 in the browser

- How to use this system?
    - 1. You can input an username to login. You can also logout the website.
    - 2. At Search -> Search Hotel, you can search hotel by input the city, move in date and move out date.
    - 3. When it searches, it will appear the available hotels. Have a order for the hotel you like.
    - 4. Then, at Home -> My Orders, you can see the orders you have made, or you can cancel the orders.
    - 5. At Home -> My Information, it shows some basic user info.
    - 6. At About -> About Website, it shows the introduction for the website.
    - 7. At Privacy -> Privacy Doc, it shows a fake privacy policy about this website.

## Front-end

- The component structure paragraph is shown at "student--ShuaiZhao418/final/Frontend_files_framework.png"

- A SPA website which has 9 views.
    - 1. "Login" view.
        - In "login" view, it will use UseEffect to call "fetchSession()" to check the session, If it already has a session, we will directly load the "Show" view. Otherwise, it will show a input and require the username input.
        - When we click the "login" button, it will call "fetchLogin()" function to check the username input. If it is empty or 'dog', it will show the Error message. Otherwise, it will store a session and get the authorization to "Show" view.
    - 2. "Show" view
        - In "Show" view, it has a title, a navigation and a body. The body will change according to the navigation choice. 
        - At bottom-right of the title, it has a message and button. The message shows "Welcome" + username. The button is a logout button. When it is click, it will call "fetchLogout()" function to delete the session. 
    - 3. "Search" view.
        - In "Search" view, it has 3 input fields. A select and two date type input. It requires user user to select a city and a move in date and a move out date, then when we click the "Search" button, we will call "fetchAddOrder()" to search available hotels. 
        - To simply the search, we only take the selected city input as our search requirement.
    - 4. "Search Result" view.
        - We show the available hotels and their detailed information, including name, city, price, description. 
        - It has a "Search Again" button, which allows users to return the search interface
        and make another search.
        - It has a "order" button for each hotel. When we click it. It will add the hotel id to the user's list. Then, the available quantity of the hotel decrease one. When the available quantity of the hotel is zero, the order button will be disabled, other users can not order it until other user cancel the order.
    - 5. "Recommand" view.
        - In "Recommand" view, it use UseEffect to call "fetchRooms()" to get all the hotel's information.
        - It show all available hotels with a "card" component, which give some recommandations to users.
    - 6. "Orders" view.
        - In "Orders" view, it use UseEffect to call "fetchSession()" to check authorization and call "fetchOrders()" to get all the orders information of the user.
        - It shows the order information with an "accordion" component, which only shows the order information of selected one.
        - It has a "Cancel" button, which is used to cancel current order. When it is clicked, it will call "fetchDeleleOrder()" function. It will delete the hotel from the user's order list. Then it will increase one quantity to the hotel.
    - 7. "Information" view.
        - It shows some fake personal information.
    - 8. "About" view.
        - In "About" view, it uses a "tabs" component to show topic and function introduction of the website. 
    - 9. "Privacy" view.
        - In "Privacy" view, it shows a fake privacy policy for this website.
    - 10


## Back-end

- 8 RESTful API
    - Sessions
        - get('/api/session'), check if a session exists
            - Get sid from cookies, check the session by sid.
        - post('/api/session'), add a new session
            - Check the username is '' or 'dog', if yes, return false.
            - Set a new session with username.
            - Create a new orderlist for the user.
            - Init again the roomlist.
        - delete('/api/session'), delete a user from session, but we still keep the orderlist for the same person, so when it login again, it can still get its orders.
    - Hotels/Rooms
        - get('/api/room'), get all room information
        - get('/api/rooms/roomsByCity/:city'), get all the room information which are in the given city
            - We do a for loop to get rooms which are in the given city and store it to a new list to return.
    - Orders
        - get('/api/orders'), get user's orderlist
        - delete('/api/orders/:id'), delete a room id from user's order list
            - Delete the hotel from the user's list with the given id.
            - Increase one to the quantity of the room with the given id.
        - post('/api/orders'), add a room id to user's order list 
            - Add the hotel to the user's list with the given id.
            - Decrease one to the quantity of the room with the given id.

- 4 Data Storage files
    - session.js for storing the user session with format uuid to username
    - functions:
        - addSession(username), store a session with a new uuid and the given username.
        - getSessionUser(sid), get a username from session with uuid.
        - deleteSession(sid), delete the session for the given uuid.     

    - users.js and orders.js for storing with format user to orders 
    - functions for users.js
        - getUserData(username), get user's orders.
        - addUserData(username, userData), add a orderlist to the user.
    - functions for orders.js
        - getOrders(), get all the orders of the user.
        - addOrder(id), add the hotel's id to the user's order list.
        - contains(id), check if the hotel id exists in the user's order list.
        - deleteOrder(id), delete the hotel id from the user's order list.    

    - rooms.js is for storing all available hotels
    - functions for rooms.js
        - we have init the hotels informations in rooms.js
        - getRooms(), get all the hotels' information.
        - increaseRoomQuantity(id), increase one to the quantity of the hotel with the give id.
        - decreaseRoomQuantity(id), decrease one to the quantity of the hotel with the give id.
        - getRoomById(id), return the hotel information with the given id.


## License
- All the hotel photo are from a open source project: https://github.com/abbassiddiqi/airbnb-api/tree/master/images.
- The search-background photo are from my own.
