export interface BindingProperties {
    value: any,
    name: string,
    tag: string,
}

export interface User extends GeneralStudent{
    email: string,
    age: number,
    phone: string,
    grade: number,
    personalNumber: string,
    subjects: (string|number)[],  // Array<string|number>
    username: string,
    birthDate: Date,
    image: string,
    university: string


}
export interface GeneralStudent {
    username: string,
    name: string,
    image: string,
    examPassed: boolean,
    id: number


}