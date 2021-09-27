# Notas sobre git:

- git log = exibe o log de commits

  ```bash
  git log
  ```

- git status = Exibe o status atual do versionamento

  ```bash
  git status

- git rm = Remove um arquivo

  ```bash
  git remove nomeDoArquivo

- git checkout = Switch branches or restore working tree files

  ```bash
  git checkout nomeDaBranch
  ```

  ```bash
  git checkout hashDoArquivo~1 nomeDoArquivo
  ```

- git ignore = Ignora os arquivos

  ```bash
  cat > .gitignore
  arquivos a ser ignorado
  ```

- git merge = funde duas branchs

  ```bash
  git merge nomeDaBranch # funde com a master
  ```