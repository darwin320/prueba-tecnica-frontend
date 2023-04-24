import { Component } from '@angular/core';
import { FileInfo, FileSelectComponent, FileState } from '@progress/kendo-angular-upload';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  files: File[] = [];

  separators: string[] = [',','.','%','otro'];

  isActiveOther:boolean = false;

  constructor() {
    // Inicializar el arreglo de archivos con un archivo de ejemplo

  }

  public onFileSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type !== 'text/plain' && file.type !== 'text/csv') {
        alert('Solo se permiten archivos de texto y CSV');
        continue;
      }
      this.files.push(file);
    }
  }
  public onFileSelect(event: any) {
    this.files = [...event.target.files];
  }

  public onDeleteFile(file: any) {
    const index = this.files.indexOf(file);
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  public openEditUserModal(){
    if(this.files.length==0){
      alert('Selecciona Al menos un archivo');
      
    }
  }


}
