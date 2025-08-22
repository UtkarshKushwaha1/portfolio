import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Intro } from './components/intro/intro';
import { Experience } from './components/experience/experience';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { Projects } from "./components/projects/projects";
import { Hobbies } from './components/hobbies/hobbies';
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Intro, Experience, NgxShineBorderComponent, Projects, Hobbies, NgxGradientTextComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
