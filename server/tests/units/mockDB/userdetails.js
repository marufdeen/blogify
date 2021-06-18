const signup = {
  incomplete: {
    firstName: {
      firstName: '',
      lastName: 'maruf',
      email: 'maruf@example.com',
      password: 'code2031'
    },
    firstNameLenght: {
      firstName: 'ma',
      lastName: 'maruf',
      email: 'maruf@example.com',
      password: 'code2031'
    },
    lastName: {
      firstName: 'maruf',
      lastName: '',
      email: 'maruf@example.com',
      password: 'code2031'
    },
    lastNameLenght: {
      firstName: 'maruf',
      lastName: 'ma',
      email: 'maruf@example.com',
      password: 'code2031'
    },
    email: {
      firstName: 'maruf',
      lastName: 'murouf',
      email: '',
      password: 'code2031'
    },
    emailFormat: {
      firstName: 'maruf',
      lastName: 'murouf',
      email: 'maruf',
      password: 'code2031'
    },
    password: {
      firstName: 'maruf',
      lastName: 'murouf',
      email: 'maruf@example.com',
      password: ''
    },
    passwordLenght: {
      firstName: 'maruf',
      lastName: 'murouf',
      email: 'maruf@example.com',
      password: 'ma'
    }
  },
  complete: {
    userId: 6,
    firstName: 'maruf',
    lastName: 'ajagunna',
    email: 'marufajagunna@gmail.com',
    password: 'code2031',
    role: 1
  }
};

const login = {
  incomplete: {
    email: {
      email: '',
      password: 'code2031'
    },
    invalidEmail: {
      email: 'marufat',
      password: 'code2031'
    },
    password: {
      email: 'maruf@example.com',
      password: ''
    },
    invalidPassword: {
      email: 'maruf@example.com',
      password: 'ma'
    }
  },
  complete: {
    incorrect: {
      email: 'marufatu@gmail.com',
      password: 'marufatul12'
    },
    correct: {
      email: 'marufajagunna@gmail.com',
      password: 'code2031'
    }
  }
};

const user = {
  userId: 1
};

module.exports = { signup, login, user };
