import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ModalComponent } from '../../components/modal/modal';
import { Storage } from '@ionic/storage'


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  formProdutos: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public fb: FormBuilder, public modal: ModalController,
    public storage: Storage) {
      navParams.get('pin')
      this.formProdutos = fb.group({
      pin: [null,[Validators.required]],
    })
  }

  fazerModal(){
    this.storage.set('formProdutos', this.formProdutos.value)
    let modalProdutos=this.modal.create(ModalComponent)
    modalProdutos.present()
    }
}
