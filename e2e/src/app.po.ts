import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(path: string) {
    return browser.get(browser.baseUrl + `/${path}`) as Promise<any>;
  }

  setInputTipoVehiculoMoto(){
    element(by.tagName("select#TipoVehiculo")).click();
    element(by.css("#TipoVehiculo [value='MOTO']")).click();
  }

  setInputTipoVehiculoAuto(){
    element(by.tagName("select#TipoVehiculo")).click();
    element(by.css("#TipoVehiculo [value='AUTO']")).click();
  }

  setInputPlaca(placa: string) {
    return element(by.id('placa')).sendKeys(placa);
  }

  setInputCilindraje(cilindraje: string) {
    return element(by.id('cilindraje')).sendKeys(cilindraje);
  }

  
  setInputMarca(marca: string) {
    return element(by.id('marca')).sendKeys(marca);
  }
  setInputModelo(modelo: string) {
    return element(by.id('modelo')).sendKeys(modelo);
  }



  clickRegistrarVehiculo(){
    return element(by.buttonText("Registrar")).click();
  }

  obtenerMensajes(){

    return element(by.id("swal2-content")).getText() as Promise<string>;
  }


}