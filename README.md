# Express Project

Этот проект представляет собой веб-приложение, созданное с использованием **Express.js** и **EJS**. Приложение включает
базовые функции CRUD (создание, чтение, обновление и удаление) для управления данными пользователей.

## Установка

Для установки проекта выполните следующие шаги:

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/pavel7991/express.git
    ```

2. Перейдите в директорию проекта:
    ```bash
    cd express
    ```

3. Установите зависимости:
    ```bash
    npm install
    ```

## Запуск

Для запуска приложения используйте следующую команду:

```bash
npm start
```

Приложение будет запущено на `http://localhost:3000`.

## Структура проекта

- `public/` - Статические файлы (CSS, JavaScript).
- `src/` - Исходный код приложения.
    - `app.mjs` - Настройка и запуск Express-приложения.
    - `routes/` - Маршрутизация.
    - `controllers/` - Контроллеры для обработки запросов.
    - `middleware/` - Промежуточные обработчики (middleware).
    - `schemas/` - Схемы валидации данных.
    - `helpers/` - Вспомогательные функции (например, логирование).
    - `views/` - Шаблоны EJS.

## Маршрутизация

### Пользователи

- `GET /users` - Получение списка пользователей.
- `GET /users/add-new-user` - Форма для добавления нового пользователя.
- `POST /users/add-new-user` - Добавление нового пользователя.
- `GET /users/:userId` - Получение информации о пользователе по ID.
- `DELETE /users/:userId` - Удаление пользователя по ID.
- `PUT /users/:userId` - Обновление информации о пользователе по ID.

## Миддлвары

В проекте используются следующие миддлвары:

- `logRequests` - Логирование запросов.
- `validateUserData` - Валидация данных пользователя при добавлении и обновлении.

## Валидация данных

Для валидации данных пользователя используется библиотека **Joi**. Схема валидации определена в
`src/schemas/userSchema.mjs`.

```javascript
import Joi from 'joi';

export const userSchema = Joi.object({
	name: Joi.string().required().min(3).max(30),
	email: Joi.string().required().email(),
	phone: Joi.string().optional().allow('', null).pattern(/^\+?[0-9\s\-]{7,14}$/),
	avatar: Joi.string().optional().allow('', null).uri(),
	website: Joi.string().optional().allow('', null).uri()
});
```

## Шаблоны

Приложение использует **EJS** для рендеринга HTML-шаблонов. Все шаблоны находятся в директории `src/views`.

### Компоненты

- `form.ejs` - Форма для создания и редактирования пользователей.
- `userCard.ejs` - Карточка пользователя.

### Основные страницы

- `index.ejs` - Главная страница.
- `users.ejs` - Страница списка пользователей.
- `notFound.ejs` - Страница ошибки 404.

## Логирование

Для логирования используется кастомный логгер, который определен в `src/helpers/logger.mjs`.

```javascript
import chalk from 'chalk';

export const log = (message, color = 'green') => {
	console.log(chalk[color](message));
};
```

## Валидация форм

Для валидации форм используется JavaScript. Валидация определена в `public/js/validation/formValidation.js`.

```javascript
export const clearInputErrors = () => {
	const errorMessages = document.querySelectorAll('.err-msg');
	const inputGroups = document.querySelectorAll('.input-group');

	errorMessages.forEach(errorMessage => errorMessage.textContent = '');
	inputGroups.forEach(inputGroup => inputGroup.classList.remove('error'));
};

export const showValidationErrors = (errors) => {
	for (const key in errors) {
		const inputGroup = document.getElementById(`${key}-input-group`);
		const errorSpan = inputGroup.querySelector('span');

		inputGroup.classList.add('error');
		errorSpan.textContent = errors[key];
	}
};
```

