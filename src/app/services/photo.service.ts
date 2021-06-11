import { Injectable } from '@angular/core';

// Dependências do capacitador + plug-ins câmera,filesystem e storage

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})

export class PhotoService { 

  constructor() { }
  public photos: any[] = [];

  public async addNewToGallery() {
    // Pegar a foto
    const capturedPhoto = await Camera.getPhoto({   // getPhoto - Abrirá a câmera do dispositivo, permitido a captura da img
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    });
    // this.photos.unshift({
    //   filepath: "soon...",
    //   webviewPath: capturedPhoto.webPath
    // });

  }




}
