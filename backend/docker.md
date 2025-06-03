# sudo apt update
Actualiza los paquetes de ubuntu
# sudo apt install nodejs
instala node.js en el sistema
# sudo apt install npm
instalar el gestor de paquetes de node.js
# node -v
comprbar y ver la version de node
# npm -v
comprobar y ver la version de npm
# sudo apt install git
instalar git en ubuntu
# git --version
verificar la instlacion y ver la version de git
# gir clone https://github.com/ortegaedwin14/herramientas.git
clonar del respositorio remoto a la instancia
# sudo apt install docker.io
instalar docker en ubuntu
# sudo systemctl start docker
inicia el servicio de cocker
# sudo systemctl enable docker
habilita para que docker inice igual que el sistema
# docker --version
ver la version de cocker
# docker images
lista la iamgenes disponibles
# docker ps
muestra la lista de contenedores
# docker ps -a
solo contenedores activos
# sudo docker run -p 3000:3000 --restart always node hello
crea y ejecuta un contenedor de node.js con reinicio automatico
