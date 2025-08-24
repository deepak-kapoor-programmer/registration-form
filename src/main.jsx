
// import { createRoot } from 'react-dom/client'
// // import { configureStore } from 'react-redux'
// import { configureStore } from ; 

// import formSlice from './redux/formSlice.js'
// import { Provider } from 'react-redux'
// const store = configureStore({
//     reducer: {
//         form: formSlice
//     }
// })
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <App />
//     </Provider>

// )
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import formSlice from './redux/formSlice.js'; 
import { Provider } from 'react-redux';
import App from './App.jsx';

const store = configureStore({
    reducer: {
        form: formSlice
    }
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
