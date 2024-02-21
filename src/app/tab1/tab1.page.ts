import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { FilePicker } from '@capawesome/capacitor-file-picker';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  images : any[] = [];
  constructor() {}

  attachment : any;
  data : any;

 async takePicture()
 {
    let data = await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100
    });

    // let data = await Camera.getPhoto({
    //   resultType: CameraResultType.DataUrl,
    //   source: CameraSource.Photos,
    //   quality: 100,
    //   });
  

    // this.photos.unshift({
    //   filepath: "soon...",
    //   webviewPath: capturedPhoto.webPath!
    // });

    // this.images.unshift({
    //   filepath: "soon...",
    //   webviewPath: data.webPath!
    // });

    this.images.push(data);
 }

 async addAttachment()
 {
  const result = await FilePicker.pickFiles({
    multiple: false,
  });

  const file = result.files[0];
  this.attachment = file.blob; 
  console.log(result);
  
  }

  async openFile(data : any)
  {
    await FileOpener.openFile({
      path: 'data',
    });
  }

 }

