import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  resultado: string;
  senha: string;
  usuario: string;
  formLogin: FormGroup;
  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    navParams.get('user')
    navParams.get('pass')
    this.formLogin = fb.group({
      usuario: [null,[Validators.required]],
      senha: [null,[Validators.required]],
    })
  }

  Login(){
    if(this.usuario ==='unipam' && this.senha === '123'){
      let alert = this.alertCtrl.create(
        {
         title: 'Deseja ir a página de produtos?',
         buttons:[
           {
             text:'NÃO',
             handler: () =>{

             } 
           },
           {
            text:'SIM',
            handler: () =>{
              this.navCtrl.push('ProdutosPage')
            } 
          }
         ]
        }
      );
      alert.present();
    } else {
      this.resultado='Usuário ou senha inválidos!'
    }
  }
}
