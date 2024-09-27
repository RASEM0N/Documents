# Custom Elements

https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements

Одной из ключевых особенностей веб-компонентов является возможность создавать пользовательские элементы: то есть HTML-элементы, поведение которых определяется веб-разработчиком, которые расширяют набор элементов, доступных в браузере.

```js
class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
    }
}
```

## Типы пользовательских элементов
Существует два типа пользовательских элементов:
- Автономные пользовательские элементы наследуются от базового класса `HTMLElement`;
- Настраиваемые встроенные элементы наследуются от стандартных элементов HTML, таких как `HTMLImageElement` или `HTMLParagraphElement`;

## Жизненный цикл
- `connectedCallback` - вызывается каждый раз, когда элемент добавляется в документ;
- `disconnectedCallback` - вызывается каждый раз, когда элемент удаляется из документа;
- `adoptedCallback` - вызывается каждый раз, когда элемент перемещается в новый документ;
- `attributeChangedCallback` - вызывается при изменении, добавлении, удалении или замене атрибутов (подробнее ниже);

```js
class WordCount extends HTMLParagraphElement {
    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
    }
}
```

## Регистрация пользовательского элемента
Чтобы сделать пользовательский элемент доступным на странице, вызовите `define()` метод `Window.customElements`.

Метод `define()` принимает следующие аргументы:
- `name` - имя элемента. Оно должно начинаться со строчной буквы;
- `class` - класс кастомным элементом;
- `options` - свойство `extends`, которое представляет собой строку, именующую встроенный элемент для расширения.


```js
customElements.define("word-count", WordCount, { extends: 'p' });
```

## Реагирование на изменения атрибутов
Как и встроенные элементы, пользовательские элементы могут использовать атрибуты HTML для настройки поведения элемента. Чтобы эффективно использовать атрибуты, элемент должен быть способен реагировать на изменения значения атрибута.

- Статическое свойство с именем `observedAttributes`. Это должен быть массив, **содержащий имена всех атрибутов, для которых элементу требуются уведомления об изменениях**;
- Реализация `attributeChangedCallback()` обратного вызова жизненного цикла, который вызывается при добавление, изменение, удаления атрибута;


```js
class MyCustomElement extends HTMLElement {
  static observedAttributes = ['size', 'value'];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
    );
  }
}

customElements.define('my-custom-element', MyCustomElement);
```

```html
<my-custom-element size="40" value="12"></my-custom-element>
```