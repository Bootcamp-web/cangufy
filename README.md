# Cangufy

![](./logo/CanguFy.png)


1. [Introducción](#schema1)
1. [Motivación.](#schema2)
1. [Objetivos](#schema3)
1. [Como instalar y ejecutar el proyecto](#schema4)
1. [Estrcutura de proyecto](#schema5)
1. [Dependencias del proyecto](#schema6)
1. [Modelos para la api](#schema7)
1. [Agradecimientos](#schema8)
1. [Documentación](#schema9)
<hr>

<a name="schema1"></a>

# 1 Introducción
Proyecto final de bootcamp de [Core-Code-School](https://www.corecode.school/) de desarrollo web cloud native.
En el que hemos aprendido, HTML y CSS, javascript, react... 

<hr>

<a name="schema2"></a>

# 2 Motivación

Poder ofrecer una aplicación que sea fácil y segura que ponga en contacto a  padres/madres y canguros.
Y sobre todo segura para los niños que las padres dejen a sus hijos con alguie de su confianza.

<hr>

<a name="schema3"></a>

# 3 Objetivos

- Conseguir que  padres/madres tengan la posibilidad de poder elegir canguro con diferentes perfiles, que por ejemplo sepan inglés, que puedan dar apoyo en alguna materia.

- Canguros que puedan ofrecer sus servicios a las personas que los necesiten. Y negarse si ellos lo consideran oportuno.

<hr>

<a name="schema4"></a>


# 4 Como instalar y ejecutar el proyecto
- Primero nos clonar el proyecto:
~~~
git clone 
~~~
- Segundo comando en la consola:

    - Arrancar `npm`
    - Intalar las packages de `npm`
    - Arrancar la aplicación
~~~
npm init -y
npm install
npm run dev
~~~

<hr>

<a name="schema5"></a>

# 5 Estrcutura de proyecto
~~~
cangufy
    │
    |   packages
    |    ├── front
    │    |    ├── ...
    │    |    └── package.json
    |    |
    |    └── api
    |         ├── ...
    |         └── package.json
    │
    ├── .gitignore
    ├── .eslintrc.json
    ├── package.json
    ├── lerna.json
    └── README.md
~~~
<hr>

<a name="schema6"></a>

# 6 Dependencias del proyecto

| Front      | Api          | All           |
| ---------- | -------------| --------------|
| next.js    | dotenv       | auth0         |
| parcel     | fastify      | axios         |
| react      | fastify-cors | eslint        |
|            | ts-node      | lerna         |
|            | mongoose     | typescript    |
|            | nodemon      | npm           |
|            | pino         |               |
|            | pino-pretty  |               |

<hr>

<a name="schema7 "></a>

# 7 Modelos para la api
Tengo cuatro modelos.
- Parents
~~~ts
const schema = new Schema({
  firstName: {type: String,require: true},
  lastName: {type: String,require: true},  
  email:String,
  location: {type: String,require: true},
  schedule:{type: Date,require: true},
  price_max:{type: Number,require: true},
  numChildren:{type: Number,require: true},
  additionalFeatures:{
    type:[String],
    enum: {
      values: ['English', 'Maths'],
      message: '{VALUE} is not supported'
    }
  }
});
~~~
- Children
~~~ts
const schema = new Schema({
    name:  { type: String, require: true },
    age: {type: Number,required: true},
    parentId:{ type: Schema.Types.ObjectId, ref: "Parents" }
   
});
~~~
- Nanny
~~~ts
const schema = new Schema({
    firstName: {type: String,require: true},
    lastName: {type: String,require: true},
    minAge: {type: Number,required: true},
    maxAge: {type: Number,required: true},
    email: {type: String,require: true},
    location: {type: String,require: true},
    pricePerHour:{type: Number,require: true},
    additionalFeatures:{
        type:[String], 
        require: true,
        enum: {
          values: ['English', 'Maths'],
          message: '{VALUE} is not supported'
        }
    }
});
~~~
- Booking
~~~ts
const schema = new Schema({
    nannyId: { type: Schema.Types.ObjectId, ref: "Nanny" },
    parentsId: { type: Schema.Types.ObjectId, ref: "Parents" },
    dateStart:{ type: Date, require: true},
    confirmed:{ type: Boolean},
})
~~~

<hr>

<a name="schema8"></a>

# 8 Agradecimientos

A mi, por haberme decidido a hacer el bootcamp. 

A Marcos por tener la santa panciencia de enseñarnos.

A los compañeros por sin ellos no hubiera sido igual.

Y a [Core-Code-School](https://www.corecode.school/) por darme la oportunidad de hacer el bootcamp.




![](https://media.giphy.com/media/jDEYTPQ3sqnOyu2Dx2/giphy.gif)

<hr>

<a name="schema9 "></a>

# 9  Documentación

 [Auth0](https://auth0.com/)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Mongoose](https://mongoosejs.com/docs/)
- [Next.js](https://nextjs.org/)
- [React](https://es.reactjs.org/)
- [Apuntes](https://www.corecode.school/) si los quieres apúntante en el próximo bootcamp.







