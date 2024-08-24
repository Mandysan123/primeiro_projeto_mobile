import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vetor = ['Amanda', 'Shirley', 'Lily', 'Frederico'];

  vetor2 = [
    {foto: 'assets/imgs/gatosorrindo.png', nome: "Amanda",telefone: '+55 88 988427989' , matricula: '4358743'},
    {foto: 'assets/imgs/gatin.png', nome: "Shirley",telefone: '+55 88 988768954', matricula: '1084572543'},
    {foto: 'assets/imgs/gatopreto.png', nome: "Lily",telefone: '+55 88 988654123', matricula: '348573654'},
    {foto: 'assets/imgs/gatochad.png', nome: "Frederico",telefone: '+55 88 988071365', matricula: '9806633'},
  ]

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {}

showPrompt() {
  const prompt = this.alertCtrl.create({
    title: 'Adicionar',
    message: "Insira o nome do seu Pet",
    inputs: [
      {
        name: 'title',
        placeholder: 'Nome'
      },
      {
        name: 'telefone',
        placeholder: 'Telefone'
      },

      {
        name: 'matricula',
        placeholder: 'Matricula'
      },
  
    ],
    buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('cancelado');
        }
      },
      {
        text: 'Adicionar',
        handler: data => {
          console.log('clicado', data.title);
          this.vetor.push(data.title);

          let a =  {foto: data.foto, nome: data.title ,telefone: data.telefone , matricula: data.matricula};
          this.vetor2.push(a);
        }
      }
    ]
  });
  prompt.present();
}

 excluir (item){
  console.log("excluir", item);

  for (let i = 0; i < this.vetor2.length; i++) {
    const element = this.vetor2[i];

    if (element.nome == item.nome){
      console.log('achei', element.nome)
      this.vetor2.splice(i,1)
    }
    
  }
 }

 showConfirm(item) {
  const confirm = this.alertCtrl.create({
    title: 'Excluir',
    message: 'Tem certeza que deseja excluir?',
    buttons: [
      {
        text: 'Não',
        handler: () => {
          console.log('Disagree clicked');
        }
      },
      {
        text: 'Sim',
        handler: () => {
          console.log('Agree clicked');
          this.excluir(item)
        }
      }
    ]
  });
  confirm.present();
}
}