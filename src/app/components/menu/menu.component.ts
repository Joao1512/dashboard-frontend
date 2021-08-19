import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];
  adminItems: any[] = [];
  @Output() title = new EventEmitter();

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit() {
    this.getFullMenu()
  }

  public emitirTituloPagina(titulo: string) {    
    this.title.emit(titulo);
  }

  public getMainMenu() {
    this.menuService.getMainMenu().subscribe(res => {
      this.menuItems = res
      
    })
  }

  public getAdminMenu() {
    this.menuService.getAdminMenu().subscribe(res => {
      this.adminItems = res
    })
  }


  public getFullMenu() {
    this.getMainMenu()
    this.getAdminMenu()
  }

}
