import {ElementRef} from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';

class Utils {


  static mostrarAlerta(texto: string, icono: SweetAlertIcon = 'info', campo?: ElementRef) {
    Swal.fire({title: texto, icon: icono, target: 'body'})
    let promise = Swal.fire({
      title: texto,
      icon: icono,
      target: 'body',

      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
    });

    promise.then(() => {
      if (campo) {
        this.asignarFocusCampo(campo)
      }
    });

    return promise;
  }

  static guardarLocal(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  static obtenerLocal(key: string) {
    let dato = localStorage.getItem(key);
    if (dato) {
      return JSON.parse(dato);
    }
    return null;
  }

  static mostrarAlertaVehiculo(texto: string, campo: any, icono: SweetAlertIcon = 'info') {
    //let placas: Array<VehiculoEntity> = [];
    Swal.fire({title: texto, icon: icono, target: 'body'})
    Swal.fire({
      title: texto,
      icon: icono,
      target: 'body',

      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showDenyButton: true,
      confirmButtonColor: '#3F8721',
      confirmButtonText: 'Continuar',
      denyButtonText: `Quitar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        Swal.fire('Vehículo eliminado de la gestión', '', 'info');
        campo.cdunivehiculo = -1
      }
    });
  }

  static mostrarAlertaConfirmacion(texto: string, aceptarTexto: string = 'Aceptar', cancelarTexto: string = 'Cancelar',  icono: SweetAlertIcon = 'warning') {
    return Swal.fire({
      title: texto,
      icon: icono,
      target: 'body',

      showClass: {
        popup: 'animated fadeInDown faster'
      },
      hideClass: {
        popup: 'animated fadeOutUp faster'
      },
      showDenyButton: true,
      confirmButtonColor: '#3F8721',
      confirmButtonText: aceptarTexto,
      denyButtonText: cancelarTexto,
    });
  }

  static asignarFocusCampo(campo: ElementRef) {
    setTimeout(() => {
      campo.nativeElement.focus();
    }, 500);
  }

  static validarInactivo(listaInactiva: Array<any>, campoId: string, mensage: string, id?: string) {
    if (listaInactiva.find(obj => obj[campoId] === id)) {
      Utils.mostrarAlerta(mensage, 'warning');
    }
  }

}

export default Utils;
