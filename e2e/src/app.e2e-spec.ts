import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('Ingresar Vehiculo moto', () => {
    const placa = generarPlacaVehiculo();
    const cilindraje = "510";
    const marca = "Dr650";
    const modelo = "2013";
    page.navigateTo('vehiculos');
    page.setInputTipoVehiculo();
    page.setInputPlaca(placa);
    page.setInputCilindraje(cilindraje);
    page.setInputMarca(marca);
    page.setInputModelo(modelo);
    page.clickRegistrarVehiculo().then(
      ()=>{
        expect(page.obtenerMensajeRegistro()).toEqual(`Registro éxitoso`);
      }
    );

  });

  function generarPlacaVehiculo() {
    
     var numeroAleatorios = (Math.floor(Math.random() * 90) + 10); 
    var concatenarNumerosPlaca= "NZF"+numeroAleatorios+"D";
    return concatenarNumerosPlaca;  
  }


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
