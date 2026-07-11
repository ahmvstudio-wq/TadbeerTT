

const url = `${process.env.VITE_SUPABASE_URL}/rest/v1/rpc/admin_create_job`;
const key = process.env.VITE_SUPABASE_ANON_KEY;

const job = {
  pwd: 'tadbeer2025',
  title: 'Waiter',
  department: 'Restaurant Operations',
  location: 'Muscat, Oman',
  type: 'Full-time',
  description: 'We are looking for a professional and friendly Waiter to join our growing restaurant team. You will be responsible for taking orders, serving food and beverages, and ensuring an excellent dining experience for our guests.',
  requirements: ['Previous experience as a Waiter or Server', 'Excellent customer service skills', 'Ability to work in a fast-paced environment', 'Good communication skills in English (Arabic is a plus)'],
  form_url: ''
};

async function addJob() {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': key,
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify(job)
  });
  
  if (res.ok) {
    console.log('Job added successfully:', await res.json());
  } else {
    console.error('Failed to add job:', await res.text());
  }
}

addJob();
