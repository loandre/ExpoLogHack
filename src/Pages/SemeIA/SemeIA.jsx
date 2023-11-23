import React from 'react';
import './SemeIA.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="iframe-container">
          <iframe 
            title="Power BI Integration Frame"
            className="iframe-powerbi"
            src="https://app.powerbi.com/view?r=eyJrIjoiZDE3ZTVjMWMtZmFmOS00ZjZjLWEyYzItNDY4OTY1OWY4NzVjIiwidCI6IjU5YjdmNDVjLTdjNzYtNDNjMi1iOTU2LTRlNzlhNzNkOWEzNiJ9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
          <iframe
            title="Chatbot Integration Frame"
            className="iframe-chatbot"
            src="https://www.chatbase.co/chatbot-iframe/6TCTOB1VMfpWmZuUjooMx"
            frameBorder="0"
          ></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
