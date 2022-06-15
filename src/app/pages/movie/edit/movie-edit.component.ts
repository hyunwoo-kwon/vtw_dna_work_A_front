import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import {DxFormComponent, DxValidationGroupComponent} from "devextreme-angular";
import {Movie, MovieService} from "../service/movie.service";
import notify from "devextreme/ui/notify";

@Component({
  selector: 'sample-movie-edit-popup',
  providers: [MovieService],
  templateUrl: 'movie-edit.component.html'
})

export class MovieEditComponent {
  movie: Movie;
  editMode: 'create' | 'update';
  popupVisible = false;

  @Output() onSaved = new EventEmitter<Movie>();

  @ViewChild(DxFormComponent, {static: false}) form: DxFormComponent;

  @ViewChild(DxValidationGroupComponent, {static: false}) validationGroup: DxValidationGroupComponent;

  constructor(private movieService : MovieService) {
  }

  open(editMode: 'create' | 'update', movieSeq?: number) {
    this.editMode = editMode;

    if(this.isUpdateMode()){
      this.movieService.find(movieSeq).subscribe({
        next: (v) => {
          this.movie = v;
          this.popupVisible = true;
        },
        error: (e) => {
          console.log(e);
          notify('상영작 정보를 불러오는데 오류가 발생하였습니다.', 'error', 3000);
        }
      });
    }else{
      this.movie = {} as Movie;
      this.popupVisible = true;
    }

  }

  close() {
    this.popupVisible = false;
  }

  isCreateMode() {
    return this.editMode === 'create';
  }

  isUpdateMode() {
    return this.editMode === 'update';
  }

  save = (e) => {
    const result = this.validationGroup.instance.validate();
    if (!result.isValid) {
      return;
    }

    this.popupVisible = false;
    if(this.isCreateMode()){
      this.movieService.create(this.movie).subscribe({
        next: (v) => {
          notify('상영작 생성이 성공적으로 완료되었습니다.', 'success', 3000);
          this.onSaved.emit(v);
        },
        error: (e) => {
          console.log(e);
          notify('상영작 생성에 실패하였습니다.', 'error', 3000);
        }
      });
    }else{

    }
  }

  cancel = () => {
    this.popupVisible = false;
  }
}
