# 📝 Todo List Web App

A beautiful, feature-rich todo list application built with React. Stay organized and productive with this modern, responsive todo app that helps you manage your tasks efficiently.

![Todo App](https://img.shields.io/badge/React-19.1.1-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Live-brightgreen.svg)

## 🌟 Live Demo

Check out the live application: [Todo Web App](https://ajaykuraparthi.github.io/To-Do-WebApp)

## ✨ Features

### 🎯 Core Functionality
- **Add Todos**: Create new tasks with a simple input field
- **Mark Complete**: Toggle todo completion status with checkboxes
- **Edit Inline**: Double-click or use edit button to modify existing todos
- **Delete Tasks**: Remove unwanted todos with a single click
- **Persistent Storage**: All todos are automatically saved to localStorage

### 🔍 Advanced Features
- **Smart Filtering**: View All, Active, or Completed todos
- **Bulk Actions**: Mark all todos as complete/incomplete with one click
- **Clear Completed**: Remove all completed todos at once
- **Progress Tracking**: Visual progress bar showing completion percentage
- **Task Statistics**: Real-time count of total, active, and completed todos
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🎨 User Experience
- **Intuitive Interface**: Clean, modern design with emoji icons
- **Keyboard Shortcuts**: Press Escape to cancel editing
- **Auto-save**: Changes are automatically saved to localStorage
- **Empty States**: Helpful messages when no todos exist
- **Smooth Interactions**: Responsive feedback for all user actions

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ajaykuraparthi/To-Do-WebApp.git
   cd To-Do-WebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm test` | Launches the test runner |
| `npm run build` | Builds the app for production |
| `npm run eject` | Ejects from Create React App (one-way operation) |
| `npm run deploy` | Deploys the app to GitHub Pages |

## 📱 Usage Guide

### Adding a Todo
1. Type your task in the input field
2. Press Enter or click "Add Todo"
3. Your todo will appear at the top of the list

### Managing Todos
- **Complete**: Click the checkbox next to any todo
- **Edit**: Double-click the todo text or click the edit button (✏️)
- **Delete**: Click the delete button (🗑️)
- **Mark All**: Use the toggle button to mark all todos complete/incomplete

### Filtering Todos
- **All**: View all todos
- **Active**: Show only incomplete todos
- **Completed**: Show only completed todos

### Bulk Actions
- **Clear Completed**: Remove all completed todos
- **Toggle All**: Mark all todos as complete or incomplete

## 🏗️ Project Structure

```
to-do-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Todo.js          # Individual todo component
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

## 🔧 Technical Details

### Technologies Used
- **React 19.1.1**: Modern React with hooks
- **Create React App**: Development and build tooling
- **LocalStorage**: Client-side data persistence
- **CSS3**: Modern styling with flexbox and grid
- **GitHub Pages**: Static site hosting

### Key Components

#### App.js
- Main application component
- State management for todos, input, and filters
- LocalStorage integration
- Todo CRUD operations
- Filtering and bulk actions

#### Todo.js
- Individual todo item component
- Inline editing functionality
- Toggle completion status
- Delete functionality

### State Management
The app uses React's built-in `useState` and `useEffect` hooks for:
- Managing todo list state
- Handling user input
- Persisting data to localStorage
- Filtering and displaying todos

## 🎨 Customization

### Styling
The app uses CSS modules and custom CSS. You can customize:
- Colors and themes in `App.css`
- Component-specific styles
- Responsive breakpoints
- Animation effects

### Adding Features
Some ideas for extending the app:
- Due dates for todos
- Priority levels
- Categories or tags
- Drag and drop reordering
- Dark/light theme toggle
- Export/import functionality

## 🚀 Deployment

### GitHub Pages
The app is configured for automatic deployment to GitHub Pages:

```bash
npm run build
npm run deploy
```

### Other Platforms
You can deploy to any static hosting service:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ajay Kuraparthi**
- GitHub: [@ajaykuraparthi](https://github.com/ajaykuraparthi)
- Live Demo: [Todo Web App](https://ajaykuraparthi.github.io/To-Do-WebApp)

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons and emojis for better user experience
- React community for excellent documentation and resources

---

⭐ **Star this repository if you found it helpful!**

📧 **Have questions or suggestions?** Open an issue or reach out!

🔄 **Keep your todos organized and stay productive!**