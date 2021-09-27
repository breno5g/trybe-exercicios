# Notas sobre permissões

- R = read
- W = write
- X = execute

- Primeira seção é sobre o tipo de arquivo (- = arquivo comum) (D = diretorio)
- Segunda seção é sobre o usuario
- Terceira secão é o grupo de usuarios
- Quarta seção é outros usuarios

para editar as permissões é usado o comando chmod
o parametro seguinte é para definir qual tipo de usuario será alterado

- u = user
- g = group
- o = others

Em seguida é usado um + ou - para adicionar ou remover permissões
e logo após é passado a letra referente as quais permissões ele terá

## Exemplo

chmod u+rwx teste.sh

Isso irá dar todas as permissões para esse arquivo

 Você aprendeu no vídeo como alterar as permissões no modo literal (caracteres), mas também é possível usar o modo octal. Para compreendermos esta outra forma, precisamos entender que eles são administrados por meio de valores como descrito abaixo:

    Leitura r - 4
    Escrita w - 2
    Execução x - 1

Esses valores são permissões com base em bits de ligados = 1 e desligados = 0 ,

rwx = 111 ( 7 | Acesso Total )
r-- = 100 ( 4 | Somente Leitura )
-w- = 010 ( 2 | Somente Escrita )
--x = 001 ( 1 | Somente Execução )
rw- = 110 ( 6 | Somente Leitura e Escrita )
r-x = 101 ( 5 | Somente Leitura e Execução )
-wx = 011 ( 3 | Somente Escrita e Execução )
--- = 000 ( 0 | Todos Acessos Negados )

