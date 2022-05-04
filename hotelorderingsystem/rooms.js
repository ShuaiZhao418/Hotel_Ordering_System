function makeRoomsList() {
    const roomList = {};
    const rooms = {
        [1]: {
          id: 1,
          name: "Shahmeer's Executive Apartment Gulberg",
          city: "Seattle",
          imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat1.jpg",
          price: "80$",
          quantity: 1,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id convallis eros, nec ultrices arcu. Quisque ullamcorper sollicitudin accumsan. Duis ornare est tortor, ac placerat urna tincidunt at. Mauris libero metus, consectetur vitae enim ac, dignissim vulputate turpis. Vivamus dolor erat, sodales nec sagittis sit amet, maximus eu nibh. Vestibulum urna ipsum, gravida sed velit at, vestibulum volutpat felis. Vestibulum nisi enim, tempus quis faucibus rutrum, interdum lobortis ex. Aenean vel finibus urna.",
        },
        [2]: {
            id: 2,
            name: "Alnoor Luxury Apartments Lahore",
            city: "Seattle",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat2.jpg",
            price: "90$",
            quantity: 1,
            description: "Cras molestie erat tempor, maximus velit in, finibus augue. Nullam tristique suscipit velit ac facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque at ligula ut est viverra maximus at quis mi. Curabitur pulvinar elementum auctor. Quisque blandit sapien vitae augue sodales, vel tincidunt mauris luctus. Cras interdum tincidunt ipsum, at porta neque vestibulum quis. Etiam mattis, mauris non sagittis fringilla, dui purus tincidunt nisi.",
        },
        [3]: {
            id: 3,
            name: "Modern Bedroom Executive Cottage Lahore Home",
            city: "London",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat3.jpg",
            price: "100$",
            quantity: 1,
            description: "Proin eget nisi sit amet arcu venenatis semper. Etiam dictum feugiat sem, in tempor ante commodo at. In enim nulla, pharetra id pulvinar ac, accumsan sit amet velit. Ut at est a nunc elementum bibendum. Suspendisse vel volutpat nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur venenatis posuere rutrum. Curabitur augue augue, pretium at justo non, luctus ultricies ante. Praesent fermentum, magna ac aliquam tincidunt, turpis est sagittis sapien.",
        },
        [4]: {
            id: 4,
            name: "Home at Arfa Software Technology Park",
            city: "London",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat4.jpg",
            price: "130$",
            quantity: 1,
            description: "Etiam in metus viverra, rutrum turpis id, efficitur mauris. Curabitur porttitor ullamcorper est, id tristique lacus ultricies non. Nulla id eleifend risus, iaculis dapibus purus. Morbi et magna nec lorem semper dictum et ut lorem. Praesent tincidunt hendrerit urna aliquam bibendum. Praesent ultricies pretium risus, in molestie purus tincidunt in. Aenean eget erat odio. Donec eget elit augue. Donec interdum orci non metus tempor, non viverra est pulvinar. Aenean eu sem eu mauris egestas condimentum.",
        },
        [5]: {
            id: 5,
            name: "Royaute Luxury Suites - MM Alam Lahore",
            city: "New York",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat5.jpg",
            price: "70$",
            quantity: 1,
            description: "Cras viverra diam vel mi posuere accumsan. Quisque pharetra neque et ante venenatis commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sollicitudin odio sed ante faucibus, in facilisis nunc luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi turpis, rhoncus nec magna vitae, fringilla dapibus dui. Vivamus nec nunc interdum, blandit eros a, porttitor eros. Nulla ut ipsum sit amet magna fermentum posuere non sed libero.",
        },
        [6]: {
            id: 6,
            name: "3 Bedroom Family Apartment at Nehr pull",
            city: "New York",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat6.jpg",
            price: "90$",
            quantity: 1,
            description: "Phasellus vitae dictum justo, quis facilisis odio. Maecenas porta eleifend pretium. Curabitur sit amet massa hendrerit urna tincidunt auctor quis id neque. Cras ut elit tortor. Proin eget tempor nisl. Mauris placerat blandit cursus. Maecenas cursus rutrum dui vitae tempor. Donec sed diam sem.",
        },
        [7]: {
            id: 7,
            name: "Lahore Palace Hotel near Jhoolay Chaawal",
            city: "LA",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat7.jpg",
            price: "140$",
            quantity: 1,
            description: "Ut magna felis, dictum et mauris at, pretium congue justo. Phasellus urna leo, aliquet eget venenatis et, maximus eu massa. Donec ligula ipsum, efficitur sed facilisis ut, tristique sit amet massa. Vestibulum ac nibh vel turpis mollis ultricies a sed sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed mattis ante et nunc aliquet, et congue lectus pharetra. Sed dapibus eu lorem nec tincidunt. Praesent eget velit dictum, luctus mi ut, porta lorem.",
        },
        [8]: {
            id: 8,
            name: "1Bed Room Workstation near Beauty Parlour",
            city: "LA",
            imageUrl: "https://cdn.rawgit.com/abbassiddiqi/airbnb-api/4e6cff48/images/flat8.jpg",
            price: "120$",
            quantity: 1,
            description: "Nunc lacinia lectus non velit faucibus, ut ultricies nibh pretium. Sed elementum malesuada dolor sed pulvinar. Phasellus in facilisis massa. Sed id est quis est volutpat malesuada. Duis sollicitudin tellus a tellus tempor, a porta nulla feugiat. Nullam a massa in justo dictum mattis in a nulla. In elit erat, varius non volutpat id, pretium molestie risus. Cras non nulla a nunc imperdiet porttitor. Donec dapibus massa a est vehicula molestie.",
        },
    };


    // return all the rooms 
    roomList.getRooms = function getRooms() {
        return rooms;
    };

    // increase the room quantity 
    roomList.increaseRoomQuantity = function increaseRoomQuantity(id) {
        rooms[id].quantity = rooms[id].quantity + 1;
        return rooms[id].quantity;
    };

    // decrease the room quantity 
    roomList.decreaseRoomQuantity = function decreaseRoomQuantity(id) {
        rooms[id].quantity = rooms[id].quantity - 1;
        return rooms[id].quantity;
    };

    // return the room information by id
    roomList.getRoomById = function getRoomById(id) {
        return rooms[id];
    }

    return roomList;
};

module.exports = {
    makeRoomsList,
};