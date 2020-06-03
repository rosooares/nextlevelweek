import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Lâmpadas', image: 'lampadas.svg' },
    {title: 'Pilhas e baterias', image: 'baterias.svg' },
    {title: 'Papeís e papelão', image: 'papeis-papelao.svg' },
    {title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
    {title: 'Resíduos Organicos', image: 'organicos.svg' },
    {title: 'Óleo de Cozinha', image: 'oleo.svg' },
  ]);
}