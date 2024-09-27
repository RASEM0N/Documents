# HTML Templates
`<template>` - это элемент, который позволяет создавать переиспользуемый шаблон - антикопипаст. Элемент`<template>` и его содержимое не отображаются в DOM, но на него все еще можно ссылаться с помощью JavaScript.

```html
<template id="custom-paragraph">
    <style> p { font-size: 24px; color: #f0f0f0; } </style>
    <p>Some text</p>
</template>
```

Этот не рендрится сразу же на страницы, пока мы не получим его вставку и вставим

```js
const template = document.getElementById("custom-paragraph");
const templateContent = template.content;
document.body.appendChild(templateContent);
```

## Использование с Web Components
Шаблоны полезны сами по себе, но еще лучше они работают с веб-компонентами.

```js
customElements.define(
  'my-paragraph',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("custom-paragraph");
      const templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      
      // добавляем клон контента шаблона в Shadow Dom <my-paragraph>
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

```html
<body>
    <my-paragraph></my-paragraph>
</body>
```

## Повышаем гибкость с помощью  слотов
Пока все хорошо, но элемент не очень гибкий - контент `Some text` нельзя изменить. Для решения данной проблемы есть элемент `<slot>` - это, как children в React или теже самые slot-ы в Vue (который с веб компонентов и списаны)

Добавляем слоты в наш шаблон параграфа
```html
<template id="custom-paragraph">
    <style> p { font-size: 24px; color: #f0f0f0; } </style>
    <p>
        <slot name="my-text">Default Text</slot>
    </p>
</template>
```

Вызываем зарегистрируемый нами ранее элемент
```html
<my-paragraph>
    <span slot="my-text">Всем привет</span>
</my-paragraph>
```