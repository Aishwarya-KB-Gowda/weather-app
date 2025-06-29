
# 🌦️ Weather App - Full Stack Project (React + Node.js + MySQL)

This is a simple full stack weather application built using:

✅ React (Frontend)
✅ Node.js + Express (Backend)
✅ OpenWeatherMap API (Weather Data)
✅ MySQL (Database to store search history)

---

## 🚀 Features

* Search current weather by city name
* Displays temperature & weather condition
* Saves searched city & temperature to MySQL database
* Displays recent search history (latest 10 results)
* Responsive & beginner-friendly interface
* Demonstrates Full Stack: Frontend ↔️ Backend ↔️ API ↔️ Database

---

## 📁 Project Structure

```
weather-app/
├── client/            # React Frontend
│   ├── public/
│   └── src/
│       ├── App.js
│       └── index.js
├── server.js          # Node.js Backend
├── package.json       # Backend dependencies
└── README.md
```

---

## ⚙️ Prerequisites

* Node.js & npm
* MySQL Server
* OpenWeatherMap API Key → [Get Free API Key](https://openweathermap.org/api)

---

## 💻 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Aishwarya-KB-Gowda/weather-app.git
cd weather-app
```

---

### 2️⃣ MySQL Setup

Login to MySQL:

```sql
CREATE DATABASE weatherdb;
USE weatherdb;

CREATE TABLE weatherdata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(255),
    temperature FLOAT,
    fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 3️⃣ Backend Setup (Node.js)

```bash
npm install
```

Update your **API Key** & MySQL credentials inside `server.js`:

```js
const API_KEY = 'YOUR_OPENWEATHER_API_KEY';
```

Start the backend:

```bash
node server.js
```

Backend runs on: [http://localhost:5000](http://localhost:5000)

---

### 4️⃣ Frontend Setup (React)

```bash
cd client
npm install
npm start
```

Frontend runs on: [http://localhost:3000](http://localhost:3000)

---

## 🌐 API Endpoints

* `GET /weather?city=CityName` → Fetch weather for given city
* `GET /history` → Fetch latest 10 search records from database

---

## 🎯 How It Works

* User enters city name in frontend
* React sends request to Node.js backend
* Backend calls OpenWeatherMap API to get weather data
* Backend saves city & temperature to MySQL
* Frontend displays weather and shows search history

---

## 📝 Future Enhancements

* Search history with pagination
* Show weather icons dynamically
* Better error handling for invalid cities
* Deploy to cloud platforms

---

## 👩‍💻 Author

**Aishwarya K B Gowda**
GitHub: [Aishwarya-KB-Gowda](https://github.com/Aishwarya-KB-Gowda)


