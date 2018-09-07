// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const driver_first_name = driver.split(' ')[0];
    const driver_last_name = driver.split(' ')[1];

    return { firstName: driver_first_name, lastName: driver_last_name };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    const driver_name = driver.name;
    const driver_hometown = driver.hometown;

    return `${driver_name} is from ${driver_hometown}`;
  });
}
