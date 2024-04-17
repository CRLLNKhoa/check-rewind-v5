"use server";
import createSupabaseServerClient from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs";

export async function getLog() {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", user?.username);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}

export async function getAllLog() {
    try {
      const supabase = await createSupabaseServerClient();
      const { data, error } = await supabase
        .from("log")
        .select("*")
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data };
    } catch (error) {
      console.log(error);
    }
  }

export async function addLog(newLog: any) {
  try {
    const supabase = await createSupabaseServerClient();
    const user = await currentUser();
    const { data, error } = await supabase
      .from("log")
      .insert([{ ...newLog, player: user?.username || "Idol ẩn danh" }])
      .select("*");
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}
