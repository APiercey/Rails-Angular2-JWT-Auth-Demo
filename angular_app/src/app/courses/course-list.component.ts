import {CourseService} from '../services/course/course';
import {Course}        from '../datatypes/course';
import {Component}     from 'angular2/core';
import {NgFor}         from 'angular2/common';

@Component({
    selector: 'course-list',
    template: `
        <button (click)="getCourses()">Load Courses</button>
        <ul>
            <li *ngFor="#course of courses">
                <div>ID: {{course.id}}</div>
                <div>Name: {{course.name}}</div>
            </li>
        </ul>
    `,
    directives: [NgFor],
    providers: [CourseService]
})
export class CourseList {
    courses: Array<Course>;
    error: string;

    constructor(private courseService: CourseService) {
    }

    getCourses() {
        this.courseService.getCourses()
            .subscribe(res => this.courses = res,
                       error =>  this.error = <any>error);
    }
}
