import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';
import './Analises.css';

function App() {
  return (
    <div className="App">
      <Box m="20px">
        <Header title="Análises Preventivas" subtitle="Ferramenta Assistiva para Prevenção" />
      </Box>
      <header className="App-header">
        <div className="iframe-container">
          <iframe
            title="Power BI Integration Frame"
            className="iframe-powerbi"
            src="https://app.powerbi.com/view?r=eyJrIjoiY2VjMDhmMTMtNjY0Ni00MTFlLTk2ZGYtZWVlNDk0ZjM1OTA0IiwidCI6IjU5YjdmNDVjLTdjNzYtNDNjMi1iOTU2LTRlNzlhNzNkOWEzNiJ9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
          <iframe
            title="Chatbot Integration Frame"
            className="iframe-chatbot"
            src="https://www.chatbase.co/chatbot-iframe/jGXg_wGFB2dJnFW8YX7_W"
            frameBorder="0"
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
