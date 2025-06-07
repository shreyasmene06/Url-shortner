# 🔗 URL Shortener

A modern, fast, and efficient URL shortening service built with Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Custom Short URLs**: Option to create custom short URLs (if available)
- **Analytics**: Track the number of clicks and visits
- **TypeScript**: Built with type safety in mind
- **MongoDB**: Efficient and scalable database storage
- **RESTful API**: Clean and well-documented API endpoints

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Development**: Nodemon for hot reloading

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shreyasmene06/Url-shortner.git
   ```

2. Navigate to the server directory:
   ```bash
   cd server-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

### Create Short URL
- **POST** `/api/url/shorten`
  ```json
  {
    "longUrl": "https://your-long-url.com",
    "customUrl": "custom-name" // optional
  }
  ```

### Redirect to Original URL
- **GET** `/:shortUrl`

### Get URL Details
- **GET** `/api/url/:shortUrl`

## 📦 Project Structure

```
server-app/
├── src/
│   ├── config/
│   │   └── dbConfig.ts
│   ├── controllers/
│   │   └── shortUrl.ts
│   ├── models/
│   │   └── shortUrl.ts
│   ├── routes/
│   │   └── shortUrl.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

## 🔒 Environment Variables

The following environment variables are required:

- `MONGODB_URI`: Your MongoDB connection string
- `PORT`: Port number for the server (default: 5000)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Shreyas Mene**
- GitHub: [@shreyasmene06](https://github.com/shreyasmene06)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped this project grow
- Special thanks to the Node.js and MongoDB communities

---
⭐️ Star this repository if you find it helpful! 