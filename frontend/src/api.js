const BACKEND_URL = "http://projekat2-alb-1593865384.us-east-1.elb.amazonaws.com:5000";

export async function getContacts() {
  const response = await fetch(`${BACKEND_URL}/contacts`);
  return await response.json();
}

export async function createContact(contactData) {
  const response = await fetch(`${BACKEND_URL}/create_contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
  return await response.json();
}

export async function updateContact(userId, contactData) {
  const response = await fetch(`${BACKEND_URL}/update_contact/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactData),
  });
  return await response.json();
}

export async function deleteContact(userId) {
  const response = await fetch(`${BACKEND_URL}/delete_contact/${userId}`, {
    method: "DELETE",
  });
  return await response.json();
}