import { coursesRepository } from "../courses.repository";
import { CourseItem } from "../ui/course-item";
import { deleteCourseAction } from "../actions";

export async function CoursesList() {
  const coursesList = await coursesRepository.getCoursesList();

  return (
    <div className="flex flex-col gap-3">
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={deleteCourseAction.bind(null, course.id)}
        />
      ))}
    </div>
  );
}
