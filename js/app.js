let getBtn = document.querySelector("#btn-get");
let btnUserName = document.querySelector("#user-name");
let errorNull = document.querySelector("#error-null");
let content = document.querySelector("#profile");
let userID;
btnUserName.addEventListener("change", (e) => {
  userID = e.target.value;
});
getBtn.addEventListener("click", () => {
  fetch("https://api.github.com/users/" + userID)
    .then((res) => res.json())
    .then(function (res) {
      return (content.innerHTML = `
      <div class="profile__avatar">
        <img src=${res.avatar_url} alt=${res.name}>
      </div>
      <div class="profile__detaile">
        <div class="detaile__names">
          <h1 class="profile__name">${res.name}</h1>
          <p class="profile__id">ID: ${res.id}</p>
        </div>
        <div class="detaile__user">
          <p class="user__repo">
            <span class="repo__count">${res.public_repos}</span>
            <span>Repository</span>
          </p>
          <p class="user__followers">
            <span class="followers__count">${res.followers}</span>
            <span>Followers</span>
          </p>
          <p class="user__following">
            <span class="following__count">${res.following}</span>
            <span>Following</span>
          </p>
        </div>
      </div>
    `);
    });
});
