import AuthWrapper from './pages/auth-wrapper';
import { RenderRoutes } from './routes';

function App() {
  return (
    <AuthWrapper>
      <RenderRoutes />
    </AuthWrapper>
  );
}

export default App;
