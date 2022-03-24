FROM ubuntu:latest

RUN apt update && apt install cowsay

# CMD ["cowsay", "string"]
# preciso passar o caminho pois utilizando "cowsay", ele não localiza os pacotes instalados
# CMD [ "/usr/games/cowsay", "hei" ]

# já com run, funfa de boa
RUN cowsay "por favor, funfe"
