class UserInfo {
  constructor(info) {
    this.name = info.name;
    this.phoneNumber = info.phone;
    this.animalName = info.animalName;
    this.email = info.email;
  }

  getTelegramText() {
    return `<b>Name:</b> ${this.name}\n<b>Animal's name:</b> ${this.animalName}\n` + 
    `<b>Phone number:</b> ${this.phoneNumber}\n<b>Email:</b> ${this.email}`;
  }
}

module.exports = {
  UserInfo
}