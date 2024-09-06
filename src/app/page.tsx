import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8">
      <h1>Courses Edit</h1>
      <h2>Added</h2>
      <CreateCourseForm
        revalidatePagePath="/"
        className="max-w-[300px] mb-10"
      />
      <p>List</p>
      <ul>
        <li>Test</li>
      </ul>
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
