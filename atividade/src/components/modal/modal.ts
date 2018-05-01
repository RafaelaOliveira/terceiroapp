import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {Storage} from '@ionic/storage'


@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  public dados={pin:''}
  constructor(public viewCtrl: ViewController, public storage: Storage) {
    this.storage.get('formProdutos').then((res)=>{
    this.dados=res
    console.log(this.dados.pin)
  })
  }
  fechaModal(){
    this.viewCtrl.dismiss()
  }
}
