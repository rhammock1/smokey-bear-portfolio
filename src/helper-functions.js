function greeting() {
  const date = new Date();
  const hr = date.getHours();
  let greeting = '';
    if (hr < 12) {
        greeting = 'Good Morning, my name is Robert Hammock';
    } else if (hr < 18) {
        greeting = 'Good Afternoon, my name is Robert Hammock';
    } else if (hr < 24) {
        greeting = 'Good Evening, my name is Robert Hammock';
    } else {
        greeting = 'Hello, my name is Robert Hammock';
    }
    return greeting;
}

export {
  greeting,
}