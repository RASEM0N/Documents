# Адаптивный дизайн

https://web.dev/learn/design/welcome?hl=ru
https://skillbox.ru/media/code/mediazaprosy-v-css-kak-nastroit-adaptivnuyu-vyerstku-sayta/
https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries
https://web.dev/learn/css/grid?hl=ru

## Медиа запросы

https://web.dev/learn/design/media-queries?hl=ru
https://web.dev/learn/design/media-features?hl=ru

Медиа запросы в CSS (при печатание):
```css
body { 
    color: black; 
    background-color: grey; 
}

@media print {
    body { 
        background-color: transparent 
    }
}
```

Медиа запросы в HTML (при печатание):
```html
<link rel="stylesheet" href="global.css">
<link rel="stylesheet" href="print.css" media="print">
```

### Types
- `all` - дефолтный медиа запрос, можно даже не указывать;
- `print` - при распечатование html;
- `screen` - для экранов компьютеров, планшетов и смартфонов;
- `speech` - для скринридеров, которые «читают» страницу вслух;

### Features
- `(orientation: landscape)` - ландшафтным дизайн;
- `(orientation: portrait)` - портретный режим;
- `(min-width: *<ед. измерения>)` - когда ширина экрана **больше** *<ед. измерения>;
- `(max-width: *<ед. измерения>)` - когда ширина экрана **меньше** *<ед. измерения>;
- `(prefers-color-scheme: light)` - светлая тема системы;
- `(prefers-color-scheme: dark)` - темная тема системы;

### Логические операторы
- @media type `and` (feature)
- @media type1`,` type2`,` (feature)
- @media type1 `or` type2 `or` (feature)
- @media `not` screen

## Интернационализация 

Чтобы ваши проекты могли адаптироваться к различным режимам письма, избегайте свойств направленности:
- расположени текста вместо `text-align: right`, используйте `text-align: end`;
- отступы текста вместо `margin-right: 0.5em`, используйте `margin-inline-end: 0.5em`;

Изменение эффекта просмотра страниц:
- значение `ltr` означает «слева направо»; 
- значение `rtl` означает «справа налево»;

```html
<body dir="rtl">
  <h1>Form fields</h1>
</body>
```

### Определить язык страницы
Рекомендуется определить язык вашей страницы `<html lang="en">`. Атрибут `lang` может применяться к любому элементу HTML, а не только html `<p lang="de">schadenfreude</p>`

Есть еще один атрибут, называемый `hreflang` , который вы можете использовать для ссылок. `hreflang` использует ту же нотацию кода языка, что и атрибут lang , и описывает язык связанного документа.

`<a href="/path/to/german/version" hreflang="de" lang="en">German version</a>`

## Макромакеты

Макромакеты описывают более широкую организацию вашего интерфейса на уровне всей страницы.  
https://web.dev/learn/design/macro-layouts?hl=ru

## Микромакеты

В идеале эти макеты на уровне компонентов будут корректироваться автоматически, независимо от их положения на странице.  
https://web.dev/learn/design/micro-layouts?hl=ru

## Доступность

https://web.dev/learn/design/theming?hl=ru

## Взаимодействие

https://web.dev/learn/design/interaction?hl=ru

## Шаблоны пользовательского интерфейса

Дизайн, просмотренный на маленьком экране, не должен выглядеть как уменьшенная версия макета на большом экране. Аналогично, дизайн, просмотренный на большом экране, не должен выглядеть как увеличенная версия макета на маленьком экране. Вместо этого дизайн должен быть достаточно гибким, чтобы адаптироваться ко всем размерам экрана.

https://web.dev/learn/design/ui-patterns?hl=ru

## Конфигурации экрана

Привет мобилам с двумя экранами.

https://web.dev/learn/design/screen-configurations?hl=ru