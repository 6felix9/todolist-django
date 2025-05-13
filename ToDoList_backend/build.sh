#!/bin/bash

# 1) Build frontend (one level up)
cd ../ToDoList
npm install
npm run build

# 2) Back into backend
cd ../ToDoList_backend
pip install -r requirements.txt

# 3) Copy assets
mkdir -p templates/frontend static/frontend/assets
cp ../ToDoList/dist/index.html templates/frontend/index.html
cp -r ../ToDoList/dist/assets/* static/frontend/assets/

# 4) Django steps
python manage.py collectstatic --noinput
python manage.py migrate
