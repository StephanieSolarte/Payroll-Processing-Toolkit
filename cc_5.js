let employees = [
    {
        name: "carissa",
        hourlyRate: 35,
        hoursWorked: 25
    },
    {
        name: "stephanie",
        hourlyRate: 40,
        hoursWorked: 30
    },
    {
        name: "alyssa",
        hourlyRate: 30,
        hoursWorked: 20
    },
    {
        name: "luke",
        hourlyRate: 20,
        hoursWorked: 15
    },
];

const calculateBasePay = (rate,hours) => {
    return Math.min(hours,40) * rate;
};

const calculateOvertimePay = (rate,hours) => {
    if (hours <= 40) return 0;
    return (hours - 40) * (rate * 1.5);
};

const calculateTaxes = (grossPay) => {
    return grossPay * 0.15;
};
    
function processPayroll(employees){
    const basePay = calculateBasePay(employees.hourlyRate, employees.hoursWord);
    const overtimePay = calculateOvertimePay(employees.hourlyRate,employees.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;
    
    return {
        name: employees.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}

console.log("--- Payroll Report ---");
employees.forEach(emp => {
    const report = processPayroll(emp);
    console.log(report);
});


