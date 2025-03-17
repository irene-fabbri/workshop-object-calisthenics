class UserManager {
    constructor() {
      this.users = [];
    }
    
    addUser(user) {
      if (this.findUserByEmail(user.email)) {
        throw new Error('User with email already exists');
      }
      this.users.push(user);
    }
    
    findUsrByEmail(email) {
      return this.users.find(user => user.email === email);
    }
    
    updateUserAddress(userId, address) {
      const user = this.findUserById(userId);
      if (user) {
        user.address = address;
        this.saveUsers();
      }
    }
    
    findUsrById(id) {
      return this.users.find(user => user.id === id);
    }
    
    saveUsers() {
      console.log('Saving users to database');
    }
  }