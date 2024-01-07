void main() {
  var animalTransport = new AnimalToTransportAdapter();
  var driver = new Driver(animalTransport);
  driver.travel();
}

class Driver {
  late final Transport _transport;

  Driver(this._transport);

  void travel() {
    this._transport.drive();
  }
}

abstract class Transport {
  void drive();
}

class AnimalToTransportAdapter implements Transport {
  final Animal _animal = new Animal();

  @override
  void drive() {
    _animal.move();
  }
}

class Animal {
  void move() {
    // ...
  }
}
