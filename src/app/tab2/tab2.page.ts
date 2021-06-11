import { Component } from '@angular/core';

// Chamada da classe - captura de img através da câmera
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }

//Chamar método do serviço importado - PhotoService 
  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
}
