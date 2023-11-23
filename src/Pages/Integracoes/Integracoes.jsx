import React, { useState } from 'react';

function SupportScreen() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isOptionSelected = selectedOption !== '';

    return (
        <div className="support-screen">
            <div className="card">
                <h1>Opções Inteligentes do Mercado</h1>
                <h2>Escolha a Solução e Obtenha Suporte</h2>

                <label htmlFor="options-select">Escolha uma Opção de Suporte:</label>
                <select id="options-select" value={selectedOption} onChange={handleSelectChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="compostagem">Compostagem Inteligente</option>
                    <option value="irrigacao">Irrigação Inteligente</option>
                </select>

                {isOptionSelected && (
                    <button onClick={() => console.log('Obtendo suporte para:', selectedOption)}>
                        Obter Suporte
                    </button>
                )}
            </div>
        </div>
    );
}

export default SupportScreen;
