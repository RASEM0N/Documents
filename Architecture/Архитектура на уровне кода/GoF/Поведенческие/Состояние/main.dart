/**
 * Не используется почти что. Лучше юзайте стратегию.
 *
 * Код одного состояние только содержит логику
 * только о данном состояние.
 * Четко видно, что выполяе
 *
 * Помогает избавится от бессконечных if/else, switch/case
 */

class Door {
  late DoorState state;

  void open() {
    this.state.open();
    this.state = new OpenedDoorState();
  }

  void close() {
    this.state.close();
    this.state = new ClosedDoorState();
  }

  // Думаю по коду ниже понятно зачем данный паттерн

  // void open() {
  //   if (this.state === 'closed') {
  //     print('Открыли дверь ');
  //   } else {
  //     throw 'Хули дверь открытую открываешь';
  //   }
  // }

  // void close() {
  //   if (this.state === 'opened') {
  //     print('Закрыли дверь');
  //   } else {
  //     throw 'Хули дверь закрытую закрываешь';
  //   }
  // }
}

abstract class DoorState {

  void open();

  void close();
}

class OpenedDoorState implements DoorState {
  @override
  void close() {
    print('Закрыли дверь');
  }

  @override
  void open() {
    throw 'Хули дверь открытую открываешь';
  }
}

class ClosedDoorState implements DoorState {
  @override
  void close() {
    throw 'Хули дверь закрытую закрываешь';
  }

  @override
  void open() {
    print('Открыли дверь');
  }
}
