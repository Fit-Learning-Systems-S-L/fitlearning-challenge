# 📁 Assets - Imágenes

## 🏢 Logo de la Empresa

Para añadir el logo de tu empresa:

1. **Coloca tu archivo de logo** en esta carpeta con el nombre `logo-empresa.png`
2. **Formatos soportados:** PNG, JPG, SVG
3. **Tamaño recomendado:** 
   - Altura: 60-120px
   - Ancho: máximo 200px
   - Fondo transparente (PNG) para mejor integración

## 📝 Nombres de archivo aceptados:
- `logo-empresa.png` (recomendado)
- `logo-empresa.jpg`
- `logo-empresa.svg`

## 🎨 Consideraciones de diseño:
- El logo se mostrará en **color blanco** sobre fondo degradado
- Si tu logo es oscuro, se aplicará automáticamente un filtro para hacerlo blanco
- Si necesitas mantener los colores originales, comenta la línea `filter: brightness(0) invert(1);` en `app.component.scss`

## 🔄 Si no tienes logo:
Si no tienes un logo disponible, puedes:
1. Comentar o eliminar la línea del `<img>` en `app.component.html`
2. O reemplazar con el nombre de tu empresa:
   ```html
   <div class="logo-section">
     <span class="company-name">TU EMPRESA</span>
   </div>
   ``` 
