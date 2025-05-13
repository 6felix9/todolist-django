#!/bin/bash
set -e

echo "🔧 Building frontend..."
cd ../ToDoList
npm install
npm run build

echo "📦 Copying frontend to Django..."
cd ../ToDoList_backend
mkdir -p static/frontend/assets templates/frontend
cp ../ToDoList/dist/index.html templates/frontend/index.html
cp ../ToDoList/dist/index.css static/frontend/assets/
cp ../ToDoList/dist/index.js static/frontend/assets/

echo "🧼 Django setup..."
pip install -r requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
