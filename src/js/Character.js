export default class Character {
  constructor(name, type) {
    const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (!types.includes(type)) {
         throw new Error('Неправильный тип персонажа');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } 
  }
}