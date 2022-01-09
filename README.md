# Description 
Proxy project for Bank Al Etihad  
Application to administrate roles and access to reports from OBIEE

# Tech stack
Language: Typescript 4.3  
Framework: React 17.0  
CI/CD bundle assembler: Vite 2.6  
UI kit: Chakra UI 1.7  
Internationalization module: i18next 21.5  
Data API accessing modules: GraphQL 16.0, GQty 2.1  
Tables management module: React Table 7.7  
Forms management module: React Hook Form 7.19  

# CI/CD
### To install Node modules
```console
cd reporting-consumer
npm i
```

### To configure API point used in the environment 
`http://localhost:8000/` as an instance
```console
echo "VITE_BACKEND_API_ROUTE=http://localhost:8000/" > .env
```

> ⚡ also `.env.development`, `.env.production` etc. could be used as described [here](https://vitejs.dev/guide/env-and-mode.html) 

### To build web bundle into `./dist` subfolder 
```console
npm run build
```

> ⚡ bundle `./dist` should be served for http reqests with any Web Server as Single Page Application

### To serve web bundle from `./dist` with Node.js (optional)
```console
npm run serve
```

# Development
### To build and serve development with Hot Module Replacement
```console
npm run dev
```
