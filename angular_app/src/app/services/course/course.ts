import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Course } from '../../datatypes/course';

@Injectable()
export class CourseService {

    constructor(public http: Http) {

    }

    getCourses() {
        return this.http.get('http://localhost:8080/api/v1/courses')
            .map((res) => {
                return res.json();
            })
            .map((courses: Array<any>) => {
                let result: Array<Course> = [];

                if (courses) {
                    courses.forEach((course) => {
                        result.push(new Course(course.id, course.level,
                            course.lessons_count, course.name,
                            course.summary));
                    });
                }

                return result;
            });
    }
}
