import { Component } from '@angular/core';

/**
 * @Decorator - Special kind of declaration that can be attached to a class declaration, method, accessor, property, or param
 * Uses the form @expression (i.e. @Component ), where expression MUST evaluate to a func that'll be called at runtime w/ info about the decorated decorator
 */
// The below is metadata (actually part of TS, not Ang)

@Component({
  selector: 'app-root', // By your selector, you're able to attach this comp into the DOM // index.html has <app-root></app-root> (not a typical HTML elem)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // you can "stack" your styles (optional)
})
// When the app is being compiled, it hits this @Component decorator 
// Then, it calls this func (within @Component), passing in this param (in this case, is a comp configuration obj)
// Then, it performs some functionality
// Within this, we're going to tell Ang how we want to decorate this class (to make it available or to make it function as an ang comp within our app)


export class AppComponent {
  title = 'Angular 9 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];

  constructor() {}
}
