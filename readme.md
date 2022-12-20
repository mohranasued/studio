Como compilar o projeto e enviar para o Githupages

Realizar os commits pendentes e fazer o push.

No diretório raiz do projeto executar o comando:

ionic build --prod --base-href https://mohranasued.github.io/studio/

Depois de executar o comando executar esse outro comando para renviar os arquivos de build para o githubpages
npx angular-cli-ghpages --dir=www