const BASE_URL = 'http://192.168.1.8:8080/api/users';

export const Signupusers = async (users) => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(users),
  });
  if (!response.ok) throw new Error('Failed to create user');
  return response.json();
};
