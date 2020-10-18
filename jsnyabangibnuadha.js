/* Create name, username and date at the top of each tweet */
let profileDetails = "";
profileDetails += '<div class="img"></div>';
profileDetails += '<div class="name">Inès</div>';
profileDetails += '<div class="username">@inescodes</div>';
profileDetails += '<div class="date"></div>';
profileDetails += '<div class="more">';
profileDetails += '<svg viewBox="0 0 512 512" width="100">';
profileDetails +=
  ' <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />';
profileDetails += "</svg></div>";
profileDetails +=
  '<div class="reply-name">Replying to <span class="link">@inescodes</span></div>';

let x = document.querySelectorAll(".user-profile");
for (let i = 0; i < x.length; i++) {
  x[i].innerHTML = profileDetails;
}

/* Create the like, retweet, comment and share buttons */
let btns = document.querySelectorAll(".tweet-interaction-buttons");
for (let i = 0; i < btns.length; i++) {
  let tweetButtons = "";
  tweetButtons += '<div class="comment">';
  tweetButtons += '<div class="icon">';
  tweetButtons +=
    '<svg viewBox="0 0 512 512" width="100"><path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z" /></svg>';
  tweetButtons += "</div>";
  tweetButtons += '<div class="number"></div>';
  tweetButtons += '</div><div class="retweet">';
  tweetButtons += '<div class="icon">';
  tweetButtons +=
    '<svg viewBox="0 0 640 512" width="100"><path d="M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z" /></svg>';
  tweetButtons += "</div>";
  tweetButtons += '<div class="number"></div>';
  tweetButtons += '</div><div class="like">';
  tweetButtons += '<div class="icon">';
  tweetButtons +=
    ' <svg viewBox="0 0 512 512" width="100" ><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>';
  tweetButtons += "</div>";
  tweetButtons += '<div class="number"></div>';
  tweetButtons += '</div><div class="share">';
  tweetButtons += '<div class="icon">';
  tweetButtons +=
    ' <svg viewBox="0 0 576 512" width="100""><path d="M568.482 177.448L424.479 313.433C409.3 327.768 384 317.14 384 295.985v-71.963c-144.575.97-205.566 35.113-164.775 171.353 4.483 14.973-12.846 26.567-25.006 17.33C155.252 383.105 120 326.488 120 269.339c0-143.937 117.599-172.5 264-173.312V24.012c0-21.174 25.317-31.768 40.479-17.448l144.003 135.988c10.02 9.463 10.028 25.425 0 34.896zM384 379.128V448H64V128h50.916a11.99 11.99 0 0 0 8.648-3.693c14.953-15.568 32.237-27.89 51.014-37.676C185.708 80.83 181.584 64 169.033 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-88.806c0-8.288-8.197-14.066-16.011-11.302a71.83 71.83 0 0 1-34.189 3.377c-7.27-1.046-13.8 4.514-13.8 11.859z" /></svg>';
  tweetButtons += "</div></div>";
  btns[i].innerHTML = tweetButtons;
}

/* Create random numbers for the likes, comments and retweets */
const randomNumber = document.getElementsByClassName("number");
for (let i = 0; i < randomNumber.length; i++) {
  randomNumber[i].innerHTML = "" + Math.floor(Math.random() * 15) + "";
}

/* Create the link preview box for each project */
const projectDescription = document.getElementsByClassName(
  "project-description"
);
const titleBox = document.getElementsByClassName("title-box");
const projectLink = document.getElementsByClassName("project-link");

for (let j = 0; j < projectDescription.length; j++) {
  let href = projectLink[j].getAttribute("href");
  let element = document.createElement("span");
  element.innerHTML = href;
  projectLink[j].prepend(element);
  let siteName = projectLink[j].host;
  titleBox[j].innerHTML =
    "<p>" + projectDescription[j].innerHTML + "</p><p>" + siteName + "</p>";
}

/* Create links for the contact section */
const contact = document.getElementById("contact");
const links = contact.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  let linkElement = document.createElement("span");
  linkElement.innerHTML = links[i].getAttribute("href");
  linkElement.setAttribute("class", "link");
  links[i].append(linkElement);
}

/* Show the date in tweets */
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let d = new Date();

const wholeDate = document.querySelector(".date-month-day-year");
wholeDate.innerHTML =
  months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

const dates = document.querySelectorAll(".date");
[].forEach.call(dates, function (date) {
  date.innerHTML = months[d.getMonth()] + " " + d.getDate();
});
