# 🚀 StoreIt - A Secure Custom Storage Solution

StoreIt is a secure, privacy-first file-sharing platform inspired by Google Drive. It allows users to upload, manage, and share files seamlessly with a focus on data protection and user control.

## 🔐 Features

- ✅ **OTP-based Authentication** (via Appwrite)
- ☁️ **Temporary File Storage with Amazon S3**
- 🛡️ **User Session Management**
- 📁 File Upload, Download, and Sharing
- 💡 Simple and Clean UI for easy navigation
- ⏳ Expiry-based file links for enhanced privacy

## 🛠️ Tech Stack

| Layer        | Technology          |
| ------------ | ------------------- |
| Frontend     | React, Tailwind CSS |
| Backend      | Appwrite            |
| File Storage | Amazon S3           |
| Auth         | Appwrite OTP Auth   |
| Deployment   | Vercel / Docker     |

## 📦 Setup & Installation

### Prerequisites

- Node.js (v18+)
- Docker (optional, for containerized deployment)
- Appwrite Server or Hosted Instance
- AWS Account (S3 Bucket)

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/storeit.git
cd storeit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_BUCKET_ID=your-bucket-id
VITE_APPWRITE_FUNCTION_ID=your-function-id
VITE_S3_TEMP_BUCKET_URL=your-s3-temp-bucket-url
```

### 4. Run Locally

```bash
npm run dev
```

### 5. Docker Deployment (Optional)

```bash
docker build -t storeit .
docker run -p 3000:3000 storeit
```

## 🌐 Live Demo

[🔗 View Live](https://storeit-topaz.vercel.app/)  

## 🧠 How It Works

1. Users sign in using OTP (via Appwrite)
2. Files are uploaded to a temporary S3 bucket
3. Appwrite handles session and access control
4. Expiry links allow secure temporary sharing

## 🧪 Future Enhancements

- 🔄 File versioning and rollback
- 🔍 Search and tag support
- 📊 Usage analytics dashboard
- 🔔 Email notifications for shared files

## 🤝 Contributing

1. Fork this repo
2. Create your branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add your message'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 🧑‍💻 Author

- **Shreyas Ladhe**  
[LinkedIn](https://linkedin.com/in/shreyasladhe) • [GitHub](https://github.com/ShreyasLadhe)
