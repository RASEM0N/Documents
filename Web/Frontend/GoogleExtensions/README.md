# Расширение браузера

https://developer.chrome.com/docs/extensions/

## Описание манифеста 3

```
{
    // информация по приложению
    "name": "app name",
    "version": "1.0.0",
    "description": "app description",
  
    // версия google extension
    "manifest_version": 3,
    "action": {
        "default_popup": "index.html",
        "default_png": "",
        
        // иконка в панели инструментов
        "default_icon: {
            "16": "",
            "32": "",
            "48": "",
            "128": "
        }
    },
    
    // скрипты загружаемые бразуером
    "content_scripts": [
    
        // блок скриптов
        // которые изолирован от 
        // других элементов списка
        {
            "js": ['./scripts/index.js'],
            
            // на какие сайты работает
            "matches": ["<all_urls>"]
        }
    ],
    
    
    "background": {
    
        // скрипты работающие в фоновом режиме
        // отслеживание событие браузера через Service Worker
        "service_worker": "service-worker.js",
        
        // позволяет использовать import/export
        "type": "module"
    },
    
    // иконки для Интернет магазина Chrome
    "icons": {
        "16": "",
        "32": "",
        "48": "",
        "128": ""
    },
    
    
    // права на действие которое запрашивает
    // данное расширение
    "permissions": [
    
        // доступ к активной вкладке
        "activeTab",
        
        // запуск скриптов: элемент всякий удалить
        // у Adguard допустим такое есть
        "scription"
    ]
}

```

## Обработка событий через Service Worker

https://developer.chrome.com/docs/extensions/get-started/tutorial/service-worker-events?hl=ru

Добавляем в манифест нашь Service Worker
```
{
    background: {
        service_worker: 'service-worker.js',
        type: 'module'
    }
}
```

## Управление вкладками