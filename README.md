# HighloadMe challenge Frontend / React trainee

El desafio es crear un cuestionario interactivo utilizando React.
puedes visitar el sition online en:
[Visitar sitio](https://cuestionario-app.netlify.app/)

# Tecnologias, Frameworks y librerias

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

El los mocks necesarios se encuentra en JsonApi/test.json. Sin embargo, se utilizo github pages para alojar el json y asi simular un API, puedes visitar el json en: https://hernan-99.github.io/JsonApi/test.json

## Definicion de funcionalidad
- Cada pregunta se presentara al usuario una a la vez, y el usuario solo podra seleccionar una respuesta de las opciones disponibles.
- Cada pregunta tiene la opcion de mostrar una pista, mediante un boton.
- La aplicación proporciona una retroalimentacion visual inmediata, indicando si la respuesta elegida es correcta o no.
- Al finalizar el cuestionario, la aplicación muesta el puntaje total y un boton para volver a jugar.
