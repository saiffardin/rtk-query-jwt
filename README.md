# React + TypeScript + Vite

ami JWT er ekta full flow implement korar cheshta korsi. ei koyta jinish eikhane korsi so far:

1. login er pore JWT redux-store (`RS`) & local-storage (`LS`) a rakha hoise
2. page refresh marle `LS` thike niye abar `RS` a rakha hoise
3. each api call er age __access-token `LS` thike read kore, req er header a add kora hoise.__
    - j shob endpoints a header dorkar kebol shegulai add kora hoise, etar jonno 2 ta `createApi` kora lage nai. 1 ta diyei kora gese 
4. access-token expire hoye gele
    - refresh-token diye new JWT anbo, and `RS` & `LS` a rakhbo
    - j koyta dead-call hobe, oi call gula abar korte hobe.
    - suppose 4 ta dead call holo, 4 baar refresh-token er api call hobe na (async-mutex)




## Run Local Json Server

npx json-server --watch db.json --port 5000
