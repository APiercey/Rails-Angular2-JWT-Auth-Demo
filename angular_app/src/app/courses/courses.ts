import { Component } from 'angular2/core';
import { CourseList } from './course-list.component';

@Component({
    selector: 'courses',
    template: require('./courses.html'),
    directives: [CourseList]
})
export class Courses {

    // lazyLoadCoursesModule() {
    //     console.log("Button clicked");
    // }
}