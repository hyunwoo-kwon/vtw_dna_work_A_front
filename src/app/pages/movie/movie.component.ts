import {Component, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from "devextreme/data/data_source";
import {EmployeeEditComponent} from "../employee/edit/employee-edit.component";
import {EmployeeService} from "../employee/services/employee.service";
import {PageableService} from "../../shared/services/pageable.service";
import {MovieService} from "./service/movie.service";
import {MovieEditComponent} from "./edit/movie-edit.component";
import DevExpress from "devextreme";
import CustomStore from "devextreme/data/custom_store";
import {DxDataGridComponent} from "devextreme-angular";
import {firstValueFrom} from "rxjs";
import {confirm} from "devextreme/ui/dialog";


@Component({
  templateUrl: 'movie.component.html',
  providers: [MovieService, PageableService],
  styleUrls: [ './movie.component.scss' ]
})

export class MovieComponent {

  movies: DataSource;
  filter = '';

  @ViewChild(DxDataGridComponent, {static: false}) grid: DxDataGridComponent;
  @ViewChild(MovieEditComponent, {static: false}) editPopup: MovieEditComponent;

  constructor(private movieService : MovieService,
              private pageableService : PageableService) {
    this.movies = new DataSource({
      store: new CustomStore({
        key: 'movieSeq',
        load: (loadOptions) =>{
          this.grid.instance.clearSelection();

          const pageable = this.pageableService.getPageable(loadOptions);
          pageable.filter = this.filter;

          return firstValueFrom(this.movieService.list(pageable)).then(page => {
            return this.pageableService.transformPage(page);
          });

        },

      })

    });


  }

  getSelectMovieSeq(): number {
    return this.grid?.instance.getSelectedRowKeys()[0];
  }

  update(){
    this.editPopup.open('update', this.getSelectMovieSeq());

  }

  search(){
    this.movies.reload();

  }

  create() {
    this.editPopup.open('create');
  }
}
