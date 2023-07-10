# HighloadMe challenge Frontend / React trainee

El sesafio es crear un cuestionario interactivo utilizando React.
puedes visitar el sition online en:
[Visitar sitio](https://cuestionario-app.netlify.app/)

# Tecnologias, Framewors y librerias

- [Tyscript](https://www.typescriptlang.org/)
- [React](http://reactjs.org)
- [Bootstrap](https://getbootstrap.com/)
- [React-bootstrap](https://react-bootstrap.netlify.app/)
- [Axios](https://axios-http.com/)

## Development

Para correr el proyecto debes clonarlo, usando git:

```
git clone https://github.com/Hernan-99/Hernan-99.github.io.git
cd Hernan-99.github.io
```

Instalar dependencias:

```
npm install
```

Ahora, puede iniciar un servidor web local ejecutando:

```
npm start
```

Luego abra http://localhost:3000 para verlo en el navegador.

# Docs

A continuacion algunas aclaraciones:

## API

El los mocks necesarios se encuentra en JsonApi/test.json. Sin embargo, se utilizo github pages para alojarlo y asi simular un API, puedes visitar el json en: https://hernan-99.github.io/JsonApi/test.json

## Funcionalidad

La app debe intentar llegar a un resultado visual lo más aproximado posible, siendo los siguientes los elementos requeridos.

Carousel que cambia de imágen al clickear (no en hover).
Area de detalle del producto (condición, cantidad vendida, título, precio).
Botones de Comprar ahora y Agregar al carrito.
Sección de preguntas y respuestas.
El resto de los elementos son opcionales pero altamente recomendados.

- Cada pregunta debe presentarse al usuario una a la vez, y el usuario debe poder seleccionar solo una respuesta de las opciones disponibles.
- La aplicación debe proporcionar una retroalimentación inmediata, indicando si la respuesta elegida es correcta o no.
- Al final del cuestionario, la aplicación debe mostrar el puntaje total al usuario y una opción para reiniciar el cuestionario.
