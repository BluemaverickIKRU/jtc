const readLine = require('readline-sync');

// Class for Menu
class Menu {
  constructor() {
    this.menu = [
      {
        name: 'Espresso',
        price: { milk: 60, cream: 75, latte: 100 },
      },
      {
        name: 'Cappuccino',
        price: { milk: 80, cream: 90, latte: 125 },
      },
      {
        name: 'Latte',
        price: { milk: 100, cream: 125, latter: 150 },
      },
    ];
    this.addOns = ['Milk', 'Cream', 'Latte'];
  }
}

// Class for User
class User {
  constructor() {
    this.order = [];
    this.total = 0;
    this.currentOrderName = '';
    this.currentAddOns = [];
  }

  getOrder() {
    console.log();
    console.log('----------Bill/Reciept----------');
    this.order.forEach((i, j) => {
      console.log(`Order name : ${i.name[0].toUpperCase() + i.name.slice(1)}`);
      console.log('Add-On : ');
      i.addOns.forEach((i) => {
        console.log(`${Object.keys(i)} -> ${Object.values(i)}`);
      });
      console.log();
    });
    console.log(`Total amount : $${user.total}`);
    console.log();
  }
}

const menuCard = new Menu();
const user = new User();

const getAddOns = () => {
  while (true) {
    console.log(`Please Select your Add on's`);
    menuCard.addOns.forEach((i, j) => {
      console.log(`${j + 1}) ${i}`);
    });
    console.log(`Want to order more? Type 'More'`);
    console.log(`5) Procced to checkout? Type 'Checkout'`);
    const addOns = readLine.question('Choose your add on :').toLowerCase();
    if (addOns === 'checkout') {
      const priceMenu = menuCard.menu.filter(
        (i) => i.name.toLowerCase() === user.currentOrderName
      );
      for (let i in priceMenu[0].price) {
        let count = 0;
        user.currentAddOns.forEach((j) => {
          if (j === i) {
            count++;
            user.total += priceMenu[0].price[i];
          }
        });
        if (count !== 0) {
          if (i === 'milk') {
            user.order[user.order.length - 1].addOns.push({
              Milk: count,
            });
          } else if (i === 'cream') {
            user.order[user.order.length - 1].addOns.push({
              Cream: count,
            });
          } else if (i === 'latte') {
            user.order[user.order.length - 1].addOns.push({
              Latte: count,
            });
          }
        }
      }
      break;
    } else if (addOns === 'milk') {
      user.currentAddOns.push('milk');
    } else if (addOns === 'cream') {
      user.currentAddOns.push('cream');
    } else if (addOns === 'latte') {
      user.currentAddOns.push('latte');
    } else {
      console.log(`Please choose the item on the menu !`);
    }
  }
};

// App starts here

console.log('-----Welcome to Coffee Shop-----');
while (true) {
  console.log('Please select your order !');
  menuCard.menu.forEach((i, j) => {
    console.log(`${j + 1}) ${i.name}`);
  });
  console.log(`4) No more order? Press 'Q' to exit !`);
  const orderName = readLine.question('Enter your order : ').toLowerCase();
  if (orderName === 'q') {
    user.getOrder();
    console.log('Thank you for choosing us !');
    break;
  } else if (orderName === 'espresso') {
    user.currentOrderName = orderName;
    user.order.push({ name: orderName, addOns: [] });
    getAddOns();
  } else if (orderName === 'cappuccino') {
    user.currentOrderName = orderName;
    user.order.push({ name: orderName, addOns: [] });
    getAddOns();
  } else if (orderName === 'latte') {
    user.currentOrderName = orderName;
    user.order.push({ name: orderName, addOns: [] });
    getAddOns();
  } else {
    console.log(`Please choose the options only from above !`);
  }
  user.currentAddOns = [];
}
