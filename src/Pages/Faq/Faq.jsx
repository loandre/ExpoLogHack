import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Perguntas Mais Frequentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography Typography color={colors.purpleAccent[500]} variant="h5">
            Como posso acessar o dashboard do SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Você pode acessar o dashboard do SemeIA através do nosso site ou aplicativo, usando suas credenciais de login fornecidas no momento do registro.
         </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Como o SemeIA Assist pode me ajudar na tomada de decisões?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            O SemeIA Assist analisa os dados do dashboard e sugere ações proativas com base nesses dados. Isso pode ajudá-lo a tomar decisões informadas e oportunas para melhorar a eficiência e a produtividade.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Quais tipos de dados são exibidos na seção de Análises?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A seção de Análises oferece uma visão mais detalhada, com infográficos densos e informações específicas sobre irrigação, precipitação, pragas sazonais e outros dados relevantes para o agronegócio.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Como posso integrar meus sistemas de irrigação e plantio inteligentes com o SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A seção de Integrações do dashboard demonstra como seria a integração de soluções inteligentes existentes com nossa plataforma. Para assistência personalizada, você pode entrar em contato com nossa equipe de suporte.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            Como posso adicionar eventos ao Calendário?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Você pode adicionar eventos ao Calendário clicando na data desejada e preenchendo os detalhes do evento na janela pop-up.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
            O SemeIA é compatível com quais dispositivos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O SemeIA é compatível com todos os dispositivos modernos, incluindo desktops, laptops, tablets e smartphones.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Como posso garantir a segurança dos meus dados no SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Nós levamos a segurança dos dados muito a sério no SemeIA. Utilizamos criptografia de ponta a ponta e outras medidas de segurança para garantir que seus dados estejam sempre seguros.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Existe um limite para a quantidade de dados que posso armazenar no SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          O limite de dados depende do plano de assinatura que você escolheu. Para mais detalhes, você pode consultar nossa página de planos de preços.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Como posso obter suporte se tiver problemas com o SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Você pode obter suporte entrando em contato com nossa equipe de suporte através do e-mail fornecido em nosso site ou aplicativo.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant="h5">
          Existem planos de preços diferentes para o SemeIA?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sim, oferecemos vários planos de preços para atender às diferentes necessidades dos nossos usuários. Você pode encontrar mais detalhes em nossa página de planos de preços.          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
