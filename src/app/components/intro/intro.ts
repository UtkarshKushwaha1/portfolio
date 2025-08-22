import { Component } from '@angular/core';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
 import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';


@Component({
  selector: 'app-intro',
  imports: [NgxShineBorderComponent, NgxGradientTextComponent, NgxCrypticTextComponent, NgxTypewriterComponent],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro {

}
