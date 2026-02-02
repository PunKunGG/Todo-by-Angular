# Angular Todo App (Standalone)

A simple yet professional Todo Application built with Angular 21 using the Standalone Component architecture.

This project was created as a hands-on exercise to demonstrate Angular fundamentals, clean structure, and practical state management suitable for a Frontend / Angular Internship interview.

---

# Author

- Siwapad (PunKunGG)
- Computer Science Student
- Interested in Frontend Development with Angular

---

# Project Objective

The main goal of this project is to showcase:

- Understanding of Angular Standalone Components (Angular 17+ / 21)
- Proper usage of data binding and event handling
- Simple state management within a component
- Persisting data using LocalStorage
- Clean, readable, and maintainable code structure

---

# Features

- Add new todo items
- Mark todo items as completed
- Remove todo items
- Persist todo list using LocalStorage
- Clean and minimal dark-themed UI
- Fully client-side (no backend required)

---

# Tech Stack

- Angular 21
- TypeScript
- Standalone Components
- HTML / CSS
- Browser LocalStorage

---

# Project Structure

```
src/
 └─ app/
    ├─ app.ts
    ├─ app.html
    ├─ app.css
    └─ todo-item.ts

```

---

# Architecture Notes

- The application uses Angular Standalone Components, removing the need for NgModules.
- Application state is handled locally inside the root component.
- Todo data is automatically saved and restored using LocalStorage.
- The project intentionally avoids unnecessary complexity to keep the focus on Angular fundamentals.
