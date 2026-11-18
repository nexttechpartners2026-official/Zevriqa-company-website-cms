import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null

async function testConnection() {
  if (!supabase) {
    console.log('Supabase environment variables (SUPABASE_URL, SUPABASE_ANON_KEY) are not set yet.')
    return
  }

  const { data, error } = await supabase.from('users').select('*')

  if (error) {
    console.error('Error connecting to Supabase:', error.message)
  } else {
    console.log('Successfully connected to Supabase! Data:', data)
  }
}

testConnection()

export default supabase
