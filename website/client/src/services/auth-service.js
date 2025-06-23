export async function signup(user) {
    const res = await fetch('http://localhost:5000/api/signup', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Signup failed');
    return data
}