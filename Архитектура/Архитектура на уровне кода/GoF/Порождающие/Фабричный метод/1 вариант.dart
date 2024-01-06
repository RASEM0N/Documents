 class Client {
  late final Item _item;

  Client(ITEMS itemType) {
    CreatorItem creator = new CreatorItem();
    this._item = creator.get(itemType);
  }
}

enum ITEMS { A, B }

abstract class Item {}

class ItemImlA extends Item {}

class ItemImlB extends Item {}

class CreatorItem {
  Item get(ITEMS type) {
    switch (type) {
      case ITEMS.A:
        return new ItemImlA();

      case ITEMS.B:
        return new ItemImlB();
    }
  }
}
