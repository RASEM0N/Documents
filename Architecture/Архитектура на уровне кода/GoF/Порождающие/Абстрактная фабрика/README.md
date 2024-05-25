Проблемы которые решает:
- А кто будет классы создавать? 
- Создание множества классов, сгрупированных по определенному признаку, категории.

Если Фабричный метод хорош, когда у нас только ItemA и ItemB, 
то Абстрактная фабрика хороша, когда у нас ItemA и ItemB, ButtonA и ButtonB, TextA и TextB

Если мы будет реализовать через Фабричный метод, то у нас будет множество классов с одинаковой конструкцией switch/if, что нарушает прицнип OCP. Да и в целом выглядит, как хуйня по сравнению с реализацией через Абстрактную фабрику. 

```dart
class CreatorElements {

  Button createButton(type) {
    switch (type) {
      case TYPE.A:
        return new ButtonA();
      case TYPE.B:
        return new ButtonA();
    }
  }

  Button createText(type) {
    switch (type) {
      case TYPE.A:
        return new TextA();
      case TYPE.B:
        return new TextA();
    }
  }

// ...
}
```
