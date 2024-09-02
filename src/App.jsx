import GlobalStateProvider from './contexts/GlobalStateContext';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <GlobalStateProvider>
      <AppRoutes />
    </GlobalStateProvider>
  );
};

export default App;
