import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleDetails from './components/ArticleDetails';
import ArticleList from './components/ArticleList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3' },

];

const products = [
  { id: 1, name: 'товар 1', description: 'описание товара 1', price: '100 руб' },
  { id: 2, name: 'товар 2', description: 'описание товара 2', price: '200 руб' },
  { id: 3, name: 'товар 3', description: 'описание товара 3', price: '300 руб' },
  { id: 4, name: 'товар 4', description: 'описание товара 4', price: '100 руб' },
  { id: 5, name: 'товар 5', description: 'описание товара 5', price: '100 руб' },
  { id: 6, name: 'товар 6', description: 'описание товара 6', price: '100 руб' },
  { id: 7, name: 'товар 7', description: 'описание товара 7', price: '100 руб' },
  { id: 8, name: 'товар 8', description: 'описание товара 8', price: '100 руб' },
  { id: 9, name: 'товар 9', description: 'описание товара 9', price: '100 руб' },
];
const App = () => (
  <BrowserRouter>
    <div className='App'>
      <h1>Приложение для просмотра статей</h1>

      <Routes>
        <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
        <Route path="/product/:productId" element={<ProductDetails products={products} />} />
        <Route path="/" element={<ProductList products={products} />} />

        <Route path="/articles/:id" element={<ArticleDetails articles={articles} />} />
        <Route path="*" element={<ArticleList articles={articles} />} />

      </Routes>
    </div>
  </BrowserRouter>
);


export default App;
