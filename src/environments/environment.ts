// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlgetvehiculos: 'http://localhost:8080/obtenervehiculos',
  urlpostvehiculos : 'http://localhost:8080/registrarHistorial',
  urlputretirovehiculo : 'http://localhost:8080/retirar/'

  // Ejemplo para probar front con back desde un cel
  // urlgetvehiculos: 'http:/ip del servidor/obtenervehiculos',
  // urlpostvehiculos : 'http:/ip del servidor/registrarHistorial',
  // urlputretirovehiculo : 'http:/ip del servidor/retirar/'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
