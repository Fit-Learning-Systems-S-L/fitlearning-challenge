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

---

## 👥 Datos de Demostración

**¡La aplicación ya muestra 2 usuarios ficticios!** Esto te permite ver cómo se ve la interfaz mientras implementas la funcionalidad real.

Cuando ejecutes `ng serve`, verás:
- ✅ Ana García López (Madrid)
- ✅ Carlos Rodríguez Martín (Barcelona)
- ✅ Contador: "0 usuarios"
- ✅ Búsqueda funcional (prueba escribiendo "Ana" o "Carlos")
- ✅ Navegación a `/users` automática
- ✅ Clic en tarjetas navega a `/user/1` o `/user/2`

**Tu tarea:** Reemplazar estos datos ficticios con datos reales de la API.


## 🔧 TAREA 1: Implementar el Servicio de Usuarios

**Archivo:** `src/app/services/user.service.ts`

### Métodos a implementar:

#### 1.1 `getUsers()`
```typescript
getUsers(): Observable<User[]> {
  // Implementar llamada HTTP GET para obtener todos los usuarios
  // URL: https://jsonplaceholder.typicode.com/users
}
```

#### 1.2 `getUserById(id: number)`
```typescript
getUserById(id: number): Observable<User> {
  // Implementar llamada HTTP GET para obtener un usuario específico
  // URL: https://jsonplaceholder.typicode.com/users/{id}
}
```


## 🔧 TAREA 2: Implementar la Lista de Usuarios

**Archivo:** `src/app/components/user-list/user-list.component.ts`

### Métodos a implementar:

#### 2.1 `ngOnInit()`
```typescript
ngOnInit(): void {
  // Descomenta la línea: this.loadUsers();
  // Esto reemplazará los datos ficticios con datos reales de la API
}
```

#### 2.2 `loadUsers()`
```typescript
loadUsers(): void {
  // 1. Establecer isLoading = true
  // 2. Establecer hasError = false
  // 3. Llamar al servicio userService.getUsers()
  // 4. Suscribirse al Observable
  // 5. En caso de éxito: 
  //    - Asignar la respuesta a this.users
  //    - Asignar la respuesta a this.filteredUsers
  //    - Establecer isLoading = false
  // 6. En caso de error:
  //    - Establecer hasError = true
  //    - Establecer isLoading = false
}
```

#### 2.3 `onSearch()` (Opcional - ya funciona con datos ficticios)
```typescript
onSearch(): void {
  // El método ya está implementado para la demostración
  // Puedes dejarlo como está o mejorarlo si quieres
}
```

---

## 🔧 TAREA 3: Elegir Opción de Detalles

### Opción A: Modal (Más Simple)

Si prefieres usar **modal emergente**:

1. En `user-list.component.ts`, usa el método `onUserSelectedModal()` en lugar de `onUserSelected()`
2. El modal ya está implementado y funcionará automáticamente

### Opción B: Vista de Detalle con Routing (Más Avanzada)

Si prefieres **vista de detalle separada**:

**Archivo:** `src/app/components/user-detail/user-detail.component.ts`

#### 3.1 `ngOnInit()` - Ya implementado
El componente ya captura el ID de la URL automáticamente.

#### 3.2 `loadUser(id: number)`
```typescript
loadUser(id: number): void {
  // 1. Establecer isLoading = true
  // 2. Establecer hasError = false
  // 3. Llamar al servicio userService.getUserById(id)
  // 4. Suscribirse al Observable
  // 5. En caso de éxito: asignar usuario y establecer isLoading = false
  // 6. En caso de error: establecer hasError = true e isLoading = false
}
```

#### 3.3 Activar la carga
Descomenta la línea en `ngOnInit()`:
```typescript
// this.loadUser(this.userId);
```

---

## 🔧 TAREA 4: Actualizar Contador del Header (Opcional)

**Archivo:** `src/app/app.component.ts`

Puedes implementar el método `loadUsersForCounter()` para que el header muestre el número correcto de usuarios.

---

## ✅ Criterios de Evaluación

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

---

## 📚 Recursos Útiles

- [Angular HTTP Client](https://angular.io/guide/http)
- [Angular Routing](https://angular.io/guide/router)
- [RxJS Observables](https://rxjs.dev/guide/observable)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)

---

## ⏰ Tiempo Estimado

### Opción Modal (Más Simple):
- **Tarea 1 (Servicio):** 10-15 minutos
- **Tarea 2 (Lista):** 15-20 minutos
- **Pruebas:** 10-15 minutos
- **Total:** 35-50 minutos

### Opción Vista de Detalle (Más Avanzada):
- **Tarea 1 (Servicio):** 10-15 minutos
- **Tarea 2 (Lista):** 15-20 minutos
- **Tarea 3 (Detalle):** 15-20 minutos
- **Pruebas:** 10-15 minutos
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

**¡Buena suerte! 💪**
