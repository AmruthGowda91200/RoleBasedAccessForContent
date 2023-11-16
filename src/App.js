import AppRoutes from "./Routes/AppRoutes.jsx";

import Navbar from "./Componenets/Navbar.jsx"
import { CURRENT_USER,USER_TYPES } from './Routes/AppRoutes';

function App() {
  return (
    <div>
      <div>
        <Navbar CURRENT_USER={CURRENT_USER} USER_TYPES={USER_TYPES}  />
      </div>
      <AppRoutes />
    </div>
  );
}

export default App;
