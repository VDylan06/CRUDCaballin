import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Caballo } from '../../interfaces/caballo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CaballoService } from '../../services/caballo.service';

@Component({
  selector: 'app-listado-caballo',
  templateUrl: './listado-caballo.component.html',
  styleUrls: ['./listado-caballo.component.css']
})
export class ListadoCaballoComponent implements AfterViewInit {
  loading = false;
  progress = 0;
  loading2: boolean = false;

  displayedColumns: string[] = ['nombre', 'edad', 'peso', 'color', 'raza', 'acciones'];
  dataSource = new MatTableDataSource<Caballo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _caballoService: CaballoService) {}

  ngOnInit(): void {
    this.obtenerCaballos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerCaballos() {
    this.loading2 = true;
    this._caballoService.getCaballos().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.loading2 = false;
      },
      (error) => {
        alert('Ocurrió un error.');
      }
    );
  }

  eliminarCaballo(id: number) {
    this.loading = true;
    this.animateProgress(() => {
      this._caballoService.deleteCaballo(id).toPromise().then(() => {
        this.obtenerCaballos();
        this.mensajeExito();
      });
    });
  }

  animateProgress(callback: () => void) {
    const interval = setInterval(() => {
      this.progress = Math.min(this.progress + 10, 100);
      if (this.progress === 100) {
        clearInterval(interval);
        callback();
      }
    }, 200);
  }

  mensajeExito() {
    this.loading = false;
    this._snackBar.open('El caballo fue eliminado con exito', '', {
      duration: 4000
    });
  }
}