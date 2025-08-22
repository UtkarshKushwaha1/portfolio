import { Component } from '@angular/core';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';
import { NgxLavaLampComponent } from '@omnedia/ngx-lava-lamp';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { NgxHighlighterComponent } from "@omnedia/ngx-highlighter";


@Component({
  selector: 'app-projects',
  imports: [NgxShineBorderComponent, NgxGradientTextComponent,
     NgxCrypticTextComponent, NgxTypewriterComponent, NgxLavaLampComponent, 
     NgxHighlighterComponent],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects {

}
