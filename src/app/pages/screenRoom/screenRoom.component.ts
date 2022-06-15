import {Component, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from "devextreme/data/data_source";
import {EmployeeEditComponent} from "../employee/edit/employee-edit.component";
import {EmployeeService} from "../employee/services/employee.service";
import {PageableService} from "../../shared/services/pageable.service";
import {ScreenRoomService} from "./service/screenRoom.service";
import {ScreenRoomEditComponent} from "./edit/screenRoom-edit.component";
import DevExpress from "devextreme";
import CustomStore from "devextreme/data/custom_store";
import {DxDataGridComponent} from "devextreme-angular";
import {firstValueFrom} from "rxjs";
import {confirm} from "devextreme/ui/dialog";


@Component({
  templateUrl: 'screenRoom.component.html',
  providers: [ScreenRoomService, PageableService],
  styleUrls: [ './screenRoom.component.scss' ]
})

export class ScreenRoomComponent {

  screenRooms: DataSource;
  filter = '';

  @ViewChild(DxDataGridComponent, {static: false}) grid: DxDataGridComponent;
  @ViewChild(ScreenRoomEditComponent, {static: false}) editPopup: ScreenRoomEditComponent;

  constructor(private screenRoomService : ScreenRoomService,
              private pageableService : PageableService) {
    this.screenRooms = new DataSource({
      store: new CustomStore({
        key: 'screenRoomSeq',
        load: (loadOptions) =>{
          this.grid.instance.clearSelection();

          const pageable = this.pageableService.getPageable(loadOptions);
          pageable.filter = this.filter;

          return firstValueFrom(this.screenRoomService.list(pageable)).then(page => {
            return this.pageableService.transformPage(page);
          });

        },

      })

    });


  }

  getSelectScreenSeatSeq(): number {
    return this.grid?.instance.getSelectedRowKeys()[0];
  }

  update(){
    this.editPopup.open('update', this.getSelectScreenSeatSeq());

  }

  search(){
    this.screenRooms.reload();

  }

  create() {
    this.editPopup.open('create');
  }
}
