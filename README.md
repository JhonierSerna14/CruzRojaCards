# Cruz Roja Colombiana - Sede Villamaría

Una aplicación web moderna para mostrar los integrantes del equipo de la Cruz Roja Colombiana sede Villamaría. Construida con React, TypeScript y Vite.

## 🚀 Características

- **Interfaz moderna y responsive**: Diseño adaptable para dispositivos móviles y escritorio
- **Tarjetas interactivas**: Cada integrante tiene su propia tarjeta con información básica
- **Modal detallado**: Al hacer clic en una tarjeta se abre un modal con información completa
- **Búsqueda avanzada**: Buscar por nombre, cargo o usar filtros por rol
- **Diseño Cruz Roja**: Colores y estilo que reflejan la identidad de la organización

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de desarrollo y construcción rápida
- **CSS Modular** - Estilos organizados por componente

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Construcción para producción
```bash
# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabecera de la aplicación
│   ├── SearchBar.tsx   # Barra de búsqueda y filtros
│   ├── MemberGrid.tsx  # Grilla de tarjetas de miembros
│   ├── MemberCard.tsx  # Tarjeta individual de miembro
│   └── MemberModal.tsx # Modal con detalles del miembro
├── data/               # Datos de la aplicación
│   └── members.ts      # Información de los integrantes
├── types/              # Tipos de TypeScript
│   └── Member.ts       # Interfaz del miembro
└── App.tsx            # Componente principal
```

## 👥 Gestión de Integrantes

Los datos de los integrantes se encuentran en `src/data/members.ts`. Para añadir o modificar integrantes:

1. Edita el archivo `src/data/members.ts`
2. Sigue la estructura definida en `src/types/Member.ts`
3. Añade las fotos en la carpeta `public/placeholder-photos/`

### Estructura de un Integrante

```typescript
{
  id: number
  name: string
  role: string
  department: string
  photo: string
  description: string
  responsibilities: string[]
  contact?: {
    email?: string
    phone?: string
  }
  experience: string
  joinDate: string
}
```

## 🎨 Personalización

### Colores
Los colores principales de la Cruz Roja están definidos en los archivos CSS:
- **Rojo principal**: `#c41e3a`
- **Rojo oscuro**: `#8b1429`

### Fotos de Integrantes
- Coloca las fotos en `public/placeholder-photos/`
- Formato recomendado: JPG o PNG
- Resolución recomendada: 400x400px mínimo
- Si una foto no está disponible, se mostrará un placeholder automáticamente

## 🚀 Despliegue

Esta aplicación está lista para ser desplegada en cualquier servicio de hosting estático como:

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastra la carpeta `dist/` después de ejecutar `npm run build`
- **GitHub Pages**: Configura el workflow de GitHub Actions
- **Surge.sh**: `surge dist/`

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (320px+)
- 📟 Tablets (768px+)  
- 💻 Escritorio (1024px+)

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request


```
