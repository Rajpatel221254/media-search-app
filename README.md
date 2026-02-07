# 🎨 Media Search Application

A modern **frontend-only media search application** built with **React + Vite** that allows users to search **Photos, Videos, and GIFs** using external APIs and save their favorite media into a personal collection.

This project focuses on **clean UI/UX**, **state management with Redux**, and **real-world API integration**.

---

## 🚀 Features

- 🔍 Search media by keyword
- 🖼️ Browse **Photos**, 🎥 **Videos**, and 🎞️ **GIFs**
- 🔁 Switch between media types using tabs
- ❤️ Save media items to a personal collection
- 🗑️ Remove items from the collection
- 🧹 Filter collection by media type
- ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **Vite**
- **Redux Toolkit**
- **Axios**
- **Tailwind CSS**

### APIs Used
- **Unsplash** – Photos
- **Pixabay** – Videos
- **Tenor** – GIFs

> ⚠️ This is a **frontend-only application**.  
> No backend, database, or authentication is used.

---

## 🧠 State Management

Redux Toolkit is used to manage:

- Current search results
- Active media type (Photos / Videos / GIFs)
- Saved media collection
- Collection filters

Saved items can optionally be persisted using **localStorage**.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PIXABAY_KEY=your_pixabay_api_key
VITE_TENOR_KEY=your_tenor_api_key

