"use server";
import data from "../json/project.json";

export async function fetchData() {
  return data;
}
