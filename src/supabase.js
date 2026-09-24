import { createClient } from "@supabase/supabase-js";

const supabaseUrl = " https://fzlwzpdsqvhaoroebhpl.supabase.co";
const supabaseKey = "sb_publishable_ZdtokmrCQSefEomBda8FTQ_hktXaWfi";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);