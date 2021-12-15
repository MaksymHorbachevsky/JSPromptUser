var dateHour = new Date().getHours();
var greet;
if (dateHour < 11) {
  greet = "Доброго ранку, шановний ";
} else if (dateHour < 17) {
  greet = "Доброго дня, шановний ";
} else if (dateHour >= 17) {
  greet = "Доброго вечора, шановний ";
}

var users = [];
var user = {
  login: "user",
  password: "UserPass",
};
var admin = {
  login: "admin",
  password: "RootPass",
};
var magazin = {
  login: "magazin",
  password: "AtbPass",
};
var valera = {
  login: "valera",
  password: "AbobaPass",
};

users.push(user);
users.push(admin);
users.push(valera);
users.push(magazin);

var loginPrompt = prompt("Введіть ваш логін:");
if (loginPrompt == "" || loginPrompt == null) alert("Скасовано");
else if (loginPrompt.length < 4)
  alert("Я не знаю жодного імені із довжиною менше 4 символів");
else {
  var notFound = true;
  for (var user of users) {
    if (user.login == loginPrompt) {
      notFound = false;
      var passwordPrompt = prompt("Введіть пароль");
      passwordPrompt == user.password
        ? alert(greet + user.login + "!")
        : alert("Неправильний пароль");
    }
  }
  if (notFound) alert("Я не знаю вас!");
}
