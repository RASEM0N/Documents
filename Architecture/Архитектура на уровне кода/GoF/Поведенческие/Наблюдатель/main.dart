/**
 * Механизм у класса, который позволяет объекту
 * подписыватся на оповещения другого класса.
 *
 * Другой класса не знает о нашем классе,
 * можно в рантайме добавлять подписчиков
 */


void main() {
  var model = new CounterModel();
  var counter = new Counter();

  model.addObserver(counter);
  model.addObserver(counter);
  model.addObserver(counter);

  model.increment(); // 'Изменилось значение счетчика 1'
  model.increment(); // 'Изменилось значение счетчика 2'
  model.decrement(); // 'Изменилось значение счетчика 1'
}

class CounterModel extends Observable<int> {
  int _count = 0;

  increment() {
    _count++;
    notifyObserver();
  }

  decrement() {
    _count--;
    notifyObserver();
  }

  @override
  void notifyObserver() {
    observers.forEach((observer) => observer.onUpdate(_count));
  }
}

class Counter extends Observer<int> {
  @override
  void onUpdate(int value) {
    print('Изменилось значение счетчика ${value}');
  }
}

abstract class Observer<T> {
  void onUpdate(T value);
}

abstract class Observable<T> {
  List<Observer<T>> observers = [];

  void addObserver(Observer<T> value) {
    observers.add(value);
  }

  void removeObserver(Observer<T> value) {
    observers.remove(value);
  }

  void notifyObserver();
}
