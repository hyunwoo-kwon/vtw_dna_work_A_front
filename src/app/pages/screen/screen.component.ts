import {Component, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from "devextreme/data/data_source";
import {EmployeeEditComponent} from "../employee/edit/employee-edit.component";
import {EmployeeService} from "../employee/services/employee.service";
import {PageableService} from "../../shared/services/pageable.service";
import {ScreenService} from "./service/screen.service";
import DevExpress from "devextreme";
import CustomStore from "devextreme/data/custom_store";
import {DxDataGridComponent} from "devextreme-angular";
import {firstValueFrom} from "rxjs";
import {confirm} from "devextreme/ui/dialog";
import { DxSliderModule } from "devextreme-angular";


@Component({
  templateUrl: 'screen.component.html',
  providers: [ScreenService, PageableService],
  styleUrls: [ './screen.component.scss' ]
})

export class ScreenComponent {

  screen: DataSource;
  filter = '';

  @ViewChild(DxDataGridComponent, {static: false}) grid: DxDataGridComponent;

  constructor(private screenService : ScreenService,
              private pageableService : PageableService) {
    this.screen = new DataSource({
      store: new CustomStore({
        key: 'screenSeq',
        load: (loadOptions) =>{
          this.grid.instance.clearSelection();

          const pageable = this.pageableService.getPageable(loadOptions);
          pageable.filter = this.filter;

          return firstValueFrom(this.screenService.list(pageable)).then(page => {
            return this.pageableService.transformPage(page);
          });

        },

      })

    });


  }

  formatSliderTooltip(value){
    return value.substring(0,4)+"년"+value.substring(4,6)+"월"+value.substring(6)+"일";
  }

  getSelectScreenSeatSeq(): number {
    return this.grid?.instance.getSelectedRowKeys()[0];
  }

  search(){
    this.screen.reload();

  }
}
