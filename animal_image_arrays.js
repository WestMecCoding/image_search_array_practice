// Utilize pexels.com for images
// here is the url for animal searches: https://www.pexels.com/search/animals/

//
const animalImgDiv = document.getElementById("animal-images");
// random animal urls
const kittensURL1 =
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=800";
const elephantsURL1 =
  "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=800";
const giraffesURL1 =
  "https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800";
const bunniesURL1 =
  "https://images.pexels.com/photos/33152/european-rabbits-bunnies-grass-wildlife.jpg?auto=compress&cs=tinysrgb&w=800";
const tigersURL1 =
  "https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&w=800";
const cheetahsURL1 =
  "https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&w=800";
const animalImgURLs = [
  kittensURL1,
  elephantsURL1,
  giraffesURL1,
  bunniesURL1,
  tigersURL1,
  cheetahsURL1,
];

animalImgURLs.forEach((item, index) => {
  const animalIMG = document.createElement("img");
  animalIMG.src = item;
  animalIMG.alt = "cute animal picture" + (index + 1);
  animalIMG.title = "cute animal picture" + (index + 1);
  animalImgDiv.appendChild(animalIMG);
});
