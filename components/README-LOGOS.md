# Logos de MIRA LABS

## Ubicacion de los Archivos

Los logos estan disponibles en `/public/logos/` y se pueden acceder directamente desde el navegador.

### Archivos Disponibles

#### Logos para Fondo Claro (Light Background)
- `logo_lightbg_svg.svg` - Logo SVG (recomendado para web)
- `logo_lightbg_1x_png.png` - Logo PNG 1x
- `logo_lightbg_2x_png.png` - Logo PNG 2x (alta resolucion)
- `logo_lightbg_512w_png.png` - Logo PNG 512px width

#### Logos para Fondo Oscuro (Dark Background)
- `logo_darkbg_svg.svg` - Logo SVG (recomendado para web)
- `logo_darkbg_1x_png.png` - Logo PNG 1x
- `logo_darkbg_2x_png.png` - Logo PNG 2x (alta resolucion)

#### Favicons
- `favicons_light.zip` - Pack de favicons para tema claro
- `favicons_dark.zip` - Pack de favicons para tema oscuro

## Componente React: MiraLogo

Se ha creado un componente React para facilitar el uso de los logos en la aplicacion.

### Uso Basico

```tsx
import { MiraLogo } from "@/components/mira-logo";

// Logo para fondo claro (default)
<MiraLogo />

// Logo para fondo oscuro
<MiraLogo variant="dark" />

// Diferentes tamanos
<MiraLogo size="sm" />   // Pequeno: 120x40px
<MiraLogo size="md" />   // Mediano: 180x60px (default)
<MiraLogo size="lg" />   // Grande: 240x80px

// Con clase CSS personalizada
<MiraLogo className="my-custom-class" />
```

### Ejemplos de Uso

```tsx
// En el header con fondo blanco
<header className="bg-white">
  <MiraLogo variant="light" size="md" />
</header>

// En el footer con fondo oscuro
<footer className="bg-black">
  <MiraLogo variant="dark" size="sm" />
</footer>

// En una pagina con clase personalizada
<div className="hero-section">
  <MiraLogo
    variant="light"
    size="lg"
    className="mx-auto"
  />
</div>
```

## Uso Directo de Imagenes

Si prefieres usar las imagenes directamente sin el componente:

### Con Next.js Image

```tsx
import Image from "next/image";

<Image
  src="/logos/logo_lightbg_svg.svg"
  alt="MIRA LABS Logo"
  width={180}
  height={60}
  priority
/>
```

### HTML Tradicional

```html
<img
  src="/logos/logo_lightbg_svg.svg"
  alt="MIRA LABS Logo"
  width="180"
  height="60"
/>
```

## Recomendaciones

1. **Usa SVG cuando sea posible** - Mejor calidad en todas las resoluciones
2. **Usa PNG 2x para imagenes de alta resolucion** - En pantallas Retina
3. **Elige el variant correcto** - `light` para fondos claros, `dark` para fondos oscuros
4. **Usa el componente MiraLogo** - Para mantener consistencia en toda la aplicacion

## Header principal

El componente `SiteHeader` usa `MiraLogo` de forma predeterminada. Si en el futuro necesitas volver a mostrar el logo animado (`DotMatrixLogo`), puedes reemplazar la instancia de `MiraLogo` en `components/site-header.tsx` por `DotMatrixLogo`.
