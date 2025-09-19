
export enum Role {
    Student = 'student',
    Admin = 'admin',
}

export interface User {
    id: string;
    username: string;
    email: string;
    role: Role;
}

export interface Company {
    id: string;
    name: string;
    industry: string;
}

export interface Interview {
    id: string;
    studentName: string;
    companyName: string;
    time: string;
    date: Date;
}

export interface Application {
    id: string;
    companyName: string;
    role: string;
    status: 'Applied' | 'Interview Scheduled' | 'Offer Received' | 'Rejected';
    matchPercentage: number;
}
