function makeGreen() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

function challenge9() {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
  const p = document.querySelector('p');
  p.addEventListener('click', makeGreen);

  // Regular
  console.log('Hello');

  // Interpolated
  console.log('Hello I am a %s string!', '💩');

  // Styled
  console.log('%cI am some great text', 'font-size: 50px; background: red; color: white;');

  // warning!
  console.warn('OH NOOO!');

  // Error :|
  console.error('Shit!');

  // Info
  console.info('Crocodiles eat 3-4 people per year');

  // Testing
  console.assert(p.classList.contains('ouch'), 'That is wrong!');

  // clearing
  // console.clear();

  // Viewing DOM Elements
  console.log(p);
  console.dir(p);

  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
  });

  // counting
  console.count('Wes');
  console.count('Wes');
  console.count('Steve');
  console.count('Steve');
  console.count('Wes');
  console.count('Steve');
  console.count('Wes');
  console.count('Steve');

  // timing
  console.time('fetching data');
  // some stuff
  console.timeEnd('fetching data');

  // table
  console.table(dogs);
}

export { challenge9 }
