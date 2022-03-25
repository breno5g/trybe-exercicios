FROM ubuntu:latest

RUN apt update && apt install cowsay -y

# CMD ["cowsay", "string"]
# preciso passar o caminho pois utilizando "cowsay", ele não localiza os pacotes instalados
CMD [ "/usr/games/cowsay", "hei" ]

# RUN /usr/games/cowsay "por favor, funfe"

# CMD echo hoi
