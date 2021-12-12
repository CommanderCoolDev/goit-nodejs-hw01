# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/RZlayrNox6bX3k8vb7NY38W6FZNeEg

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/dfpB78zQGodhEiBkF36FtHT1QW1gy4

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/LuK6ucdnewoM8BmVos15Y8kFzUyetg

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/CUMdRakuEMD5MOv8gvdCfwyf96Hmdg
