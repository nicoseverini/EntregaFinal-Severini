import 'bootstrap/dist/css/bootstrap.min.css';
import { MainRoutes } from './routes';
import { CartProvider } from './context';

function App() {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
      </div>
    </CartProvider>
  )
}

export default App