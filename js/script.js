const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".appBody__imageSection-settingsBtn");
const imageSection = document.querySelector(".appBody__imageSection");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".appBody__timeSection-timeCards-card-daysCount");
const hoursCount = document.querySelector(".appBody__timeSection-timeCards-card-hoursCount");
const minutesCount = document.querySelector(".appBody__timeSection-timeCards-card-minutesCount");
const secondsCount = document.querySelector(".appBody__timeSection-timeCards-card-secondsCount");

const saveBtn = document.querySelector(".settings__save");
const eventSpan = document.querySelector(".appBody__timeSection-heading-event");

let usersTime;

const showSettings = () => {
  settings.classList.toggle("active");
};

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result / 1000 / 60 / 60 / 24);
  const hours = Math.floor(result / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(result / 1000 / 60) % 60;
  const seconds = Math.floor(result / 1000) % 60;

  daysCount.textContent = days + 1;
  hoursCount.textContent = hours + 1;
  minutesCount.textContent = minutes + 1;
  secondsCount.textContent = seconds;
};

const appUpdate = () => {
  eventSpan.textContent = eventName.value;
  imageSection.style.backgroundImage = `url('${eventImg.value}')`;

  usersTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`);
  usersTime.toLocaleDateString();
  setTime();
  settings.classList.remove("active");
};

settingsBtn.addEventListener("click", showSettings);
saveBtn.addEventListener("click", appUpdate);

appUpdate();
setInterval(setTime, 1000);
