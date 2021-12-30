import AppReader from './AppReader'

export default {
  title: 'Components/Reader',
  component: AppReader,
}

const Template = args => <AppReader {...args} />

export const WithText = Template.bind({})
WithText.args = {
  children: "## Nossa empresa\r\n\r\nSomos uma spin-off da [KM Online](https://www.kmonline.com.br/), responsável pela construção da Conta payfy, uma conta de pagamento de meio de pagamento para empresas modernas.\r\n\r\nQueremos mudar a forma como empresas gerenciam os gastos em seus negócios. Para isso, contamos com um time fora da curva e distribuído por diversas cidades do Brasil. Além disso, não temos medo de inovar na tecnologia para entregar os melhores produtos!\r\n\r\nNossa stack é baseada principalmente em Elixir no backend, Phoenix liveview no frontend, serviços na AWS e app em Flutter.\r\n\r\n## Descrição da vaga\r\n \r\nEstamos buscando Software Developers que tenham interesse em trabalhar com Phoenix liveview e queiram encarar conosco o desafio de construir toda a plataforma web da Conta payfy, nos ajudando nas principais decisões técnicas e seus impactos no produto no médio/longo prazo.\r\n\r\n\r\n# Tipo de Contratação\r\n\r\nA contração será em regime PJ, com possibilidade de trabalho presencial nos escritórios de Florianópolis ou 100% remoto. Sim, você pode trabalhar de qualquer lugar do Brasil :)\r\n\r\n\r\n# O que não pode faltar\r\n\r\n- Interesse em trabalhar com Elixir e Phoenix liveview;\r\n- Nível de experiência: Pleno-sênior\r\n- Capacidade de produzir código limpo e de fácil manutenção;\r\n- Nível avançado de leitura e escrita em inglês; \r\n- Motivação por aprendizado e desenvolvimento contínuos;\r\n- Capacidade de se comunicar de forma concisa, franca e clara (também por escrito).\r\n\r\n\r\n## Contratação\r\n\r\nPJ a combinar\r\n\r\n## Como se candidatar\r\n\r\nPor favor envie um email para andre@payfy.io com seu CV anexado - enviar no assunto: Vaga Phoenix liveview Front-End Developer\r\n\r\nCostumamos enviar feedbacks em até 2 dias após cada processo.\r\n\r\nAbs,\r\nEquipe [payfy.io ](https://www.payfy.io/)"
};

