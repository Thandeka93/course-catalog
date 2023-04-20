function tutorWageCalculator(timesheet, level) {
  let hourlyRate;
  let totalWage = 0; 
  switch (level) {
    case 'Level 1':
      hourlyRate = 15;
      break;
      case 'Level 2':
      hourlyRate = 20;
      break;
      case 'Level 3':
      hourlyRate = 25;
      break;
      default:
      hourlyRate = 0;
  }
  const hoursWorked = timesheet.split(',').map(parseFloat).reduce((a, b) => a + b);
  totalWage = hourlyRate * hoursWorked;

  return totalWage;
}
