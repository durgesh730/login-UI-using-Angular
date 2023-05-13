import { Component,Input, OnInit  } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent {
  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  selectedIndex = 0;

  ngOnInit(): void {
    var counter = 0;
    setInterval(() => {
      this.selectedIndex = counter;
      counter = counter === 10 ? 0 : counter + 1;
      if(counter >= 4){
        counter = 0;
      }
    }, 4000);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
