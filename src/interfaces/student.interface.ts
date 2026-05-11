export default interface Student {
    studentName: string,
    boardRoll: number,
    registrationNumber: number,
    polytechnicName: string,
    session: string,
    phone: number,
    email: string,
    hashedPassword: string,
    dept: string,
    userRole: "ST" | "TE" | "Department CR"
}