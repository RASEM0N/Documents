/*
  Самый популярный вариант, но у него циклическая зависимость.
  - меньше связей;
  - меньше классов;
  - меньше кода.
*/

class Client {
  late final Item _item;

  Client(ITEMS itemType) {
    this._item = Item.get(itemType);
  }
}

enum ITEMS { A, B }

abstract class Item {
  static Item get(ITEMS type) {
    switch (type) {
      case ITEMS.A:
        return new ItemImlA();

      case ITEMS.B:
        return new ItemImlB();
    }
  }
}

class ItemImlA extends Item {}

class ItemImlB extends Item {}
