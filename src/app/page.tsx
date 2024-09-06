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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde molestias adipisci, cumque modi iste praesentium optio officiis! Assumenda, doloremque illo sed perspiciatis quos laborum deserunt possimus excepturi commodi saepe!</p>
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
