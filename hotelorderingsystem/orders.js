function makeOrderList() {
    const orderList = {};
    const orders = {};

    orderList.getOrders = function getOrders() {
        return orders;
    };

    orderList.addOrder = function addOrder(id) {
        orders[id] = {
            id,
        };
    };

    orderList.contains = function contains(id) {
        // This !! syntax coerces the value to a boolean
        // First by giving us the reverse of the truthy/falsy value,
        // then by reversing it to true/false
        return !!orders[id];
      };

    orderList.deleteOrder = function deleteOrder(id) {
        delete orders[id];
    };

    return orderList;
};

module.exports = {
    makeOrderList,
};