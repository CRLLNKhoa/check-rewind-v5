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

export async function getAllLog(limit:number) {
    try {
      const supabase = await createSupabaseServerClient();
      const { data: log } = await supabase
      .from("log")
      .select("id")
      const { data, error } = await supabase
        .from("log")
        .select("*").limit(limit).order("created_at",{ascending: false})
      if (error) {
        return { status: 400, data: [error] };
      } else return { status: 200, data: data, count: log?.length };
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

export async function deleteLog(id:number) {
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
    .from('log')
    .delete()
    .eq('id', id)
    if (error) {
      return { status: 400};
    } else return { status: 200};
  } catch (error) {
    console.log(error);
  }
}

export async function getLogs(player:string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("player", player);
    if (error) {
      return { status: 400, data: [error] };
    } else return { status: 200, data: data };
  } catch (error) {
    console.log(error);
  }
}