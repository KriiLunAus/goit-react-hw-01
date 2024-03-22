import './App.css'
import Alert from './Alert'


export default function App() {
  return (
     <div>
      <Alert variant="error">
        You stupid
      </Alert>
      <Alert variant="info">
        You are not stupid
      </Alert>
    </div>
  );
}


