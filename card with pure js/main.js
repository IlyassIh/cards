let names = ['ilyass', 'bossorty', 'amine', 'mouad', 'zouhaire', 'tassano', 'marwa', 'achraf'];
let ages = [21, 23, 21, 21, 19, 19, 19, 20];

let card = (names, ages, index) => {
  let container = document.createElement('div');
  container.setAttribute('id', '${index}');
  document.body.appendChild(container);
  
  let title = document.createElement('h2');
  let age = document.createElement('p');
  let img = document.createElement('img');
  img.setAttribute('src', 'image.jpg');
  img.setAttribute('alt', 'vetop');
  img.setAttribute('id', `${index}`); 
  
  let titleValue = document.createTextNode(names);
  let ageValue = document.createTextNode(ages);

  title.appendChild(titleValue);
  age.appendChild(ageValue);

  container.appendChild(title);
  container.appendChild(age);
  container.appendChild(img);

  container.style.textAlign = 'center';
  container.style.display = 'inline-block';
  container.style.margin = '10px'
  container.style.width = '200px';
  container.style.backgroundColor = '#333';
  container.style.color = '#fff';
  img.style.width = '100%';
  img.style.height = '309.97px';
}

for(let i = 0; i < 8; i++){
  card(names[i], ages[i], i);
}

document.getElementById('2').setAttribute('src', 'f1.jpeg');

