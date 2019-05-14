import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angular01';
  boasVindas = 'Disneylândia';

  nome = 'Felipe';
  sobrenome = 'Severo';  
  email = 'felipe@gmail.com';


  nomePets=[];
  nomePet = '';
  idades = []; 
  idade = ''; 
  
  addPet(){
    this.nomePets.push(this.nomePet);
    this.idades.push(this.idade);
  }

// INICIO ATIVIDADE 5 
  exibe='';
	mensagem ="";
	vasco = ["Pikachu","Valdivia","Sidão","Werley","Bruno Cheddar","Maxi Lopez"];
	
  escolha(event){
	
	if ( event == "Pikachu" ){
		this.exibe="Acertou o pokémon escolhido!";
	}else{
		this.exibe="Ainda não acertou o pokémon escolhido!";
	}
	
	this.mensagem = event;
	
  }

//Ação do botão da atividade 5
 acionaEvento(){
	if ( this.exibe == '' || this.exibe == ' ' ){
		alert("Não houve escolha no menu");
		console.log(event);
	}else{
		alert("Você escolheu o pokémon " + this.mensagem);
		console.log(event);
	}
 } 
//FIM ATIVIDADE 5
}
