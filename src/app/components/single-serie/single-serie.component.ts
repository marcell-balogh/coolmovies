import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSerie } from 'src/app/models/single-serie';
import { SerieService } from 'src/app/services/serie.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css'],
})
export class SingleSerieComponent implements OnInit {
  public serie: SingleSerie;
  public loaded: boolean = false;
  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    public utils: UtilService
  ) {}

  ngOnInit(): void {
    this.loaded = false;
    let id: number = +this.route.snapshot.params['id'];
    this.serieService.getSerieById(id).subscribe(
      (serie) => (this.serie = serie),
      (e) => {},
      () => (this.loaded = true)
    );
  }

  getPoster(imageId: string): string {
    return this.utils.getImage(imageId, 'w500');
  }

  getIMDB(id: number): string {
    return this.utils.getIMDBLink(id);
  }
}
