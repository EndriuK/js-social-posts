// Array di oggetti che rappresentano i post
const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

// Array per salvare gli ID dei post a cui è stato messo "Mi Piace"
const likedPosts = [];

// Funzione per creare un elemento post
function createPost({ id, content, media, author, likes, created }) {
  const postElement = document.createElement("div");
  postElement.className = "post";

  // Inserisco l'HTML del post
  postElement.innerHTML = `
  <div class="post__header">
      <div class="post-meta">                    
          <div class="post-meta__icon">
              ${
                author.image
                  ? `<img class="profile-pic" src="${author.image}" alt="${author.name}">`
                  : `<div class="profile-pic-default"><span>${author.name[0]}</span></div>`
              }
          </div>
          <div class="post-meta__data">
              <div class="post-meta__author">${author.name}</div>
              <div class="post-meta__time">${new Date(
                created
              ).toLocaleDateString()}</div>
          </div>                    
      </div>
  </div>
  <div class="post__text">${content}</div>
  <div class="post__image">
      <img src="${media}" alt="">
  </div>
  <div class="post__footer">
      <div class="likes js-likes">
          <div class="likes__cta">
              <a class="like-button js-like-button" href="#" data-postid="${id}">
                  <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                  <span class="like-button__label">Mi Piace</span>
              </a>
          </div>
          <div class="likes__counter">
              Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
          </div>
      </div> 
  </div>
`;

  // Aggiungo l'evento click al bottone "Mi Piace"
  const likeButton = postElement.querySelector(".js-like-button");
  likeButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (!likeButton.classList.contains("like-button--liked")) {
      likeButton.classList.add("like-button--liked");
      const likeCounter = postElement.querySelector(`#like-counter-${id}`);
      likeCounter.textContent = parseInt(likeCounter.textContent) + 1;
      likedPosts.push(id);
    }
  });

  // Restituisco l'elemento post
  return postElement;
}

// Seleziono il container dove inserire i post
const container = document.getElementById("container");

// Creo e aggiungo ogni post al container
posts.forEach((post) => {
  const postElement = createPost(post);
  container.appendChild(postElement);
});

// Stampo l'array likedPosts nella console per verificare gli ID salvati
console.log(likedPosts);
