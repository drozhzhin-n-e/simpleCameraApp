import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, FilesystemDirectory, FilesystemEncoding, Filesystem } from '@capacitor/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  photo;
  photos:any = [];

  constructor(
    private sanitizer: DomSanitizer, 
    private camera: Camera,
    /*private geolocation: Geolocation*/) {}

  async takePhoto() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}