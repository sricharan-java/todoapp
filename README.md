# Todo App

A modern, feature-rich Todo application built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Create, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- 🔄 Real-time character count and validation (350 character limit)
- 📱 Responsive design
- 🎨 Modern UI with smooth animations
- ⚡ Double-click to edit functionality
- 🔍 Text truncation with expand/collapse
- 🗑️ Confirmation dialog for deletion
- 🎯 Error handling and validation

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Custom Hooks for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd todo-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Usage

- **Add a Todo**: Type in the input field and press Enter or click "Add Todo"
- **Edit a Todo**: Double-click on the todo text
- **Delete a Todo**: Click the delete button and confirm
- **Mark as Complete**: Click the checkbox
- **View Full Text**: Click on truncated text to expand

## Project Structure

```
src/
├── components/
│   ├── TodoItem.tsx
│   ├── EditTodo.tsx
│   └── ConfirmDialog.tsx
├── hooks/
│   └── useTodo.ts
├── App.tsx
└── main.tsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
