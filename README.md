# 🎯 INSTRUCCIONES PARA EL CANDIDATO

## 📋 Tareas a Completar

Tu objetivo es completar la implementación de esta aplicación Angular que muestra usuarios desde una API. La aplicación tiene **dos opciones para mostrar detalles de usuario**:

1. **Modal emergente** (más simple)
2. **Vista de detalle con routing** (más avanzada)

Puedes elegir implementar una o ambas opciones.

---

## 🏗️ Estructura de la Aplicación

La aplicación está organizada con **routing** y componentes separados:

- **AppComponent**: Header con logo y contador
- **UserListComponent**: Lista de usuarios con búsqueda (`/users`)
- **UserDetailComponent**: Vista detallada de usuario (`/user/:id`)
- **UserCardComponent**: Tarjeta individual de usuario
- **UserModalComponent**: Modal para detalles (opcional)


## 🔧 TAREA 1: Implementar el Servicio de Usuarios

### Funcionalidades requeridas:

#### 1.1 Obtener todos los usuarios
- Crear un método que retorne un Observable con la lista completa de usuarios
- Consumir la API: `https://jsonplaceholder.typicode.com/users`
- Usar HttpClient para realizar la petición GET

#### 1.2 Obtener un usuario específico
- Crear un método que reciba un ID y retorne un Observable con ese usuario
- Consumir la API: `https://jsonplaceholder.typicode.com/users/{id}`
- Manejar el caso cuando el usuario no existe

---

## 🔧 TAREA 2: Implementar la Lista de Usuarios

**Archivo:** `src/app/components/user-list/user-list.component.ts`

### Funcionalidades requeridas:

#### 2.1 Inicialización del componente
- Al cargar el componente, debe obtener la lista de usuarios desde la API
- Mostrar estados de carga mientras se obtienen los datos

#### 2.2 Carga de usuarios desde la API
- Implementar la lógica para obtener usuarios del servicio
- Manejar estados de carga (loading, success, error)
- Actualizar tanto la lista completa como la lista filtrada
- Mostrar mensajes de error apropiados si la API falla

#### 2.3 Funcionalidad de búsqueda (Opcional)
- Debe filtrar usuarios por nombre en tiempo real
- Debe ser insensible a mayúsculas/minúsculas

---

## 🔧 TAREA 3: Elegir Opción de Detalles

### Opción A: Modal (Más Simple)
Si prefieres **modal emergente**:
**Archivo:** `src/app/components/user-modal/user-modal.component.ts`
### Opción B: Vista de Detalle con Routing (Más Avanzada)
Si prefieres **vista de detalle separada**:
**Archivo:** `src/app/components/user-detail/user-detail.component.ts`

#### 3.1 Captura del ID desde la URL
El componente ya captura automáticamente el ID de la URL.

#### 3.2 Carga de datos del usuario
- Implementar la lógica para obtener un usuario específico por ID
- Usar el servicio para consumir la API
- Manejar estados de carga y error
- Mostrar mensaje apropiado si el usuario no existe

#### 3.3 Activación de la funcionalidad
- Activar la carga automática del usuario al inicializar el componente
- Asegurar que se muestre la información correcta

---

## 🔧 TAREA 4: Actualizar Contador del Header (Opcional)

**Archivo:** `src/app/app.component.ts`

- Implementar la lógica para mostrar el número correcto de usuarios en el header
- Puede ser un contador simple o más elaborado
- Debe actualizarse cuando se cargan los datos reales

---

## ✅ Criterios de Evaluación

### Funcionalidad Básica
- [ ] La aplicación carga y muestra usuarios reales de la API (no los ficticios)
- [ ] El buscador filtra usuarios por nombre en tiempo real
- [ ] Los detalles de usuario se muestran (modal O vista de detalle)
- [ ] Se manejan correctamente los estados de carga y error
- [ ] El routing funciona correctamente (si se elige vista de detalle)

### Implementación Técnica
- [ ] Uso correcto de Observables y suscripciones
- [ ] Implementación adecuada de llamadas HTTP
- [ ] Manejo apropiado de tipos TypeScript
- [ ] Código limpio y bien estructurado
- [ ] Uso correcto del routing (si aplica)

### Buenas Prácticas
- [ ] Manejo de errores
- [ ] Uso de async/await o Observables según corresponda
- [ ] Comentarios en código complejo (opcional)
- [ ] Creatividad en la implementación de soluciones

---

## 🚀 Cómo Probar tu Implementación

1. **Ejecutar la aplicación:**
   ```bash
   ng serve
   ```

2. **Estado inicial (con datos ficticios):**
   - ✅ Verás 2 usuarios de ejemplo
   - ✅ La búsqueda ya funciona
   - ✅ Los modales se abren correctamente
   - ✅ La navegación a `/user/1` y `/user/2` funciona

3. **Después de implementar (con datos reales):**
   - ✅ Se cargan 10 usuarios reales desde la API
   - ✅ El contador muestra "10 usuarios"
   - ✅ La búsqueda funciona con los datos reales
   - ✅ Se muestran estados de carga y error apropiados

4. **Probar casos edge:**
   - Buscar con texto que no existe
   - Buscar con espacios en blanco
   - Verificar que la búsqueda no es case sensitive
   - Probar navegación directa a URLs como `/user/999`

---

## 💡 Consejos y Libertad Creativa

- **Sé creativo:** No hay una única forma correcta de implementar estas funcionalidades
- **Nomenclatura:** Usa los nombres de métodos y propiedades que consideres más apropiados
- **Arquitectura:** Puedes reorganizar el código si crees que hay una mejor estructura
- **Funcionalidades extra:** Si tienes tiempo, puedes agregar mejoras adicionales
- **Estilos:** Puedes modificar los estilos CSS/SCSS si quieres mejorar la apariencia

---

## 📚 Recursos Útiles

- [Angular HTTP Client](https://angular.io/guide/http)
- [Angular Routing](https://angular.io/guide/router)
- [RxJS Observables](https://rxjs.dev/guide/observable)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

---

## ⏰ Tiempo Estimado

### Opción Modal (Más Simple):
- **Servicio de usuarios:** 10-15 minutos
- **Lista y búsqueda:** 15-20 minutos
- **Pruebas y ajustes:** 10-15 minutos
- **Total:** 35-50 minutos

### Opción Vista de Detalle (Más Avanzada):
- **Servicio de usuarios:** 10-15 minutos
- **Lista y búsqueda:** 15-20 minutos
- **Vista de detalle:** 15-20 minutos
- **Pruebas y ajustes:** 10-15 minutos
- **Total:** 50-70 minutos

---

## 🎯 Objetivo Final

Al completar estas tareas, tendrás una aplicación funcional que:
- Consume una API REST real
- Muestra datos en una interfaz atractiva con routing
- Permite búsqueda en tiempo real
- Muestra detalles de usuario (modal o vista separada)
- Maneja estados de carga y error
- Demuestra conocimientos de Angular y routing
- Refleja tu creatividad y estilo de programación

**¡Buena suerte! 💪**
