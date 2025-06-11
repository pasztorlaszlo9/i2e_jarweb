const cars = [
  {
    id: 1,
    plate: 'ABC123',
    name: 'Ford',
    model: 'Mustang',
    year: 2022
  },
  {
    id: 2,
    plate: 'DEF456',
    name: 'BMW',
    model: 'X5',
    year: 2021
  },
  {
    id: 3,
    plate: 'GHI789',
    name: 'Toyota',
    model: 'Camry',
    year: 2020
  },
  {
    id: 4,
    plate: 'JKL012',
    name: 'Honda',
    model: 'Civic',
    year: 2019
  },
  {
    id: 5,
    plate: 'MNO345',
    name: 'Nissan',
    model: 'Altima',
    year: 2018
  },
  {
    id: 6,
    plate: 'PQR678',
    name: 'Chevrolet',
    model: 'Malibu',
    year: 2017
  },
  {
    id: 7,
    plate: 'STU901',
    name: 'Hyundai',
    model: 'Elantra',
    year: 2016
  },
  {
    id: 8,
    plate: 'VWX234',
    name: 'Kia',
    model: 'Optima',
    year: 2015
  },
  {
    id: 9,
    plate: 'YZA567',
    name: 'Volkswagen',
    model: 'Passat',
    year: 2014
  }
]

const genTemplate = (car) => {
  return `
    <div class="card m-2" style="width: 18rem;">
    <div class="card-body">
      <h1>${car.plate}</h1>
      <p>Rendszám: ${car.id}</p>
      <p>Márka: ${car.name}</p>
      <p>Modell: ${car.model}</p>
      <p>Évjárat: ${car.year}</p>
    </div>
  </div>  
  `
}

const carsDiv = document.querySelector('#cars')
  
cars.forEach(car => {
  console.log(car.name)
  // AI által generált kód
  // const carDiv = document.createElement('div')
  // carDiv.innerHTML = template(car)
  // carsDiv.appendChild(carDiv)
  carsDiv.innerHTML += genTemplate(car)
})
