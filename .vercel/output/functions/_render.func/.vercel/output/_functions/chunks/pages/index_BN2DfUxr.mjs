import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, j as renderHead, k as renderSlot, m as maybeRenderHead, l as renderComponent } from '../astro_B33OjVNi.mjs';
/* empty css                          */
import { createLocalDatabaseClient, asDrizzleTable, seedLocal } from '@astrojs/db/runtime';
import { eq } from '@astrojs/db/dist/runtime/config.js';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/jorge/workspace/curso-astro-db/src/layouts/Layout.astro", void 0);

const dbUrl$1 = "file:///C:/Users/jorge/workspace/curso-astro-db/.astro/content.db";
const db$1 = createLocalDatabaseClient({ dbUrl: dbUrl$1 });

const User$1 = asDrizzleTable("User", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}},"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"User","primaryKey":false,"optional":false}},"username":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"username","collection":"User","primaryKey":false,"optional":false}}},"deprecated":false}, false);
const Todo$1 = asDrizzleTable("Todo", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Todo","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Todo","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Todo","primaryKey":false,"optional":false}},"user_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"user_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}}}},"category_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"category_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}}}}},"deprecated":false}, false);
const Category$1 = asDrizzleTable("Category", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}},"label":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"label","collection":"Category","primaryKey":false,"optional":false}}},"deprecated":false}, false);

async function seed() {
  await db$1.insert(User$1).values([
    { id: "111", email: "pepe@gmail.es", username: "pepe" },
    { id: "222", email: "luis@gmail.es", username: "luis" },
    { id: "333", email: "nati@gmail.es", username: "nati" }
  ]);
  await db$1.insert(Category$1).values([
    { id: "1111", label: "trabajo" },
    { id: "2222", label: "personal" }
  ]);
  await db$1.insert(Todo$1).values([
    {
      id: "11111",
      title: "hacer la compra",
      description: "comprar pan, leche y huevos",
      user_id: "111",
      category_id: "2222"
    },
    {
      id: "22222",
      title: "reunión",
      description: "reunión con el equipo",
      user_id: "222",
      category_id: "1111"
    },
    {
      id: "33333",
      title: "comer",
      description: "comer con los amigos",
      user_id: "333",
      category_id: "2222"
    },
    {
      id: "44444",
      title: "hacer deporte",
      description: "salir a correr",
      user_id: "111",
      category_id: "2222"
    }
  ]);
}

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: seed
}, Symbol.toStringTag, { value: 'Module' }));

const dbUrl = "file:///C:/Users/jorge/workspace/curso-astro-db/.astro/content.db";
const db = createLocalDatabaseClient({ dbUrl });

await seedLocal({
	db,
	tables: {"User":{"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}},"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"User","primaryKey":false,"optional":false}},"username":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"username","collection":"User","primaryKey":false,"optional":false}}},"deprecated":false},"Todo":{"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Todo","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Todo","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Todo","primaryKey":false,"optional":false}},"user_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"user_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}}}},"category_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"category_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}}}}},"deprecated":false},"Category":{"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}},"label":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"label","collection":"Category","primaryKey":false,"optional":false}}},"deprecated":false}},
	userSeedGlob: /* #__PURE__ */ Object.assign({"/db/seed.ts": __vite_glob_0_0}),
	integrationSeedFunctions: [],
});

const User = asDrizzleTable("User", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}},"email":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"email","collection":"User","primaryKey":false,"optional":false}},"username":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"username","collection":"User","primaryKey":false,"optional":false}}},"deprecated":false}, false);
const Todo = asDrizzleTable("Todo", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Todo","primaryKey":true}},"title":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"title","collection":"Todo","primaryKey":false,"optional":false}},"description":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"description","collection":"Todo","primaryKey":false,"optional":false}},"user_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"user_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"User","primaryKey":true}}}},"category_id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"category_id","collection":"Todo","primaryKey":false,"optional":false,"references":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}}}}},"deprecated":false}, false);
const Category = asDrizzleTable("Category", {"columns":{"id":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"id","collection":"Category","primaryKey":true}},"label":{"type":"text","schema":{"unique":true,"deprecated":false,"name":"label","collection":"Category","primaryKey":false,"optional":false}}},"deprecated":false}, false);

const $$Astro$2 = createAstro();
const $$CrearTodo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CrearTodo;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const titulo = formData.get("titulo");
    const descripcion = formData.get("descripcion");
    const categoria = formData.get("categoria");
    console.log({ titulo, descripcion, categoria });
    if (!titulo || !descripcion || !categoria) {
      return new Response("Faltan datos", { status: 400 });
    }
    if (typeof titulo === "string" && typeof descripcion === "string" && typeof categoria === "string" && titulo.length > 0 && descripcion.length > 0) {
      await db.insert(Todo).values({
        title: titulo,
        description: descripcion,
        category_id: categoria,
        user_id: "333"
      });
    } else {
      console.log("Datos incorrectos");
    }
  }
  const categories = await db.select().from(Category);
  return renderTemplate`${maybeRenderHead()}<form method="post" data-astro-cid-bliaqqdf> <label for="titulo" data-astro-cid-bliaqqdf>Título:</label> <input type="text" id="titulo" name="titulo" required data-astro-cid-bliaqqdf> <label for="descripcion" data-astro-cid-bliaqqdf>Descripción:</label> <textarea id="descripcion" name="descripcion" required data-astro-cid-bliaqqdf>  </textarea> <label for="categoria" data-astro-cid-bliaqqdf>Categoría:</label> <select id="categoria" name="categoria" required data-astro-cid-bliaqqdf> ${categories.map((category) => renderTemplate`<option${addAttribute(category.id, "value")} data-astro-cid-bliaqqdf>${category.label}</option>`)} </select> <button type="submit" data-astro-cid-bliaqqdf>Enviar</button> </form> `;
}, "C:/Users/jorge/workspace/curso-astro-db/src/components/CrearTodo.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-dohjnao5> <div class="content" data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </div> </article> `;
}, "C:/Users/jorge/workspace/curso-astro-db/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const todos = await db.select().from(Todo).innerJoin(User, eq(Todo.user_id, User.id)).innerJoin(Category, eq(Todo.category_id, Category.id));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Curso Astro db", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Astro <span class="text-gradient" data-astro-cid-j7pv25f6>db</span></h1> ${renderComponent($$result2, "CrearTodo", $$CrearTodo, { "data-astro-cid-j7pv25f6": true })} <ul role="list" class="grid" data-astro-cid-j7pv25f6> ${todos.map(({ Todo: Todo2, User: User2, Category: Category2 }) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": Todo2.title, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h4 data-astro-cid-j7pv25f6>Creado por: ${User2.username}</h4> <p data-astro-cid-j7pv25f6>Descricción: ${Todo2.description}</p> <code data-astro-cid-j7pv25f6>Category: ${Category2.label}</code> ` })}`)} </ul> </main> ` })} `;
}, "C:/Users/jorge/workspace/curso-astro-db/src/pages/index.astro", void 0);

const $$file = "C:/Users/jorge/workspace/curso-astro-db/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
