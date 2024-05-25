/**
 * - +- одно и тоже что и паттерн Состояние
 * - Когда класс должен по разному себя вести
 *   в определенных случаях
 * - необходимо изменять поведение класс на этапе RunTime.
 *
 * Пример: транспорты в картах, база одна и тоже, что надо
 * из точки А попасть в точку Б, но поведение, рассчет пути, скорость,
 * которые доступны транспорту у всех разные.
 */


void main() {
  var creator = new StrategyCreator();
  var strategy = creator.getStrategy(StrategyType.print);
  var context = new Context(strategy);

  context.someAction();
}

class Context {
  Strategy _strategy;

  Context(this._strategy);

  void someAction() {
    const someValue = 'fgdgdf';
    this._strategy.execute(someValue);
  }
}

abstract class Strategy {
  void execute(String value);
}

class DBStrategy extends Strategy {
  @override
  void execute(String value) {
    print('Save to DB ${value}');
  }
}

class PrintStrategy extends Strategy {
  @override
  void execute(String value) {
    print('Value is ${value}');
  }
}

enum StrategyType { print, db }

class StrategyCreator {
  Strategy getStrategy(StrategyType type) {
    switch (type) {
      case StrategyType.print:
        return new PrintStrategy();
      case StrategyType.db:
        return new DBStrategy();

      default:
        throw 'данный тип неподдерживается';
    }
  }
}
