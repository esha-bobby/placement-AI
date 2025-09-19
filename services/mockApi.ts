import { User, Role } from '../types';

// In-memory mock database
const mockUsers: User[] = [
    { id: '1', username: 'Admin User', email: 'admin@test.com', role: Role.Admin },
    { id: '2', username: 'Student User', email: 'student@test.com', role: Role.Student },
];

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const signup = async (username: string, email: string, password: string, role: Role): Promise<User> => {
    await delay(500); // Simulate API call latency

    if (mockUsers.some(user => user.email === email)) {
        throw new Error('An account with this email already exists.');
    }

    const newUser: User = {
        id: String(mockUsers.length + 1),
        username,
        email,
        role,
    };
    mockUsers.push(newUser); // In a real app, this would be saved to a database
    
    console.log('Mock Signup Success:', newUser);
    return newUser;
};

export const login = async (email: string, password: string): Promise<User> => {
    await delay(500); // Simulate API call latency

    const user = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (user && password) { // We are not checking password for this mock
        console.log('Mock Login Success:', user);
        return user;
    } else {
        throw new Error('Invalid email or password.');
    }
};

export const googleLogin = async (): Promise<User> => {
    await delay(500);
    // Return a generic student user for social logins
    const googleUser: User = {
        id: 'social-google-1',
        username: 'Google User',
        email: 'google.user@example.com',
        role: Role.Student
    };
    console.log('Mock Google Login Success:', googleUser);
    return googleUser;
};

export const appleLogin = async (): Promise<User> => {
    await delay(500);
    // Return a generic student user for social logins
    const appleUser: User = {
        id: 'social-apple-1',
        username: 'Apple User',
        email: 'apple.user@example.com',
        role: Role.Student
    };
    console.log('Mock Apple Login Success:', appleUser);
    return appleUser;
};
