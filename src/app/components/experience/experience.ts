import { Component, HostListener } from '@angular/core';
import { NgxTimelineComponent, TimelineEntry } from '@omnedia/ngx-timeline';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [NgxTimelineComponent, NgxNeonUnderlineComponent],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  constructor(private cdr: ChangeDetectorRef) {}

  timelineEntries: TimelineEntry[] = [
    {
      title: `<p class="timeline-title" style="
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
        color: #2d3748;
        margin-bottom: 0.25rem;
      ">Global Logic India<br><span class="timeline-company-subline" style="
        font-size: clamp(0.85rem, 2vw, 1rem);
        font-weight: 400;
        color: #718096;
        display: block;
        margin-top: 0.25rem;
      ">(A Hitachi Group Company)</span></p>`,
      content: `<div class="timeline-content" style="
        font-size: clamp(0.875rem, 1.8vw, 1rem);
        line-height: 1.6;
        color: #4a5568;
      "><span class="timeline-title-only" style="
        font-size: clamp(1rem, 2.2vw, 1.25rem);
        font-weight: 600;
        color: oklch(70.4% 0.191 22.216);
        display: block;
        margin-bottom: 0.5rem;
      ">Associate Software Engineer</span><span class="timeline-content-time" style="
        font-size: clamp(0.8rem, 1.6vw, 0.9rem);
        color: #718096;
        background: #f7fafc;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        display: inline-block;
        margin-bottom: 0.75rem;
        font-weight: 500;
      ">(Mar 2024 - Present)</span><br>
      
      <!-- Skills Icons -->
      <div style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: clamp(0.5rem, 1.5vw, 0.75rem); align-items: center;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" 
             alt="Angular" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" 
             alt="TypeScript" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="stripe_logo.png" 
             alt="Stripe" style="width: clamp(32px, 5vw, 40px); height: clamp(20px, 3vw, 24px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
             alt="HTML5" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
             alt="CSS3" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
      </div>
      
      <div style="margin-top: 0.75rem; space-y: 0.5rem;">
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Experienced Frontend Developer skilled in building dynamic Angular web applications for healthcare clients.
        </p>
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Migrated Windows app to Angular web app; integrated Stripe and Worldpay
        </p>
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Developed frontend user management systems for smooth transactions and efficient access control.
        </p>
      </div></div>`,
    },
    {
      title: `<p class="timeline-title" style="
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
        color: #2d3748;
        text-align: right;
        padding-right: 2rem;
        height: auto;
        display: block;
      ">Eklavya.me</p>`,
      content: `<div class="timeline-content" style="
        font-size: clamp(0.875rem, 1.8vw, 1rem);
        line-height: 1.6;
        color: #4a5568;
        padding-left: 2rem;
      "><span class="timeline-title-only" style="
        font-size: clamp(1rem, 2.2vw, 1.25rem);
        font-weight: 600;
        color: oklch(70.4% 0.191 22.216);
        display: block;
        margin-bottom: 0.5rem;
      ">Game Developer Intern</span><span class="timeline-content-time" style="
        font-size: clamp(0.8rem, 1.6vw, 0.9rem);
        color: #718096;
        background: #f7fafc;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        display: inline-block;
        margin-bottom: 0.75rem;
        font-weight: 500;
      ">(Oct 2023 - Jan 2024)</span><br>
      
      <!-- Skills Icons -->
      <div style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: clamp(0.5rem, 1.5vw, 0.75rem); align-items: center;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
             alt="HTML5" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
             alt="CSS3" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
             alt="JavaScript" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
             alt="Node.js" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
       </div>
      
      <div style="margin-top: 0.75rem;">
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Developed web games using HTML, CSS, JavaScript, and Node.js.
        </p>
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Designed responsive website layouts ensuring seamless and scalable user experience through best coding practices.
        </p>
      </div></div>`,
    },
    {
      title: `<p class="timeline-title" style="
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
        color: #2d3748;
      ">Zuan Design Labs LLP</p>`,
      content: `<div class="timeline-content" style="
        font-size: clamp(0.875rem, 1.8vw, 1rem);
        line-height: 1.6;
        color: #4a5568;
      "><span class="timeline-title-only" style="
        font-size: clamp(1rem, 2.2vw, 1.25rem);
        font-weight: 600;
        color: oklch(70.4% 0.191 22.216);
        display: block;
        margin-bottom: 0.5rem;
      ">Machine Learning Intern</span><span class="timeline-content-time" style="
        font-size: clamp(0.8rem, 1.6vw, 0.9rem);
        color: #718096;
        background: #f7fafc;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        display: inline-block;
        margin-bottom: 0.75rem;
        font-weight: 500;
      ">(Jul 2022 - Sep 2022)</span><br>
      
      <!-- Skills Icons -->
      <div style="margin: 1rem 0; display: flex; flex-wrap: wrap; gap: clamp(0.5rem, 1.5vw, 0.75rem); align-items: center;">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
             alt="Python" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" 
             alt="OpenCV" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
             alt="AWS" style="width: clamp(32px, 5vw, 40px); height: clamp(20px, 3vw, 24px);" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" 
             alt="TensorFlow" style="width: clamp(24px, 4vw, 32px); height: clamp(24px, 4vw, 32px);" />
      </div>
      
      <div style="margin-top: 0.75rem;">
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Contributed to the "Roads That Honk" anti-collision vehicle management system.
        </p>
        <p style="margin: 0 0 0.5rem 0; padding-left: 1rem; position: relative;">
          <span style="position: absolute; left: 0; color: #553c9a;">•</span>
          Managed AWS EC2, integrated S3 and EFS storage, automated processes to boost efficiency, and applied computer vision techniques for image analysis.
        </p>
      </div></div>`,
    },
  ];
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Trigger change detection for responsive properties
    this.cdr.detectChanges();
  }

  get timelineOrientation() {
    return window.innerWidth < 768 ? 'vertical' : 'switch';
  }

  get timelineGap() {
    return window.innerWidth < 640 ? '1rem' : 
           window.innerWidth < 1024 ? '1.5rem' : '2rem';
  }

  get timelinePathWidth() {
    return window.innerWidth < 640 ? '1px' : '2px';
  }

  get timelineTitleGap() {
    return window.innerWidth < 640 ? '2rem' : 
           window.innerWidth < 1024 ? '3rem' : '4rem';
  }
}