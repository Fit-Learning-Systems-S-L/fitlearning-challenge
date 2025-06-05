# 💡 Ejemplos de Implementación

Este archivo contiene ejemplos de cómo implementar las tareas principales. **¡No copies y pegues!** Úsalo como referencia para entender la estructura.

## 🔧 Ejemplo: UserService

```typescript
// src/app/services/user.service.ts
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl);
}

getUserById(id: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/${id}`);
}
```

## 🔧 Ejemplo: UserListComponent

```typescript
// src/app/components/user-list/user-list.component.ts
ngOnInit(): void {
  this.loadUsers();
}

loadUsers(): void {
  this.isLoading = true;
  this.hasError = false;
  
  this.userService.getUsers().subscribe({
    next: (users) => {
      this.users = users;
      this.filteredUsers = users;
      this.isLoading = false;
    },
    error: (error) => {
      this.hasError = true;
      this.isLoading = false;
      console.error('Error cargando usuarios:', error);
    }
  });
}

onSearch(): void {
  if (!this.searchTerm.trim()) {
    this.filteredUsers = [...this.users];
  } else {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
```

## 🔧 Ejemplo: UserDetailComponent (Opcional)

```typescript
// src/app/components/user-detail/user-detail.component.ts
ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.userId = +params['id'];
    if (this.userId) {
      this.loadUser(this.userId);
    }
  });
}

loadUser(id: number): void {
  this.isLoading = true;
  this.hasError = false;
  
  this.userService.getUserById(id).subscribe({
    next: (user) => {
      this.user = user;
      this.isLoading = false;
    },
    error: (error) => {
      this.hasError = true;
      this.isLoading = false;
      console.error('Error cargando usuario:', error);
    }
  });
}
```

## 🎯 Puntos Clave

1. **Siempre manejar estados**: `isLoading`, `hasError`
2. **Usar subscribe con next/error**: Para manejar respuestas y errores
3. **Filtrar arrays**: Con `filter()` y `includes()`
4. **Case insensitive**: Con `toLowerCase()`
5. **Verificar strings vacíos**: Con `trim()`

## 🚀 Cómo Probar

1. Implementa `UserService` primero
2. Luego `UserListComponent.loadUsers()`
3. Después `UserListComponent.onSearch()`
4. Finalmente `UserDetailComponent` (si eliges routing)

**¡Recuerda**: Este es solo un ejemplo. Implementa tu propia solución siguiendo las instrucciones del archivo `INSTRUCCIONES-CANDIDATO.md`. 
