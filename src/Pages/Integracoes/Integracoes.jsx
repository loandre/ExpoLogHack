import React, { useState } from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Button, Paper, styled, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';

const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    '& .MuiFormControlLabel-root': {
        margin: theme.spacing(1),
    },
    '& .submitButton': {
        marginTop: theme.spacing(2),
        backgroundColor: '#52a10e',
        '&:hover': {
            backgroundColor: '#408c0a',
        },
    },
}));

const Integracoes = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Opção selecionada:", selectedOption);
    };

    const OptionLabel = ({ title, description }) => (
        <Box>
            <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold' }}>
                {title}
            </Typography>
            <Typography variant="body2" component="span">
                {`: ${description}`}
            </Typography>
        </Box>
    );

    return (
        <div>
            <Box m={isMobile ? 1 : 3}>
                <Header
                    title="Integrações inteligentes"
                    subtitle="A conexão entre dispositivos eletrônicos e elementos do ambiente torna o SemeIA, especializado em agronegócio, mais inteligente para oferecer assistência personalizada."
                />
            </Box>

            <StyledPaper>
                <FormControl component="fieldset" fullWidth>
                    <RadioGroup 
                        name="integracoes" 
                        value={selectedOption} 
                        onChange={handleOptionChange}
                        row={isMobile}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel 
                                    value="irrigacao" 
                                    control={<Radio />} 
                                    label={<OptionLabel title="Irrigação automatizada" description="Assistente inteligente para plantas que, por meio de sensores, fornece a quantidade ideal de água, promovendo crescimento saudável, eficiência hídrica e prevenção de problemas." />} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel 
                                    value="compostagem" 
                                    control={<Radio />} 
                                    label={<OptionLabel title="Compostagem inteligente" description="Sistema com sensores que acelera a compostagem, produzindo composto de alta qualidade, reduzindo custos, promovendo preservação ambiental e gerando energia renovável." />} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel 
                                    value="agricultura" 
                                    control={<Radio />} 
                                    label={<OptionLabel title="Agricultura de precisão" description="Auxiliar agrícola que utiliza tecnologias como GPS, GIS, sensores, drones e máquinas especiais para coletar informações sobre solo, clima e plantações, permitindo gestão otimizada e personalizada da fazenda." />} 
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControlLabel 
                                    value="robotica" 
                                    control={<Radio />} 
                                    label={<OptionLabel title="Robótica agrícola" description="Sistema programado para tarefas como plantio, colheita e poda, realizando-as de forma rápida e eficiente, atuando como uma equipe automatizada." />} 
                                />
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl>
                <Button
                    variant="contained"
                    className="submitButton"
                    onClick={handleSubmit}>
                    Submeter
                </Button>
            </StyledPaper>
        </div>
    );
};

export default Integracoes;
