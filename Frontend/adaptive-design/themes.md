# Темизация

https://web.dev/learn/design/theming?hl=ru

## Настройте интерфейс браузера

Некоторые браузеры позволяют предлагать цвет темы на основе палитры вашего веб-сайта. **Интерфейс браузера адаптируется к предложенному вами цвету.**

```html
<meta name="theme-color" content="#00D494">
```

Можно также указать цвет темы в манифесте приложения.
```html
<meta name="manifest" href="/manifest.json">
```
```json
{
  "background_color": "#00D494",
  "theme_color": "#00D494"
}
```

## Обеспечение темного режима

Многие операционные системы позволяют пользователям указывать предпочтение светлой или темной цветовой палитры. Вы можете получить доступ к этой настройке с помощью медиа-функции, называемой `prefers-color-scheme`.

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">

<style>
    html {
        --font-color: black;
        --bg-color: white;
    }
    
    body {
        color: var(--font-color);
        background-color: var(--bg-color);
    }
</style>

<style media="(prefers-color-scheme: dark)">
    html {
        color: white;
        background-color: black;
    }
</style>
```

Ну или если хотим регулировать сами тему
```html
<link rel="stylesheet" type="text/css" href="css/themes/lightTheme.css" media="not all">
<link rel="stylesheet" type="text/css" href="css/themes/darkTheme.css" media="all">
```

## Формыч

- Браузер может предоставить соответствующий стиль по умолчанию для форм через свойство `color-scheme`
- Используйте свойство `accent-color` в CSS для стилизации флажков, переключателей и некоторых других полей формы.

```css
html {
    color-scheme: light;
    --fz-color: white;
    --bg-color: black;
    --accent-color: red;
}

body {
    accent-color: var(--accent-color);
    background-color: var(black);
    color: var(--fz-color);
}

@media (prefers-color-scheme: dark) {
    html {
        color-scheme: dark;
        --fz-color: white;
        --bg-color: black;
        --accent-color: pink;
    }
}
```