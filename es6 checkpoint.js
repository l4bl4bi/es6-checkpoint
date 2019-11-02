const pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
  ];
  
   const getAgepet = new Date().getFullYear() - pet.bornOn
  
  
  let petsWithAge = [];
  for ( i = 0; i < pets.length; i++) {
    const pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }
  console.log(petsWithAge);
  
  var dogs = []; 
  for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    if (pet.type === `dog`) {
      dogs.push(pet);
    }
  }
  console.log(dogs);
  
  let jasper;
  array.forEach(element => {
      
  }); (let = 0  < pets.length ++) 
    const pet = pets[i];
    if (pet.name === `Jasper`) {
      jasper = pet;
    }
  
  console.log(`Jasper is ` + jasper.age + ` years old`);
