# Tailwind CSS
[ссылка](https://tailwindcss.ru/docs/installation/)

## Tailwind поддерживание

### Установка
```
npm install -D tailwindcss
npx tailwindcss init
```
```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Оптимизация
``npx tailwindcss -o build.css --minify``

## Основа

https://tailwindcss.ru/docs/hover-focus-and-other-states/#kratkiy-spravochnik

### Основные сокращения
```
// размеры/позиция
- w/h-*        - width/height. Пример: w-12 h-12
- p*-*         - padding. Пример: p-12 py-12 px-4
- flex         - display:flex;

// текст
- text-*       - font-size/font-color. Пример: text-xl text-white
- font-*       - font-weight. Пример: font-semibold;

// блок
- bg-*         - background-color. Пример: bg-white

// действия
- hover:*      - действия при hover. Пример: hover:bg-white; hover:text-black
- focus:*      - действие на focus. Пример: focus:border-red
- disabled:*   - 

// расположение в DOM
- first:*      - действие для первого элемента.
- last:*       - для последнего элемента.

// по разрешению
- sm           - @media (min-width: 640px). Пример: sm:bg-white
- md           - @media (min-width: 768px)
- lg           - @media (min-width: 1024px)
- xl           - @media (min-width: 1280px)
- max-*        - max-sm. Пример: max-sm:hover:bg-white
- min-*        - min-sm
```

### Сложные селекторы
```html
<li class="group/item">
    <a class="group-hover/item:bg-white"></a>
</li>
```

```css
.group .item:hover {
    background-color: white;
}
```

### Функции и дерективы
```css

/* --- Это всё ниже можно сделать через Plugins --- */

/* Добавляем базовые стили через CSS */
@layer base {
    h1 { 
        @apply text-2xl; 
    }
    
    h2 { 
        @apply text-xl; 
    }
}

/* Добавляем компоненты через CSS */
@layer component {
    .btn {
        
        /* Добавление в .btn класс стили из tailwind */
        @apply text-xl text-text font-medium;
        background-color: theme('colors.background');
    }
}

/* Для  добавления варинатов <variant>: */
@tailwind variant {
    
    /* это только через plugins */
}
```

### Добавление анимаций

Определние анимаций для использования
```typescript
module.exports = {
    theme: {
        extend: {
            
            // сами анимации
            keyframes: {
                fade: {
                    from: {
                        opacity: '0'
                    },
                    to: {
                        opacity: '1'
                    }
                },

                scaleIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.9)',
                    },
                    '50%': {
                        opacity: '0.3',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)',
                    },
                },
            },
            animation: {
                fade: 'fade 0.5s ease-in-out',
                scaleIn: 'scaleIn 0.35s ease-in-out',
            },
        }
    }
}
```

### Plugins

https://tailwindcss.ru/docs/plugins/

```typescript
module.exports = {
   plugin: [
       plugin(({ addVariant }) => {
           
           // third:bg-red
           addVariant('third', '&:nth-child(3)')

           // hover:btn
           addComponent({
               '.btn': {
                   color: theme('colors.text'),
                   backgroundColor: theme('colors.background'),
               }
           })
       })
   ] 
}
```

### Темный режим/Добавление своих стилей

https://tailwindcss.ru/docs/dark-mode/#pereklyuchenie-temnogo-rezhima-vruchnuyu

Определяем сначала в tailwind.config.js
```typescript
module.export = {
    darkMode: 'selector',
    theme: {
        extend: {

            // И ещё много чего можно определить
            // и обращатся bg-background
            
            colors: {
                text: 'var(--color-input)',
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)'
            }
        }
    }
}
```

К темной теме можно обратится
```

// tailwind
dark:hover:bg-white

// css
.dark :hover:bg-white
```

