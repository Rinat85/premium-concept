"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";
import { getAppSessionServer } from "@/entities/session/get-app-session.server";
import { z } from "zod";

const createCourseSchema = z.object({
  name: z.string().min(1, "Название обязательно").max(200, "Слишком длинное название"),
  description: z.string().min(1, "Описание обязательно").max(5000, "Слишком длинное описание"),
});

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
) => {
  const session = await getAppSessionServer();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const validated = createCourseSchema.parse(command);
  await coursesRepository.createCourseElement(validated);
  revalidatePath("/");
};

export const deleteCourseAction = async (courseId: string) => {
  const session = await getAppSessionServer();
  if (!session) {
    throw new Error("Unauthorized");
  }

  const id = z.string().cuid().parse(courseId);
  await coursesRepository.deleteCourseElement({ id });
  revalidatePath("/");
};
