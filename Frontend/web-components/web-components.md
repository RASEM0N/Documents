# Web Components

https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots

Это набор различных технологий, позволяющих создавать пользовательские элементы многократного использования - с их функциональностью, инкапсулированной отдельно от остального вашего кода


## Концепции и использование

### Custom Elements
Набор JavaScript API, которые позволяют вам определять пользовательские элементы и их поведение, которые затем можно использовать по желанию в вашем пользовательском интерфейсе.

### Shadow DOM

Набор JavaScript API для прикрепления **инкапсулированного Shadow DOM дереву к элементу**: 
- отображается отдельно от основного документа DOM; 
- сохранение функциональности элемента закрытым - возможность создавать и стилизовать, не изменяя основной DOM и Shadow DOM других элементов;

### HTML Templates
Элементы <template> и <slot> позволяют создавать шаблоны разметки, которые не отображаются на отображаемой странице. Затем их можно многократно использовать в качестве основы структуры пользовательского элемента.