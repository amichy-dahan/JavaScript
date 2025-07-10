const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log(`Audi should have ${garage.car1.liters} liters `);

garage.car2.fillTank(30);
console.log(`Mercedes should have ${garage.car2.liters} liters `);