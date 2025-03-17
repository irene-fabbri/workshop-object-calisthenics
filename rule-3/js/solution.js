class Age {
  constructor(value) {
    if (!Number.isInteger(value)) throw new Error('Age must be an integer');
    if (value < 0) throw new Error('Age cannot be negative');
    if (value > 120) throw new Error('Age cannot be greater than 120');
    
    this.value = value;
    
    Object.freeze(this);
  }
  
  equals(other) {
    if (!(other instanceof Age)) {
      return false;
    }
    return this.value === other.value;
  }

  toString() {
    return `${this.value} years old`;
  }
}

class Email {
  constructor(value) {
    // example_user01@my.beautiful.firm.com
    const pattern = /^\w+@(?:[a-zA-Z0-9]+\.)+(?:\.[a-zA-Z]{2,})/;
    if(! pattern.test(value)) throw new Error('Invalid Mail Syntax');

    this.value = value;
    Object.freeze(this);
  }
}

class Role {
  static get BASIC() {
    return "BASIC";
  }

  static get PREMIUM() {
    return "PREMIUM";
  }

  static get allowedRoles(){
    return [Role.BASIC, Role.PREMIUM];
  }

  constructor(value) {
    if( !Role.allowedRoles.includes(value) ) throw new Error('Invalid Role');

    this.value = value;
  }

}

class User {

  canAccessFeature(feature) {
    return this.isPremium() || (feature === Role.BASIC && this.isBasic());
  }

  isPremium(){
    return this.hasActiveSubscription && this.roles.includes(Role.PREMIUM);
  }

  isBasic(){
    return this.roles.includes(Role.BASIC);
  }

  isAdult() {
    return this.age >= 18;
  }

  constructor(name, email, age, roles, activeSubscription) {
    Object.assign(this, {
      name: name,
      email: email,
      age: age,
      roles: roles,
      hasActiveSubscription: activeSubscription,
    });
  }
}