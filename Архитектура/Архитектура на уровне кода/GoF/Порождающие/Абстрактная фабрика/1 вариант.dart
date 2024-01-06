void main() {
  CreatorFactory creator = new CreatorFactory();
  Client client = new Client(creator.createFactory());
}

class Client {
  late Item _item;
  late User _user;
  late Anus _anus;

  Client(Factory factory) {
    this._anus = factory.createAnus();
    this._user = factory.createUser();
    this._item = factory.createItem();
  }
}

enum ITEMS { A, B }

// ---------

abstract class Item {}

class ItemA extends Item {}

class ItemB extends Item {}

// ---------

abstract class User {}

class UserA extends User {}

class UserB extends User {}

// ---------

abstract class Anus {}

class AnusA extends Anus {}

class AnusB extends Anus {}

// ---------

class CreatorFactory {
  Factory createFactory() {
    /**
     * Какая-та логика спрятана, где
     * возвращаем нужный Factory
     */
    return new FactoryA() ?? new FactoryB();
  }
}

abstract class Factory {
  User createUser();

  Anus createAnus();

  Item createItem();
}

class FactoryA extends Factory {
  @override
  Anus createAnus() {
    return new AnusA();
  }

  @override
  Item createItem() {
    return new ItemA();
  }

  @override
  User createUser() {
    return new UserA();
  }
}

class FactoryB extends Factory {
  @override
  Anus createAnus() {
    return new AnusB();
  }

  @override
  Item createItem() {
    return new ItemB();
  }

  @override
  User createUser() {
    return new UserB();
  }
}
