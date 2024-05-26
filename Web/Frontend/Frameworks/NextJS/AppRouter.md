# App Router

## Роутинг

https://nextjs.org/docs/app/building-your-application/routing

```
*/
    layout.tsx       - обертка вокруг контента и всех остальных страниц
    page.tsx         - контент страницы
    loading.tsx      - во время загрузки страницы
    global-error.tsx - обработки ошибки глобально
    error.tsx        - обработки ошибки
    not-found.tsx    - когда не нашли нужную страницу
    
    каталог/*
        ... такие же специальные компоненты
        
        (конкретный каталог)/*
            ...такие же специальные компоненты
```

Layout - матрешка из других Layout-ов. И в конце контент с обработкой ошибки, где на каждом уровне вставдяется специальный компонент.

### Динамические роуты

https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

Пример с динамичеискими роутом
```tsx
// app/[categoryId]/[itemId]/page.tsx

type PageProps =  { params: { categoryId: string, itemId: string } }

export default function Page({ params }: PageProps) {
  return <div>Category {params.categoryId} and Item ${params.itemId}</div>
}
```

Описание динаических роутов
```html
Route                               Params  
app/blog/[slug]/page.js             { slug: string }
app/shop/[...slug]/page.js          { slug: string[] }
app/shop/[[...slug]]/page.js	    { slug?: string[] }
app/[categoryId]/[itemId]/page.js   { categoryId: string, itemId: string }
```

### Пример
Для ссылки в браузере ``localhost:8000/settings/values``

Структура папок будет
```
app/
    page.tsx
    layout.tsx
    error.tsx
    loading.tsx
    
    settings/
        layout.tsx
        loading.tsx
        page.tsx
        
        (settingId)/
            page.tsx
```

Структура в React Components-ов
```tsx
{/* localhost:8000/settings */}
<Layout>
    <ErrorBoundary fallback={<Error/>}>
        <Suspense fallback={<Loading/>}>
            
            {/* localhost:8000/settings */}
            <Layout>
                <Suspense fallback={<LoadingSettings/>}>
                    
                    {/* localhost:8000/settings/color */}
                    <PageConcreteSetting/>
                </Suspense>
            </Layout>
        </Suspense>
    </ErrorBoundary>
</Layout>
```