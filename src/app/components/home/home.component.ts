import { Component } from '@angular/core';
import { MainLoaderService } from '../loaders/main-loader.service';
import { Campana } from 'src/app/models/campana';
import { CampanaApiService } from 'src/app/services/api/campana/campana-api.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResultsComponent } from 'src/app/results/results.component';


export class FileItem {
  name!: string
  size!: number;
  type!: string;
  selectedSeparator!: string;
  customSeparator!: string;
  codeCampaign!:string
  containName!:boolean
  containLastName!:boolean
  containPhone!:boolean
  containAddress!:boolean
  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent {



  

  ngOnInit(): void {
  
  }
  constructor(
    private mainLoaderService: MainLoaderService,
    private campanaServiceApi: CampanaApiService,
    private router: Router,
    private modalService: NgbModal

  ){

  }

  

  files: FileItem[] = [];
  selectedFiles : any

  campanaCRM : Campana[] = [];

  onFileSelected(event: any) {
    const selectedFiles = event.target.files;
    this.selectedFiles = selectedFiles
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = new FileItem();
      file.name = selectedFiles[i].name;
      file.size = selectedFiles[i].size;
      file.type = selectedFiles[i].type;
      
      if (file.type === 'text/plain' || file.type === 'text/csv') {
        file.selectedSeparator = ';'; // Inicializa con punto y coma
        file.customSeparator = '';
        this.files.push(file);
      } else {
        // Archivo no permitido
        alert(`El archivo ${file.name} no tiene una extension permitida`);
      }
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


    public readFiles(){
      
    }

    public async openEditUserModal(){
      let state = false;
      if(this.files.length==0){
        alert('Selecciona Al menos un archivo');
      }else{
        this.mainLoaderService.createLoadingScreen();
        for (let i = 0; i < this.files.length; i++) {
          
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const lines = e.target.result.split('\n');
            const data = [];
            for (let j = 0; j < lines.length; j++) {
             //console.log(this.files[i].customSeparator)
             let fields;
             if(this.files[i].selectedSeparator=="otro"){
              fields = lines[j].split(this.files[i].customSeparator);
             }else{
              fields = lines[j].split(this.files[i].selectedSeparator);
             }
             let aux = " "
             let aux1 = " "
             let aux2 = " "
             let aux3 = " "
             
              if(this.files[i].containName){
                aux = fields[0]
              }
              if(this.files[i].containLastName){
                aux1 = fields[1]
              }
              if(this.files[i].containPhone){
                aux2 = fields[2]
              }
              if(this.files[i].containAddress){
                aux3 = fields[3]
              }

              const currentDate = new Date();
             this.campanaServiceApi.createCampana({
                nombre: aux,
                apellido: aux1,
                telefono:aux2,
                direccion:aux3,
                campanaCode:this.files[i].codeCampaign,
                fecha: currentDate
             });

              data.push(fields);
            }
          //  console.log(data); // Aquí puedes procesar la matriz con los datos del archivo
          };
          reader.readAsText(this.selectedFiles[i]);
        }
        state= true;
        setTimeout(() => {
          this.mainLoaderService.removeLoadingScreen();
          this.router.navigate(["campana/results"]);
        }, 500);
        
       

      }
    
     
      
   
    }

    
    

}
