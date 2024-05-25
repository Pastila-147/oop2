import Character  from "../Character";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("testing wrong type", () => {
  expect(() => {
    new Character('Dune', 'Wrong');
  }).toThrowError('Неправильный тип персонажа');
});

test("testing wrong name", () => {
  expect(() => {
    new Character('D', 'Undead');
  }).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test("testing wrong name", () => {
  expect(() => {
    new Character('Dunedunedune', 'Undead');
  }).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test("testing wrong name", () => {
  expect(() => {
    new Character(12345, 'Undead');
  }).toThrowError('Имя должно содержать от 2 до 10 символов');
});

test("testing correct character", () => {
  expect(() => {
   const hero = new Character('Dune', 'Undead');
   expect(hero.name).toBe('Dune');
   expect(hero.type).toBe('Undead');
  })
});

test("testing levelUp function", () => {
  const hero = new Daemon('Dune', 'Daemon');
  hero.levelUp();
  expect(hero).toEqual({
      name: 'Dune',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
  });
});

test("testing levelUp function error", () => {
  expect(() => {
      const hero = new Daemon('Dune', 'Daemon');
  hero.health = 0;
  hero.levelUp();
  }).toThrowError("Нельзя повысить левел умершего")
});

test("testing damage function", () => {
  const hero = new Daemon('Dune', 'Daemon');
  hero.damage(10);
  expect(hero.health).toEqual(94);
});


//__________________CHARACTER CREATION TESTING_________________________//

test ('create Daemon', () => {
  const hero1 = new Daemon('Daemon');

  expect(hero1).toEqual({
      name: 'Daemon',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

test ('create Bowman', () => {
  const hero2 = new Bowman('Bowman');

  expect(hero2).toEqual({
      name: 'Bowman',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test ('create Magician', () => {
  const hero3 = new Magician('Magician');

  expect(hero3).toEqual({
      name: 'Magician',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});

test ('create Undead', () => {
  const hero4 = new Undead('Undead');

  expect(hero4).toEqual({
      name: 'Undead',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
  });
});

test ('create Zombie', () => {
  const hero5 = new Zombie('Zombie');

  expect(hero5).toEqual({
      name: 'Zombie',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});

test ('create Swordsman', () => {
  const hero5 = new Swordsman('Swordsman');

  expect(hero5).toEqual({
      name: 'Swordsman',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});