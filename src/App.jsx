import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

// Importing HomePage using lazy loading
const LazyHomePage = React.lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div className='lazyLoading'>Loading...</div>}><LazyHomePage /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
