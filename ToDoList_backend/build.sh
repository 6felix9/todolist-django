#!/bin/bash
set -e

echo "🛠 Building frontend..."
cd ../ToDoList
npm install
npm run build

echo "📦 Installing backend deps..."
cd ../ToDoList_backend
pip install -r requirements.txt

echo "📁 Copying frontend build to Django..."
mkdir -p templates/frontend static/frontend/assets
cp ../ToDoList/dist/index.html templates/frontend/index.html
cp -r ../ToDoList/dist/assets/* static/frontend/assets/

echo "🧼 Collecting static files..."
python manage.py collectstatic --noinput

echo "🧩 Running migrations..."
python manage.py migrate
