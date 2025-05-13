#!/bin/bash
cd ToDoList
npm install
npm run build

cd ../ToDoList_backend
pip install -r requirements.txt

mkdir -p templates/frontend
mkdir -p static/frontend/assets

cp ../ToDoList/dist/index.html templates/frontend/index.html
cp -r ../ToDoList/dist/assets/* static/frontend/assets/

python manage.py collectstatic --noinput
python manage.py migrate
