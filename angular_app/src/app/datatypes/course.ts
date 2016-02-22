export class Course {
    id: number;
    level: string;
    lessons_count: number;
    name: string;
    summary: string;

    constructor(
        id: number,
        level: string,
        lessons_count: number,
        name: string,
        summary: string
    ) {
        this.id = id;
        this.level = level;
        this.lessons_count = lessons_count;
        this.name = name;
        this.summary = summary;
    }
}
