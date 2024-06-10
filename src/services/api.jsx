export const loginService = async (email, password) => {
    // Giả sử chúng ta sử dụng một API để xác thực người dùng
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    const data = await response.json();
    return data.user;
};

export const registerService = async (email, password) => {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    const data = await response.json();
    return data.user;
};
