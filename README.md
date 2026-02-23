# ByteMeld — UI Showcase

---

# 🇬🇧 English Version

## 1. Project Title

**ByteMeld** — Single-page application (landing + blog) built from a Figma design. UI showcase with a clear structure and modern front-end stack.

## 2. Overview

SPA for a dev/outsourcing company: hero, about, services (tabs), portfolio (slider), blog listing and article pages, contact form. Implemented in React with Vite; bilingual (UA/EN).

## 3. Live Demo

**[Live Demo](https://bytemeld-vite.vercel.app/)**

## 4. Features

- Bilingual UI (Ukrainian / English) with i18next
- Multi-step contact form (outsourcing vs outstaff) with validation (Formik + Yup)
- Blog list with pagination; article page by slug
- Responsive layout (mobile, tablet, desktop)
- Section animations (Framer Motion)
- Lazy loading for below-the-fold content
- RTK Query set up for API (used with mock data in this demo)

## 5. Tech Stack

| Area | Technologies |
|------|--------------|
| Core | React 18, Vite |
| State & API | Redux Toolkit, RTK Query |
| Routing | React Router v6 |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| Forms | Formik, Yup |
| UI / Motion | Framer Motion, Swiper, react-tabs, react-paginate |
| Styles | SASS (modules), CSS variables |
| Responsive | react-responsive, media queries |

## 6. Architecture Approach

- **Pages:** Layout + route-level components (Home, Blog, Article).
- **Components:** Grouped by section (Header, SectionAbout, SectionServices, SectionForma, etc.) with local subcomponents.
- **State:** Redux store with RTK Query slice; form state in Formik.
- **i18n:** JSON locales (UA/EN); nested keys for menu, services, form options.
- **Routing:** Nested routes under a single layout (header, footer, main content).

No global state for UI-only data; context used only for breakpoint (mobile vs desktop) where needed.

## 7. About Mock Data

Backend integration was implemented via RTK Query (articles API). This demo uses **mock data** (`src/mock/blog.json`) for deploy without a backend. RTK Query layer is in place; swapping to a real API is a data-source change only.

---

# 🇺🇦 Українська версія

## 1. Назва проєкту

**ByteMeld** — односторінковий застосунок (лендінг + блог), зроблений за Figma-дизайном. UI showcase з продуманою структурою та сучасним фронтенд-стеком.

## 2. Огляд

SPA для IT/аутсорсингової компанії: головний екран, блок «Про нас», послуги (таби), портфоліо (слайдер), список статей блогу та сторінка статті, форма контактів. Реалізовано на React з Vite; двомовний інтерфейс (UA/EN).

## 3. Live Demo

**[Live Demo](https://bytemeld-vite.vercel.app/)**

## 4. Функціонал

- Двомовний інтерфейс (українська / англійська) на i18next
- Багатокрокова форма контактів (аутсорсинг / аутстаф) з валідацією (Formik + Yup)
- Список статей блогу з пагінацією; сторінка статті за slug
- Адаптивна верстка (мобільні, планшет, десктоп)
- Анімації секцій (Framer Motion)
- Lazy loading для контенту нижче згину
- RTK Query підготовлений для API; у цьому демо використовуються mock-дані

## 5. Технічний стек

| Частина | Технології |
|--------|-------------|
| Ядро | React 18, Vite |
| Стейт та API | Redux Toolkit, RTK Query |
| Роутинг | React Router v6 |
| i18n | i18next, react-i18next, i18next-browser-languagedetector |
| Форми | Formik, Yup |
| UI / анімації | Framer Motion, Swiper, react-tabs, react-paginate |
| Стилі | SASS (модулі), CSS-змінні |
| Адаптив | react-responsive, медіа-запити |

## 6. Підхід до архітектури

- **Сторінки:** загальний layout + компоненти рівня маршрутів (Home, Blog, Article).
- **Компоненти:** згруповані за секціями (Header, SectionAbout, SectionServices, SectionForma тощо) з локальними підкомпонентами.
- **Стейт:** Redux store з RTK Query; стан форми в Formik.
- **i18n:** JSON-локалі (UA/EN); вкладені ключі для меню, послуг, опцій форми.
- **Роутинг:** вкладені маршрути в одному layout (header, footer, контент).

Глобального стейту для суто UI-даних немає; контекст використовується лише для breakpoint (мобільний/десктоп) там, де потрібно.

## 7. Про mock-дані

Інтеграція з бекендом реалізована через RTK Query (API статей). У демо використовуються **mock-дані** (`src/mock/blog.json`) для деплою без бекенду. Шар RTK Query на місці; перехід на реальний API — лише зміна джерела даних.
