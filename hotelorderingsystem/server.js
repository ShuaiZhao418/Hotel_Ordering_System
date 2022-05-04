const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

const orders = require('./orders');
const rooms = require('./rooms');

const sessions = require('./sessions');
const users = require('./users');

app.use(cookieParser());
app.use(express.static('./build'));
app.use(express.json());

let roomList = rooms.makeRoomsList();

// --------------------- Sessions -------------------------
app.get('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

app.post('/api/session', (req, res) => {
  const { username } = req.body;
  if(!username) {
    res.status(400).json({ error: 'require username' });
    return;
  }
  if(username === 'dog') {
    res.status(403).json({ error: 'dog is invalid' });
    return;
  }
  const regex = "^[0-9a-zA-Z]{1,}$";
  if (!username.match(regex)) {
    res.status(403).json({ error: 'username can only contain numbers, lowercase and uppercase letters.' });
    return;
  }
  const sid = sessions.addSession(username);
  const existingUserData = users.getUserData(username);
  if(!existingUserData) {
    users.addUserData(username, orders.makeOrderList());
  }
  res.cookie('sid', sid);
  // when we login, we reset the rooms
  res.json(users.getUserData(username).getOrders());
});

app.delete('/api/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(sid) {
    res.clearCookie('sid');
  }
  if(username) {
    // Delete the session, but not the user data
    sessions.deleteSession(sid);
  }
  // We don't report any error if sid or session didn't exist
  // Because that means we already have what we want
  res.json({ username });
});

// --------------------- Rooms -------------------------
app.get('/api/room', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json(roomList.getRooms());
});

// get all the rooms which in the given city
app.get('/api/rooms/roomsByCity/:city', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const city = req.params.city;
  const allRooms = roomList.getRooms();
  const roomByCity = {}
  for (var i in allRooms) {
    if (allRooms[i].city === city) {
      roomByCity[i] = allRooms[i];
    }
  }
  res.json(roomByCity);
});

// --------------------- Orders -------------------------
app.get('/api/orders', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const orderIds = users.getUserData(username).getOrders();
  const allRooms = roomList.getRooms();
  const allOrders = {};
  for (var i in allRooms) {
    for (var j in orderIds) {
      if (i === j) {
        allOrders[i] = allRooms[i];
      }
    }
  }
  res.json(allOrders);
});

app.delete('/api/orders/:id', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  // 1. delete the order from the user
  const { id } = req.params;
  const orderList = users.getUserData(username);
  const exists = orderList.contains(id);
  if(exists) {
    orderList.deleteOrder(id);
  }
  // 2. add 1 quantity of the room
  roomList.increaseRoomQuantity(id);
  res.json({ message: exists ? `order ${id} deleted` : `order ${id} did not exist` });
});

app.post('/api/orders', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if(!sid || !username) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const {roomId} = req.body;
  if(!roomId) {
    res.status(400).json({ error: 'required-roomId' });
    return;
  }
  // 1. add room id to the people
  const orderList = users.getUserData(username);
  orderList.addOrder(roomId);
  // 2. decrease 1 of the quantity of the room
  roomList.decreaseRoomQuantity(roomId);
  res.json(orderList.getOrders());
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

