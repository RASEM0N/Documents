# PINIA
[Документация](https://pinia.vuejs.org/core-concepts/)  
[Пример 1](https://github.com/lollipopfly/polka)  
[Пример 2](https://github.com/hoachnt/fsd-vue-antd)

## База и Options Api
Я бы назвал это адекватный Vuex, ибо:
- где нету гемороя c actions;
- где нету гемороя с getter-ами;
- где не надо контроллировать названия commit-ов и dispatch-ей;
- не global store с одним single-он стором;
- позволяет юзать в своем состояние методы Composition Api из Vue.

```vue

// ПРИМЕР

// index.МГШ
const pinia = createPinia()
const app = createApp().use(pinia)

// Counter
export const useCounter = defineStore('counter', {
    state: () => ({ count: 0 }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++;
        }
    }
})

// App.vue
<script setup>
import { useCounter } from '@/stores/counter'
const counter = useCounter()
counter.increment()
</script>

<template>
  <div>Count: {{ counter.count }}</div>
</template>
```

## Composition Api
Модель можно описать по другому, использую Composition Api

```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const increment = () => { count.value++ }

  return { count, doubleCount, increment }
})
```
Данный код по функциональности аналогичен в том, что находится в блоке База.
- ref() становятся state свойствами;
- computed() становится getters;
- () => {} становится actions.

Также можно обращатся к глобальным состояниям
```typescript
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'

export const useSearchFilters = defineStore('search-filters', () => {
  const route = useRoute()
  // this assumes `app.provide('appProvided', 'value')` was called
  const appProvided = inject('appProvided')

  return { /* */ }
})
```

## State

Изменение состояния
```typescript
const store = useStore();

// изменение состояние
store.$state = { count: 24 };

// сброс состояния
store.$reset();
```

Изменения свойства состояния
```typescript
const store = useStore();

// 1-ый способ
store.count++;

// 2-ой способ
store.increment();

// 3-ий способ
store.$patch({ count: count + 1 });

// 4-ый способ
store.$patch((state) => ({ count: state.count + 1 }));
```

Подписка на изменение
```typescript
const store = useStore();
const onChangeStore = (mutation, state) => {
    // что-то делаем на изменение состояния
}

// 1-ый способ
store.$subscribe(
    onChangeStore,
    { detached: true, deep: true }
)

// 2-ой способ
watch(store.state, onChangeStore, { detached: true, deep: true })
```

## Getters
Получение данных
```typescript

// store.ts
export const useStore = defineStore('store', {
    state: () => ({ count: 0, todoList: [] }),
    getters: {
        doubleCount: (state) => state.count * 2,
        doublePlusOne: () => this.doubleCount + 1,
        getTodoById: (state) => (todoId) => {
            return state.todoList.filter((v) => v.todoId === todoId);
        }
    },
})

// App.vue
const store = useStore();
const { getTodoById } = storeToRefs(useStore)

// example
console.log(getTodoById(2))
```

## Actions
В actions можно сразу же изменять состояние в отличие от Vuex

...[doc](https://pinia.vuejs.org/core-concepts/actions.html)

## Plugins
Store Pinia могут быть полностью расширены благодаря низкоуровневому API. Вот список того, что вы можете сделать:

- Добавление новых свойств в магазины;
- Добавьте новые параметры при определении магазинов;
- Добавление новых методов в магазины;
- Перенос существующих методов;
- Перехватывать действия и их результаты;
- Реализуют побочные эффекты, такие как локальное хранилище;
- Применяются только к определенным магазинам.

**Добавляем в каждый**
```typescript

// добавляем в каждый Store поле secret
createPinia().use(() => ({ $secret: 'Some secret' }));
```

**Добавляем новые опции**
```typescript
pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      debouncedActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debouncedActions
    }, {})
  }
})

defineStore('search', {
    actions: {
        searchContacts() { },
    },

    debounce: {
        searchContacts: 300,
    },
})
```

Выше только несколько примером того, что можно сделать.
С большим кол-вом примеров и возможностями можно ознакомится по [ссылке](https://pinia.vuejs.org/core-concepts/plugins.html).