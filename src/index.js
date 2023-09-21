
// import ReactDOM from 'react-dom/client';
// import React from 'react';


// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
// import 'bootstrap/dist/js/bootstrap.js'

// import App from './App'

// import 'bootstrap/dist/css/bootstrap.min.css'




// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector) // passes i18n down to react-i18next
//   .use(HttpApi) // passes i18n down to react-i18next
//   .init({
//     supportedLanguages: ['en', 'fr', 'ar', 'es'],
//     fallbackLng: "en",
//     detection: {
//       order: ['path', 'cookie','htmlTag', 'localStorage', 'sessionStorage' , 'subdomain'],
//       caches: ['cookie']
//     },
//     backend: {
//       loadPath: '/assets/locales/{{lng}}/translation.json',
//     }

//   });



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



////////////////

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'bootstrap/dist/js/bootstrap.js'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
