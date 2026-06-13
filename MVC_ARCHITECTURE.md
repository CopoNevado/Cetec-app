# Arquitectura MVC - CharacterVerse

## Estructura del Proyecto

```
src/
├── models/               # Capa de datos
│   └── Character.js     # Modelo de datos
├── controllers/          # Capa lógica de negocio
│   └── CharacterController.js
├── services/            # Servicios externos
│   ├── api.js
│   └── pokemonDetailService.js
├── components/          # Componentes reutilizables (View)
├── pages/              # Páginas principales (View)
├── hooks/              # Custom hooks React
├── styles/             # Estilos coherentes
└── index.css
```

## Capas MVC

### Model (Capa de Datos)
- **Character.js**: Define la estructura de datos de un personaje
  - Propiedades: id, name, image, types, species, generation
  - Método: getTypeColor() para obtener color del tipo

### Controller (Lógica de Negocio)
- **CharacterController.js**: Centraliza la lógica de filtrado y búsqueda
  - getCharacters(): Obtiene y mapea caracteres
  - filterCharacters(): Filtra por búsqueda, tipo y generación
  - getCharacterById(): Busca un carácter específico

### View (Interfaz de Usuario)
- **Componentes**: CharacterCard, CharacterList, SearchBar, Filter
- **Páginas**: Home, Detail, Favorites, NotFound
- **Estilos**: Diseño minimalista, coherente y profesional

## Paleta de Colores Minimalista

- Fondo: #f8f9fa (gris muy claro)
- Texto principal: #2c3e50 (gris oscuro)
- Fondos de componentes: #ffffff (blanco)
- Bordes: #e5e5e5 (gris claro)
- Botones: #2c3e50 (gris oscuro)
- Sombras: rgba(0, 0, 0, 0.08-0.12)

## Mejoras Realizadas

✅ Removido efecto holográfico (animation: holo)
✅ Removido efecto de flotación (animation: floatCard)
✅ Removido blur y efectos neón
✅ Diseño minimalista y profesional
✅ Paleta de colores coherente
✅ Separación clara de responsabilidades (MVC)
✅ Mejor UX con transiciones suaves
✅ Responsive design mejorado
