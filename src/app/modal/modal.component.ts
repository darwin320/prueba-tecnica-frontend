import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CampanaApiService } from '../services/api/campana/campana-api.service';
import { MainLoaderService } from '../components/loaders/main-loader.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public roleForm = new FormGroup({
    nombre: new FormControl<string>("Nuevo rol", [Validators.required]),
    apellido: new FormControl<string>("Nuevo rol", [Validators.required]),
    telefono: new FormControl<string>("Nuevo rol", [Validators.required]),
    direccion: new FormControl<string>("Nuevo rol", [Validators.required]),
    campanaCode: new FormControl<string>("Nuevo rol", [Validators.required]),

});

constructor(
    public activeModal: NgbActiveModal,

    private campanaApiService: CampanaApiService,
    private mainLoaderService: MainLoaderService
) {}

public async createRole() {
    if (this.roleForm.valid) {


        this.activeModal.close();
    }
}
}
