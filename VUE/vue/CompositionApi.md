# Composition Api

## Описание компонента

Описание компонента
```typescript
// MyComponent.vue
import { defineProps, defineEmits } from 'vue';

// гененерирование событий на вверх
const emit = defineEmits(['update:modelValue'])

// для получения пропсов
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    todoList: {
        type: Array,
        default: () => []
    }
})

const create = () => emit('update:modelValue')
```
Использование компонента
```
// SomeComonent.vue

const title = ref('title')
const todo = reactive({
    list: [{ id: 1, text: 'текст' }]
})

const onUpdateModelValue = () => // ...


<MyComponent
    :title="title"
    :todoList="todo.list"
    @update:modelValue="onUpdateModelValue"
```

## Данные

```typescript
import { ref, reactive, computed, watch } from 'vue';

// для каких-то примитивов и Array 
const count = ref(0);

// для объектов другой метод идет
const counter = reactive({ count: 0, isBlock: false })

// Инвариант
const yetCount = computed(() => {
    return count.value + counter.count;
})

// отслеживание изменений реактивных переменных
// также есть watchEffect, watch
// https://vuejs.org/guide/essentials/watchers.html
watch(yetCount, (newValue) => {
    console.log(`Изменилось значенение yetCount: ${yetCount}`)
})
```

## Хуки

### Основные хуки по жизненному циклу

**в начале жизненого цикла**
onBeforeMount
-> onMounted
-> onActivated - добавили в DOM

**при обновление**
-> onBeforeUpdate
-> onUpdated

**в конце жизненого цикла**
-> onBeforeUnmount
-> onUnmounted
-> onDeactivated - удалили из DOM

### Дополнительные хуки
onErrorCaptured - ошибка в компоненте случилась

### Ссылки
[подробнее...](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)
[подробнее api...](https://vuejs.org/api/composition-api-lifecycle.html)

## Children
```
// App.vue
<template>
    <Layout>
        <template #header>
            Header
        </template>
        <template #content>
            Content
        </template>
        <template #footer>
            Footer
        </template>
    </Layout>
</template>

// Layout.vue
<template>
    <header>
        <slot name="header"></slot>
    </header>
    <div class="divider"></div>
    <section>
        <slot name="content"></slot>
    <section>
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>
```

## Provide/Inject

Provide на уровне компонента
```typescript
import { reactive, provide } from 'vue';
const counter = reactive({ count: 0 });

provide('CounterProvide', counter);
```

Provide на уровне приложение
```typescript
import { createApp, provide } from 'vue';
const app = createApp({});
const counter = reactive({ count: 0 });

app.provide('GlobalCounterProvide', counter);
```

Получаем данные из родительских компонентов через Provide
```typescript
import { inject } from 'vue';

const counter = inject('CounterProvide');
const globalCounter = inject('GlobalCounterProvide');

counter.count;
globalCounter.count;
```

## Асинхронные компоненты
https://vuejs.org/guide/components/async.html

Создание асинхронной компоненты
```typescript
import { defineAsyncComponent } from 'vue'

const AdminPage = defineAsyncComponent(() => ({
    
    // компонента что асинхронно загружаем
    loader: () => import('./Component.vue'),
    
    // задержка перед отображение компоненты
    delay: 300,
    
    // сколько грузится будет компонент
    timeout: 3000,
    
    // компонент что будет показан во время загрузки
    loadingComponent: LoadingComponent,
    
    // компонент что будет показан при неудачно загрузке
    errorComponent: ErrorComponent
}))
```

Использование асинхронной компоненты
```html
<template>
    <Suspense>
        <AdminPage :title="title" :description="description"/>
    </Suspense>
</template>
```

## Встроенные компоненты

https://vuejs.org/guide/built-ins/transition.html
Transition - для применения анимации, когда элемент или компонент входит в DOM и покидает его;
TransitionGroup - для применения анимации при вставке элемента или компонента в v-for список, удалении из него или перемещении внутри него

https://vuejs.org/guide/built-ins/keep-alive.html
KeepAlive - о встроенный компонент, который позволяет нам условно кэшировать экземпляры компонентов при динамическом переключении между несколькими компонентами.

https://vuejs.org/guide/built-ins/teleport.html
Teleport - позволяет нам вставлять часть шаблона компонента в любой DOM-узел - Portal в React

https://vuejs.org/guide/built-ins/suspense.html
Suspense - это встроенный компонент для управления асинхронными зависимостями в дереве компонентов.