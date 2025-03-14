# Документация проекта

Этот проект представляет собой простое веб-приложение, разработанное с использованием **Express.js** и **EJS** для
рендеринга шаблонов. Приложение позволяет управлять списком пользователей, поддерживая базовые CRUD-операции (создание,
чтение, обновление, удаление). Для выполнения HTTP-запросов на стороне клиента используется библиотека **Axios**.

---

## Основные технологии

- **Express.js**: Фреймворк для создания серверной части приложения.
- **EJS**: Шаблонизатор для рендеринга HTML на стороне сервера.
- **Axios**: Библиотека для выполнения HTTP-запросов на стороне клиента (используется для удаления и обновления данных
  пользователей).
- **Middleware**: Для обработки входящих запросов (логирование, парсинг JSON и URL-encoded данных).

---

## Структура проекта

### Основные файлы

1. **`app.mjs`**  
   Главный файл приложения, который настраивает Express.js, подключает маршруты и запускает сервер.

2. **`controllers/users.mjs`**  
   Содержит обработчики запросов для операций с пользователями (CRUD).

3. **`routes/users.mjs`**  
   Определяет маршруты для операций с пользователями.

4. **`views/`**  
   Директория с шаблонами EJS для рендеринга страниц.

5. **`public/`**  
   Директория для статических файлов (CSS, JavaScript, изображения).

---

## Описание функциональности

### Основные маршруты

- **`GET /users`**  
  Отображает список всех пользователей.  
  Использует шаблон `views/users.ejs`.

- **`GET /users/add-new-user`**  
  Отображает форму для добавления нового пользователя.  
  Использует шаблон `views/addNewUser.ejs`.

- **`POST /users/add-new-user`**  
  Обрабатывает данные формы и добавляет нового пользователя в список.  
  После успешного добавления перенаправляет на страницу с подтверждением (`views/userSuccessAdd.ejs`).

- **`GET /users/:userId`**  
  Отображает подробную информацию о пользователе по его ID.  
  Использует шаблон `views/user.ejs`.

- **`PUT /users/:userId`**  
  Обновляет данные пользователя по его ID.  
  Использует **Axios** на стороне клиента для отправки запроса.

- **`DELETE /users/:userId`**  
  Удаляет пользователя по его ID.  
  Использует **Axios** на стороне клиента для отправки запроса.

---

## Использование EJS

Шаблоны EJS используются для динамического рендеринга HTML-страниц. Например:

- **`views/users.ejs`**: Отображает список всех пользователей.
- **`views/user.ejs`**: Отображает подробную информацию о конкретном пользователе.
- **`views/addNewUser.ejs`**: Форма для добавления нового пользователя.
- **`views/userSuccessAdd.ejs`**: Страница с подтверждением успешного добавления пользователя.

---

## Использование Axios

На стороне клиента **Axios** используется для выполнения HTTP-запросов без перезагрузки страницы. Примеры использования:

### Обновление данных пользователя

```javascript
const updateDataUser = async (e) => {
	e.preventDefault()
	const url = window.location.pathname

	try {
		const res = await axios.put(url, dataFormJson(FormUser), {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		if (res.status === 200) {
			alert(res.data.message)
			window.location.reload()
		}
	} catch (err) {
		console.error(err)
		alert('Error updating user data')
	}
}
