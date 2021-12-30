/**
 * FRONT-END BR
 *
 */

const initialState = {
  selected: [],
  applyed: [],
  active: false,
  cards: [
    {
      index: 0,
      title: 'Estados',
      options: [
        { key: 0, active: false, text: 'Acre' },
        { key: 1, active: false, text: 'Alagoas' },
        { key: 2, active: false, text: 'Amapá' },
        { key: 3, active: false, text: 'Amazonas' },
        { key: 4, active: false, text: 'Bahia' },
        { key: 5, active: false, text: 'Ceará' },
        { key: 6, active: false, text: 'Distrito Federal' },
        { key: 7, active: false, text: 'Espírito Santo' },
        { key: 8, active: false, text: 'Goiás' },
        { key: 9, active: false, text: 'Maranhão' },
        { key: 10, active: false, text: 'Mato Grosso' },
        { key: 11, active: false, text: 'Mato Grosso do Sul' },
        { key: 12, active: false, text: 'Minas Gerais' },
        { key: 13, active: false, text: 'Pará' },
        { key: 14, active: false, text: 'Paraíba' },
        { key: 15, active: false, text: 'Paraná' },
        { key: 16, active: false, text: 'Pernambuco' },
        { key: 17, active: false, text: 'Piauí' },
        { key: 18, active: false, text: 'Rio de Janeiro' },
        { key: 19, active: false, text: 'Rio Grande do Norte' },
        { key: 20, active: false, text: 'Rio Grande do Sul' },
        { key: 21, active: false, text: 'Rondônia' },
        { key: 22, active: false, text: 'Roraima' },
        { key: 23, active: false, text: 'Santa Catarina' },
        { key: 24, active: false, text: 'São Paulo' },
        { key: 25, active: false, text: 'Sergipe' },
        { key: 26, active: false, text: 'Tocantins' },
      ],
    },
    {
      index: 1,
      title: 'Alocação',
      options: [
        { key: 0, active: false, text: 'Presencial' },
        { key: 1, active: false, text: 'Remoto' },
      ],
    },
    {
      index: 2,
      title: 'Experiência',
      options: [
        { key: 0, active: false, text: 'Júnior' },
        { key: 1, active: false, text: 'Pleno' },
        { key: 2, active: false, text: 'Sênior' },
        { key: 3, active: false, text: 'Especialista' },
      ],
    },
    {
      index: 3,
      title: 'Contratação',
      options: [
        { key: 0, active: false, text: 'CLT' },
        { key: 1, active: false, text: 'Contrato' },
        { key: 2, active: false, text: 'Estagiário' },
        { key: 3, active: false, text: 'PJ' },
        { key: 4, active: false, text: 'Traine' },
        { key: 5, active: false, text: 'Freela' },
      ],
    },
  ],
}

export default initialState
