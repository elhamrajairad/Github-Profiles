let getBtn = document.querySelector("#btn-get");
let btnUserName = document.querySelector("#user-name");
let errorNull = document.querySelector("#error-null");
let content = document.querySelector("#profile");
let userID
btnUserName.addEventListener("change", (e) => {
  userID = e.target.value;
});
getBtn.addEventListener("click", () => {
  content.style.display='flex'
  if (!userID) {
    return (content.innerHTML = `<h1>Please enter user name</h1>`);
  } else {
    fetch("https://api.github.com/users/" + userID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          (content.innerHTML = `<h1>User ID ${Error.value}</h1>`)
        );
      })
      .then(function (response) {
        return (content.innerHTML = `
      <div class="profile__avatar">
        <img src=${response.avatar_url} alt=${response.name}>
      </div>
      <div class="profile__detaile">
        <div class="detaile__names">
          <h1 class="profile__name">${response.name}</h1>
          <p class="profile__id">ID: ${response.id}</p>
        </div>
        <div class="detaile__user">
          <p class="user__repo">
            <span class="repo__count">${response.public_repos}</span>
            <span>Repository</span>
          </p>
          <p class="user__followers">
            <span class="followers__count">${response.followers}</span>
            <span>Followers</span>
          </p>
          <p class="user__following">
            <span class="following__count">${response.following}</span>
            <span>Following</span>
          </p>
        </div>
      </div>
    `);
      });
  }
});
