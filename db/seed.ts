import { db, Todo, User, Category } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    { id: '111', email: 'pepe@gmail.es', username: 'pepe' },
    { id: '222', email: 'luis@gmail.es', username: 'luis' },
    { id: '333', email: 'nati@gmail.es', username: 'nati' }
  ])

  await db.insert(Category).values([
    { id: '1111', label: 'trabajo' },
    { id: '2222', label: 'personal' }
  ])

  await db.insert(Todo).values([
    {
      id: '11111',
      title: 'hacer la compra',
      description: 'comprar pan, leche y huevos',
      user_id: '111',
      category_id: '2222'
    },
    {
      id: '22222',
      title: 'reunión',
      description: 'reunión con el equipo',
      user_id: '222',
      category_id: '1111'
    },
    {
      id: '33333',
      title: 'comer',
      description: 'comer con los amigos',
      user_id: '333',
      category_id: '2222'
    },
	{
	  id: '44444',
	  title: 'hacer deporte',
	  description: 'salir a correr',
	  user_id: '111',
	  category_id: '2222'
	}
  ])
}
