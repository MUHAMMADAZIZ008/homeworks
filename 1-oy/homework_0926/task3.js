function employeesSalary(employeesSet) {
    if (employeesSet.size === 0) {
        return "employees seti bo'sh.";
    }
    
    let department = {};
    let itSum = 0, itCount = 0;
    let hrSum = 0, hrCount = 0;

    for (let val of employeesSet) {
        if (val["department"] === "IT") {
            itCount++;
            itSum += val["salary"];
        } else if (val["department"] === "HR") {
            hrCount++;
            hrSum += val["salary"];
        }
    }

    department["IT"] = itCount > 0 ? Math.floor(itSum / itCount) : 0;
    department["HR"] = hrCount > 0 ? Math.floor(hrSum / hrCount) : 0;

    if (department["IT"] > department["HR"]) {
        return { "department": "IT", average: department["IT"] };
    } else {
        return { "department": "HR", average: department["HR"] };
    }
}

const employees = new Set([
    { name: "John", salary: 50000, department: "IT"},
    { name: "Jane", salary: 60000, department: "HR"},
    { name: "Bob", salary: 55000, department: "IT"},
    { name: "Sophie", salary: 75000, department: "HR"},
    { name: "Mike", salary: 65000, department: "IT"},
    { name: "Emily", salary: 80000, department: "HR"},
    { name: "David", salary: 70000, department: "IT"}
]);

console.log(employeesSalary(employees));
