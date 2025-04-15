import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export type LeadData = {
  name: string
  email: string
  phone: string
  interestedIn: string
}

export async function submitLeadDirectly(leadData: LeadData) {
  try {
    const supabase = createClientComponentClient()

    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          interested_in: leadData.interestedIn,
          status: "new",
        },
      ])
      .select()

    if (error) {
      console.error("Direct Supabase error:", error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error in direct submission:", error)
    return { success: false, error }
  }
}
